import React, { useState } from "react";
import text from "../data";

const Controls = () => {
  const [paragraphsQuantity, setParagraphsQuantity] = useState(1);
  const [generateP, setGenerateP] = useState(0);
  const handleChange = (e) => {
    setParagraphsQuantity(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setGenerateP(paragraphsQuantity);
  };
  return (
    <div className="container controls-project">
      <h1 className="title">tired of boring lorem ipsum?</h1>
      <form action="" className="controls-form" onSubmit={handleSubmit}>
        <label className="form-title" htmlFor="p-quantity">
          paragraphs:
        </label>
        <input
          onChange={handleChange}
          type="number"
          min={1}
          max={8}
          name="p-quantity"
          value={paragraphsQuantity}
          className="form-input"
          id="p-quantitiy"
        />
        <button type="submit" className="submit-btn">
          generate
        </button>
      </form>
      {text.slice(0, generateP).map((item, index) => {
        return (
          <p className="paragraph" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default Controls;
