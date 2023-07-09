import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button 
                onClick={() =>
                    handleToggleDarkMode(
                        (previousMode) => !previousMode
                    )
                }
                className="save head"
            >
                Toggle Mode
            </button>
        </div>
    );
};

export default Header;