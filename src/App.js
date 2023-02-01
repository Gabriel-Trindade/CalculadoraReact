
import "./App.css";
import React from "react";
import ButtonCustom from "./components/ButtonCustom";
import * as math from "mathjs";
import { useState } from "react";
import { render } from "@testing-library/react";


const arrOp = ["*", "/", "+", ".", "-"];

const ArrayRef = ["https://www.linkedin.com/in/gabriel-trindadev/", "https://github.com/Gabriel-Trindade"]

function Home()  {
  const [input, setInput] = useState("")
  function insertNumber(value) {
    setInput(input + value)
  }
  
  function insertOp(value) {
    if (input === "" || (arrOp.includes(input[input.length - 1]) && arrOp.includes(value))
    ) {
      return;
    } else {
      setInput(input + value);
    }
  }
  
  
  function calc() {
    if (input === "" || arrOp.includes(input[input.length - 1])) {
      return input;
    } else {
      setInput(math.evaluate(input));
    } 
  }
  
  return (
    
    <>
      <header>
        <h1 className="titleHeader">Projeto de Calculadora 🖩</h1>
        <nav>
          <ul>
            <h2 className="socialMedia">
              <a href="https://www.linkedin.com/in/gabriel-trindadev/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </h2>
            <h2 className="socialMedia">
              <a href="https://github.com/Gabriel-Trindade" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </h2>
          </ul>
        </nav>
      </header>

      <div className="App">
      <div className="calc-wrapper">
        <ButtonCustom isInput>{ input }</ButtonCustom>
        <div className="line">
          <ButtonCustom onClick={insertNumber}>7</ButtonCustom>
          <ButtonCustom onClick={insertNumber}>8</ButtonCustom>
          <ButtonCustom onClick={insertNumber}>9</ButtonCustom>
          <ButtonCustom onClick={insertOp}>/</ButtonCustom>
        </div>
        <div className="line">
          <ButtonCustom onClick={insertNumber}>4</ButtonCustom>
          <ButtonCustom onClick={insertNumber}>5</ButtonCustom>
          <ButtonCustom onClick={insertNumber}>6</ButtonCustom>
          <ButtonCustom onClick={insertOp}>*</ButtonCustom>
        </div>
        <div className="line">
          <ButtonCustom onClick={insertNumber}>1</ButtonCustom>
          <ButtonCustom onClick={insertNumber}>2</ButtonCustom>
          <ButtonCustom onClick={insertNumber}>3</ButtonCustom>
          <ButtonCustom onClick={insertOp}>+</ButtonCustom>
        </div>
        <div className="line">
          <ButtonCustom onClick={insertNumber}>.</ButtonCustom>
          <ButtonCustom onClick={insertNumber}>0</ButtonCustom>
          <ButtonCustom onClick={() => setInput("")}>C</ButtonCustom>
          <ButtonCustom onClick={insertOp}>-</ButtonCustom>
        </div>
        <div className="line">
          <ButtonCustom onClick={calc}>=</ButtonCustom>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
