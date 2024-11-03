import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(undefined);
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}

const authTokenKey = "COMMUNITY_AUTH_TOKEN";
const userId = "COMMUNITY_USER_ID";

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  // Function to retrieve the token from the cookie
  // const getSession = () => {
  //   const fetchedCookie = getCookie(authTokenKey)?.toString();
  //   if (!fetchedCookie) return null; // Return null if no cookie
  //   return fetchedCookie; // Return the token as a string
  // };
  const getSession = () => localStorage.getItem("token");

  const [token, setToken] = useState(getSession()); // State now holds the token
  const [isAuthenticated, setIsAuthenticated] = useState(!!getSession());

  // Function to save the token
  const saveSession = (token,user_id) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days
    const options = { expires: expirationDate }; // Set the specific expiration date
    setCookie(authTokenKey, token, options); // Set the token with expiry
    setCookie(userId, user_id, options); // Set the token with expiry
    setToken(token); // Save the token in state
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  // Function to remove the token and redirect
  const removeSession = () => {
    deleteCookie(authTokenKey); // Delete the token from cookies
    deleteCookie(userId)
    setToken("null"); // Clear the token from state
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate("/auth/sign-in"); // Redirect to sign-in page
  };

  return (
    <AuthContext.Provider
      value={{
        //user
        token, // Provide token instead of user data
        // isAuthenticated: hasCookie(authTokenKey), // Check if token exists
        isAuthenticated,
        saveSession,
        removeSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
