import { useState } from "react";
import "../../Styles/AdvancedSearch.css";

function AdvancedSearch({ onClick }) {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="mobile-search">
        {/* Text Search Area */}
        <button className="search-button" onClick={() => onClick && onClick((prev) => !prev)}>
          <span> Search... </span>
        </button>
      </nav>
    </div>
  );
}

export default AdvancedSearch;
