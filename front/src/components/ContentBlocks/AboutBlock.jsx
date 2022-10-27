import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../LangProvider";
import { ReactComponent as Logo } from "../../../public/images/logo.svg";
import { Link } from 'react-router';
export const AboutBlock = () => {

    const { currentLang } = useContext(LangContext);
    
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-2">

                </div>
                <div className="col-2">

                </div>
                <div className="col-4 d-flex">
                    <div className="col-3">
                        <h4 className="route-anchors">
                            <Link to='/'>{currentLang.home || 'Home'}</Link>
                        </h4>
                    </div>
                    <div className="col-3">
                        <h4 className="route-anchors">
                            {currentLang.home || 'Home'}
                        </h4>
                    </div>
                    <div className="col-3">
                        <h4 className="route-anchors">
                            {currentLang.home || 'Home'}
                        </h4>
                    </div>
                    <div className="col-3">
                        <h4 className="route-anchors">
                            {currentLang.home || 'Home'}
                        </h4>
                    </div>
                </div>
                <div className="col-3">

                </div>
                <div className="col-3">

                </div>

                
                <h4 className="route-anchors"></h4>
                <h4 className="route-anchors"></h4>
            </div>
        </div>
    );
}