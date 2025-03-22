import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  let [calVal, SetcalVal] = useState("");
  function OnButtonClick(buttonText) {
    if (buttonText === "C") {
      SetcalVal("");
    }else if(buttonText === "="){
      try {
        SetcalVal(eval(calVal).toString());
      } catch (error) {
        SetcalVal("Error");
      }
    }
     else if (buttonText === "X") {
      SetcalVal(calVal.slice(0, -1));
    } else {
      const newText = calVal + buttonText;
      SetcalVal(newText);
    }
  }

  return (
    <>
      <Container>
        <Header displayValue={calVal}></Header>
        <Body OnButtonClick={OnButtonClick}></Body>
      </Container>
    </>
  );
}

export default App;
