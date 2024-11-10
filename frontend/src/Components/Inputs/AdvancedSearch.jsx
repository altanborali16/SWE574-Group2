import { useState } from "react";
import "../../Styles/AdvancedSearch.css";

function AdvancedSearch({ onClick }) {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        {/* Text Search Area */}
        <button onClick={() => onClick && onClick((prev) => !prev)}>
          Search...
        </button>
      </nav>
    </div>
  );
}

export default AdvancedSearch;
