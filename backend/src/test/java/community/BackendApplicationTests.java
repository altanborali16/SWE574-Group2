//package community;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import community.users.User;
//import org.junit.jupiter.api.Disabled;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.context.annotation.Import;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@Import(TestcontainersConfiguration.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//class BackendApplicationTests {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Test
//    void contextLoads() {
//    }
//
//    @Test
//    public void user_signs_up() throws Exception {
//        User user = buildTestUser("user@company.com");
//
//        mockMvc.perform(MockMvcRequestBuilders.post("/auth/signup")
//                        .content(asJsonString(user))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.jwt").exists())
//                .andExpect(jsonPath("$.jwt").isNotEmpty())
//                .andExpect(jsonPath("$.status").exists())
//                .andExpect(jsonPath("$.status").value(true))
//        ;
//    }
//
//    @Test
//    public void user_signs_in() throws Exception {
//        User user = buildTestUser("user2@company.com");
//
//        mockMvc.perform(MockMvcRequestBuilders.post("/auth/signup")
//                        .content(asJsonString(user))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.jwt").exists())
//                .andExpect(jsonPath("$.jwt").isNotEmpty())
//                .andExpect(jsonPath("$.status").exists())
//                .andExpect(jsonPath("$.status").value(true))
//        ;
//
//        mockMvc.perform(MockMvcRequestBuilders.post("/auth/signin")
//                        .content(asJsonString(user))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.jwt").exists())
//                .andExpect(jsonPath("$.jwt").isNotEmpty())
//                .andExpect(jsonPath("$.status").exists())
//                .andExpect(jsonPath("$.status").value(true))
//        ;
//    }
//
//    private static User buildTestUser(String email) {
//        User user = new User();
//        user.setEmail(email);
//        user.setFullName("John Doe");
//        user.setPassword("super-secret-password");
//        return user;
//    }
//
//    private static String asJsonString(final Object obj) {
//        try {
//            return new ObjectMapper().writeValueAsString(obj);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//}
