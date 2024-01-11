import React from "react";
import { Link } from "react-router-dom";

function BackHomeButton(){
    return(
        <div className="back-home-btn">
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit', display: 'flex', allignItem: 'center'}}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
                back
            </Link>
        </div>
    )
}

export default BackHomeButton