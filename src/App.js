import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (<div>
    <Steps />
    <Steps />
  </div>);
}


function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((curStep) => curStep - 1);
    };
  }
  function handleNext() {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
    };
  }

  

  return (
    // react.fragment
    <div>
      {/* <button className="close" onClick={() => setIsOpen(false)}>&times;</button> */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>

      {/* <button className="open" onClick={() => setIsOpen(true)}>Open</button> */}

    {isOpen && 
      (<div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : ""}>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button onClick={handlePrevious}
        >Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>)}
    </div>
  );


}

