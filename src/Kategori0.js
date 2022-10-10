import React from "react";
import { useState } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import keyholeLgog from "./circle-keyhole-logo.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const Kategori0 = () => {
  const [showResults, setShowResults] = useState("");
  const [showEmptyResult, setShowEmptyResult] = useState("");

  const [info, setInfo] = useState("");
  const onClickInfo = () => {
    setInfo(true);
  };
  const onClickClose = () => {
    setInfo(false);
  };

  const [energi, setEnergi] = useState(false);
  const [mettede, setMettede] = useState(false);

  const [fett, setFett] = useState(false);
  const [protein, setProtein] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [salt, setSalt] = useState(false);

  const [nutrition, setNutrition] = useState({
    energi: "",
    mettede: "",
    fett: "",
    protein: "",
    karbohydrat: "",
    hvoravSukkerarter: "",
    kostfiber: "",
    salt: "",
  });
  const changeHandle = (event) => {
    setNutrition({
      ...nutrition,
      [event.target.name]: [event.target.value],
    });
  };

  const onClick = () => {
    if (
      nutrition.energi !== "" &&
      nutrition.mettede !== "" &&
      nutrition.fett !== "" &&
      nutrition.protein !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.kostfiber !== "" &&
      nutrition.salt !== ""
    ) {
      setShowResults(true);
      setShowEmptyResult(false);

      setEnergi(false);
      setMettede(false);

      setFett(false);
      setProtein(false);
      setKarbohydrat(false);
      setHvoravSukkerarter(false);
      setKostfiber(false);
      setSalt(false);
    } else {
      if (nutrition.energi === "" || nutrition.energi < 0) {
        setEnergi(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergi(false);
      }

      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettede(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setMettede(false);
      }

      if (nutrition.fett === "" || nutrition.fett < 0) {
        setFett(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setFett(false);
      }

      if (nutrition.protein === "" || nutrition.protein < 0) {
        setProtein(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setProtein(false);
      }

      if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
        setKarbohydrat(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydrat(false);
      }

      if (
        nutrition.hvoravSukkerarter === "" ||
        nutrition.hvoravSukkerarter < 0
      ) {
        setHvoravSukkerarter(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setHvoravSukkerarter(false);
      }

      if (nutrition.kostfiber === "" || nutrition.kostfiber < 0) {
        setKostfiber(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKostfiber(false);
      }

      if (nutrition.salt === "" || nutrition.salt < 0) {
        setSalt(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSalt(false);
      }
    }
  };

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
    <div className="row">
      <h5>Porsjon (gram) 100</h5>
      <div className="col-md-6">
        <div className="bg-light">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="table-font">
                  Energi eller næringsstoff
                </th>
                <th scope="col" className="table-font">
                  Mengde
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={energi ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {energi ? (
                    <Tooltip
                      title="Mangler verdi i energi (kJ/Kcal) parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  <div className="row">
                    <div className="col-md-3">
                      <label for="energiunit" class="form-label">
                        Energi
                      </label>
                    </div>
                    <div className="col-md-6">
                      <Select
                        placeholder={<div>Velg enhet</div>}
                        className="form-select-md mb-3"
                        onChange={handlerPart}
                        options={selectUnit}
                      />
                    </div>
                  </div>
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="energi"
                    value={nutrition.energi}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={mettede ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {fett ? (
                    <Tooltip
                      title="Mangler verdi i mettede fettsyrer parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Mettede fettsyrer (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="mettede"
                    value={nutrition.mettede}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={fett ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {fett ? (
                    <Tooltip
                      title="Mangler verdi i fett parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Fett (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="fett"
                    value={nutrition.fett}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={protein ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {protein ? (
                    <Tooltip
                      title="Mangler verdi i protein parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Protein (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="protein"
                    value={nutrition.protein}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={karbohydrat ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {karbohydrat ? (
                    <Tooltip
                      title="Mangler verdi i karbohydrat parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Karbohydrat (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="karbohydrat"
                    value={nutrition.karbohydrat}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={hvoravSukkerarter ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {hvoravSukkerarter ? (
                    <Tooltip
                      title="Mangler verdi i hvorav sukkerarter parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  • Hvorav tilsatte sukkerarter (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="hvoravSukkerarter"
                    value={nutrition.hvoravSukkerarter}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={kostfiber ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {kostfiber ? (
                    <Tooltip
                      title="Mangler verdi i kostfiber parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  • Kostfiber (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="kostfiber"
                    value={nutrition.kostfiber}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={salt ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {salt ? (
                    <Tooltip
                      title="Mangler verdi i salt parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Salt (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="salt"
                    value={nutrition.salt}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-12 button-div">
          <button
            type="submit"
            className="btn btn-primary btn-lg button-search"
            onClick={onClick}
          >
            Søk
          </button>
        </div>
      </div>

      <div className="col-md-6">
        {showResults ? (
          <div className="container nøkkelhullet-food-result-container">
            <img
              src={keyholeLgog}
              className="keyhole-logo img-fluid"
              alt="keyhole logo"
            />
            <h5>Nøkkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir Nøkkelhullet. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon
                  className="info-button"
                  icon={faCircleInfo}
                  onClick={onClickInfo}
                />
              </div>
            </div>
            {info ? (
              <div className="container info-div row">
                <div className="col-md-10">
                  <p>
                    Les mer om hvilke krav det stilles for merking av
                    Nokkellhullet på Lovdatas "Forskrift om frivillig merking a
                    nœringsmidler med Nokkellhullet":
                    <a
                      href="https://lovdata.no/dokument/SF/forskrift/2015-02-18-139"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lovdata.no
                    </a>
                  </p>
                </div>
                <div className="col-md-2">
                  <FontAwesomeIcon
                    className="x-button"
                    icon={faXmarkCircle}
                    onClick={onClickClose}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        {showResults === false && (
          <div className="container nøkkelhullet-food-negResult-container">
            <h5>Nøkkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir ikke Nøkkelhullet.</p>
                {showEmptyResult ? (
                  <p>** Obligatoriske næringsverdier kan ikke være tomme.</p>
                ) : null}

                {showEmptyResult ? (
                  <p>** Velg mat på matkategori velger.</p>
                ) : null}
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon
                  className="info-button"
                  icon={faCircleInfo}
                  onClick={onClickInfo}
                />
              </div>
            </div>
            {info ? (
              <div className="container info-div row">
                <div className="col-md-10">
                  <p>
                    Les mer om hvordan oppnå kriteriene på Lovdata’s Forskrift
                    om frivillig merking av næringsmidler med Nøkkelhullet:
                    <a
                      href="https://lovdata.no/dokument/SF/forskrift/2015-02-18-139"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lovdata.no
                    </a>
                  </p>
                </div>
                <div className="col-md-2">
                  <FontAwesomeIcon
                    className="x-button"
                    icon={faXmarkCircle}
                    onClick={onClickClose}
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}
        <div style={{ padding: "5px" }}></div>
        {showResults ? (
          <div
            className="container ernæringspåstander-food-result-container"
            style={{ background: "#f2f0b5" }}
          >
            <h5>Ernæringspåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        ) : null}
        {showResults === false && (
          <div className="container ernæringspåstander-food-negResult-container">
            <h5>Ernæringspåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        )}
        <div style={{ padding: "5px" }}></div>
        {showResults ? (
          <div
            className="container helsepåstander-food-result-container"
            style={{ background: "#f2f0b5" }}
          >
            <h5>Helsepåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        ) : null}
        {showResults === false && (
          <div className="container helsepåstander-food-negResult-container">
            <h5>Helsepåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Under utvikling. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kategori0;