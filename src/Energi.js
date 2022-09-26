import React from "react";
import { useState } from "react";
import Select from "react-select";
import "./App.css";

const Energi = () => {
  const selectUnit = [
    {
      value: "EnergiKJ",
      label: "(kj)",
    },
    {
      value: "energiKCAL",
      label: "(kcal)",
    },
  ];

  const [selectsPart, setSelectPart] = useState("");

  const handlerPart = (event) => {
    setSelectPart(event.value);
  };

  return (
    <div>
      <label for="energiunit" class="form-label">
        Energi
      </label>
      <Select
        placeholder={<div>Velg enhet</div>}
        className="form-select-md mb-3"
        onChange={handlerPart}
        options={selectUnit}
      />
    </div>
  );
};

export default Energi;
