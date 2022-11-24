import React from "react";

export default function FloatButton ({styled, icon, alt, action}) {

    return (
        <div className={styled} onClick={() => action()}>
            <img src={icon} alt={alt} />
        </div> 
    )
}