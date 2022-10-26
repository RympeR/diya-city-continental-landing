import logo from './logo.svg';
import './App.css';
import React from 'react';

import { LangProvider } from "./LangProvider";

import { AboutBlock } from "./components/ContentBlocks/AboutBlock";
import { ConvenienceBlock } from "./components/ContentBlocks/ConvenienceBlock";
import { DigitsBlock } from "./components/ContentBlocks/DigitsBlock";
import { FooterBlock } from "./components/ContentBlocks/FooterBlock";
import { IndustriesBlock } from "./components/ContentBlocks/IndustriesBlock";
import { ResidentBlock } from "./components/ContentBlocks/ResidentBlock";
import { SolutionsBlock } from "./components/ContentBlocks/SolutionsBlock";
import { TechBlock } from "./components/ContentBlocks/TechBlock";
import { TitleBlock } from "./components/ContentBlocks/TitleBlock";

function App() {
  return (
    <LangProvider>
      <AboutBlock />
      <ConvenienceBlock />
      <DigitsBlock />
      <FooterBlock />
      <IndustriesBlock />
      <ResidentBlock />
      <SolutionsBlock />
      <TechBlock />
      <TitleBlock />
    </LangProvider>
  );
}

export default App;
