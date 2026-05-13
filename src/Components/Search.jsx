import React, { useRef, useEffect, useState } from "react";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  // Close modal on 'Escape' key
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close modal if clicked outside form
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("search-overlay")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Trigger */}
      <a href="#search1" onClick={(e) => { e.preventDefault(); setIsOpen(true); }}>
        <i className="fa fa-search fa-lg me-5 text-white"></i>
      </a>

      {/* Modal */}
      {isOpen && (
        <div
          id="search1"
          className="search-overlay open"
          onClick={handleOverlayClick}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <form>
            <input
              type="search"
              placeholder="Type to search..."
              ref={inputRef}
              style={{ padding: "10px", width: "300px", fontSize: "16px" }}
            />
            <button
              type="button"
              className="close"
              onClick={() => setIsOpen(false)}
              style={{ marginLeft: "10px", fontSize: "16px" }}
            >
              &times;
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchModal;
