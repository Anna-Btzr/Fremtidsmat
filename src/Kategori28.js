import React from "react";
import { useState } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import keyholeLgog from "./circle-keyhole-logo.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const Kategori28 = () => {
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
  const [mettedeNull, setMettedeNull] = useState(false);
  const [fett, setFett] = useState(false);
  const [protein, setProtein] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [karbohydratNull, setKarbohydratNull] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [salt, setSalt] = useState(false);
  const [saltNull, setSaltNull] = useState(false);

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
      nutrition.mettede <= 2 &&
      nutrition.fett !== "" &&
      nutrition.protein !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.karbohydrat <= 3 &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.kostfiber !== "" &&
      nutrition.salt !== "" &&
      nutrition.salt <= 1
    ) {
      setEnergi(false);
      setMettede(false);
      setMettedeNull(false);
      setFett(false);
      setProtein(false);
      setKarbohydrat(false);
      setKarbohydratNull(false);
      setHvoravSukkerarter(false);
      setKostfiber(false);
      setSalt(false);
      setSaltNull(false);
    } else {
      if (nutrition.energi === "" || nutrition.energi < 0) {
        setEnergi(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergi(false);
      }

      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettedeNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setMettedeNull(false);
      }
      if (nutrition.mettede > 2) {
        setMettede(true);
        setShowResults(false);
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
        setKarbohydratNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydratNull(false);
      }
      if (nutrition.karbohydrat > 3) {
        setKarbohydrat(true);
        setShowResults(false);
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
        setSaltNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSaltNull(false);
      }
      if (nutrition.salt > 1) {
        setSalt(true);
        setShowResults(false);
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
                  Energi eller n??ringsstoff
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

              <tr
                className={
                  mettede
                    ? "alert-box"
                    : null || mettedeNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {mettede ? (
                    <Tooltip
                      title="Produktet innfrir ikke N??kkelhullet p?? grunn av mengden mettede fettsyrer. Mengden p?? mettede fettsyrer m?? v??re  h??yst enn eller lik 2 / 100 g for ?? m??te kravene for N??kkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {mettedeNull ? (
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

              <tr
                className={
                  karbohydrat
                    ? "alert-box"
                    : null || karbohydratNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {karbohydrat ? (
                    <Tooltip
                      title="Produktet innfrir ikke N??kkelhullet p?? grunn av mengden sukkerarter. Mengden p?? sukkerarter m?? v??re lavere enn eller lik 3 g / 100 g for ?? m??te kravene for N??kkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {karbohydratNull ? (
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
                  ??? Hvorav tilsatte sukkerarter (g)
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
                  ??? Kostfiber (g)
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

              <tr
                className={
                  salt ? "alert-box" : null || saltNull ? "alert-box" : null
                }
              >
                <th scope="row" className="table-font">
                  {salt ? (
                    <Tooltip
                      title="Produktet innfrir ikke N??kkelhullet p?? grunn av mengden salt. Mengden p?? salt m?? v??re lavere enn eller lik 1 g/ 100 g for ?? m??te kravene for N??kkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {saltNull ? (
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
                <td colSpan="2">
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
            S??k
          </button>
        </div>
      </div>

      <div className="col-md-6">
        {showResults ? (
          <div className="container n??kkelhullet-food-result-container">
            <img
              src={keyholeLgog}
              className="keyhole-logo img-fluid"
              alt="keyhole logo"
            />
            <h5>N??kkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir N??kkelhullet. </p>
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
                    Nokkellhullet p?? Lovdatas "Forskrift om frivillig merking a
                    n??ringsmidler med Nokkellhullet":
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
          <div className="container n??kkelhullet-food-negResult-container">
            <h5>N??kkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir ikke N??kkelhullet.</p>
                {showEmptyResult ? (
                  <p>** Obligatoriske n??ringsverdier kan ikke v??re tomme.</p>
                ) : null}
                {mettede ? (
                  <p>** Mettede fettsyrer verdien kan v??re h??yst 2 g/100 g</p>
                ) : null}

                {karbohydrat ? (
                  <p>
                    ** Tilsatte sukkerarter verdien kan v??re h??yst 3 g/100 g.
                  </p>
                ) : null}

                {salt ? <p>** Salt verdien kan v??re h??yst 1 g/100 g.</p> : null}
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
                    Les mer om hvordan oppn?? kriteriene p?? Lovdata???s Forskrift
                    om frivillig merking av n??ringsmidler med N??kkelhullet:
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
            className="container ern??ringsp??stander-food-result-container"
            style={{ background: "#f2f0b5" }}
          >
            <h5>Ern??ringsp??stander</h5>
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
          <div className="container ern??ringsp??stander-food-negResult-container">
            <h5>Ern??ringsp??stander</h5>
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
            className="container helsep??stander-food-result-container"
            style={{ background: "#f2f0b5" }}
          >
            <h5>Helsep??stander</h5>
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
          <div className="container helsep??stander-food-negResult-container">
            <h5>Helsep??stander</h5>
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

export default Kategori28;
