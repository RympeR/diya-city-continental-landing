import React, { createContext, ReactNode, useEffect, useState } from "react";
import langData from "../public/text/index.json";

export const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<any>(langData.EN);

  useEffect(() => {
    if (localStorage.getItem('hypefansLang') === "EN") {
      return setCurrentLang(langData.EN)
    } else if (localStorage.getItem('hypefansLang') === "UA") {
      return setCurrentLang(langData.UA)
    }
  }, [])

  return (
    <LangContext.Provider value={{ currentLang, setCurrentLang }}>
      {children}
    </LangContext.Provider>
  );
};
