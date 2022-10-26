import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../LangProvider";


export const TitleBlock = () => {

    const { currentLang } = useContext(LangContext);

    return (
        <div className="title-block"></div>
    );
}