import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../LangProvider";


export const DigitsBlock = () => {

    const { currentLang } = useContext(LangContext);
    
    return (
        <div className="title-block"></div>
    );
}