import { useState } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import keyholeLgog from "./circle-keyhole-logo.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Kategori3 = () => {
  const [showResults, setShowResults] = useState("");
  const [showEmptyResult, setShowEmptyResult] = useState("");

  const [info, setInfo] = useState("");
  const onClickInfo = () => {
    setInfo(true);
  };
  const onClickClose = () => {
    setInfo(false);
  };
  const [energiKj, setEnergiKj] = useState(false);
  const [energiKcal, setEnergiKcal] = useState(false);
  const [fett, setFett] = useState(false);
  const [mettede, setMettede] = useState(false);
  const [mettedeNull, setMettedeNull] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [sukkerarter, setSukkerarter] = useState(false);
  const [protein, setProtein] = useState(false);
  const [salt, setSalt] = useState(false);
  const [vitaminB12, setVitaminB12] = useState(false);
  const [kalsium, setKalsium] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);

  const [nutrition, setNutrition] = useState({
    energiKj: "",
    energiKcal: "",
    fett: "",
    mettede: "",
    karbohydrat: "",
    hvoravSukkerarter: "",
    sukkerarter: "",
    protein: "",
    salt: "",
    vitaminB12: "",
    kalsium: "",
    kostfiber: "",
  });
  const changeHandle = (event) => {
    setNutrition({
      ...nutrition,
      [event.target.name]: [event.target.value],
    });
  };

  const onClick = () => {
    if (
      nutrition.energiKj != "" &&
      nutrition.energiKcal != "" &&
      nutrition.fett != "" &&
      nutrition.mettede != "" &&
      nutrition.mettede <= 10 &&
      nutrition.karbohydrat != "" &&
      nutrition.hvoravSukkerarter != "" &&
      nutrition.sukkerarter != "" &&
      nutrition.protein != "" &&
      nutrition.salt != "" &&
      nutrition.vitaminB12 != "" &&
      nutrition.kalsium != "" &&
      nutrition.kostfiber != ""
    ) {
      setShowResults(true);
      setShowEmptyResult(false);
      setEnergiKj(false);
      setEnergiKcal(false);
      setFett(false);
      setMettede(false);
      setMettedeNull(false);
      setKarbohydrat(false);
      setHvoravSukkerarter(false);
      setSukkerarter(false);
      setProtein(false);
      setSalt(false);
      setVitaminB12(false);
      setKalsium(false);
      setKostfiber(false);
    } else {
      if (nutrition.energiKj == "" || nutrition.energiKj < 0) {
        setEnergiKj(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergiKj(false);
      }

      if (nutrition.energiKcal == "" || nutrition.energiKcal < 0) {
        setEnergiKcal(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergiKcal(false);
      }

      if (nutrition.fett == "" || nutrition.fett < 0) {
        setFett(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setFett(false);
      }

      if (nutrition.mettede == "" || nutrition.mettede < 0) {
        setMettedeNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setMettedeNull(false);
      }
      if (nutrition.mettede > 10) {
        setMettede(true);
        setShowResults(false);
      } else {
        setMettede(false);
      }

      if (nutrition.karbohydrat == "" || nutrition.karbohydrat < 0) {
        setKarbohydrat(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydrat(false);
      }

      if (
        nutrition.hvoravSukkerarter == "" ||
        nutrition.hvoravSukkerarter < 0
      ) {
        setHvoravSukkerarter(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setHvoravSukkerarter(false);
      }

      if (nutrition.sukkerarter == "" || nutrition.sukkerarter < 0) {
        setSukkerarter(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSukkerarter(false);
      }

      if (nutrition.protein == "" || nutrition.protein < 0) {
        setProtein(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setProtein(false);
      }

      if (nutrition.salt == "" || nutrition.salt < 0) {
        setSalt(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSalt(false);
      }

      if (nutrition.vitaminB12 == "" || nutrition.vitaminB12 < 0) {
        setVitaminB12(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setVitaminB12(false);
      }

      if (nutrition.kalsium == "" || nutrition.kalsium < 0) {
        setKalsium(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKalsium(false);
      }

      if (nutrition.kostfiber == "" || nutrition.kostfiber < 0) {
        setKostfiber(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKostfiber(false);
      }
    }
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
              <tr className={energiKj ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {energiKj ? (
                    <Tooltip
                      title="Mangler verdi i energi (kJ) parameter"
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
                  Energi (kJ)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="energiKj"
                    value={nutrition.energiKj}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={energiKcal ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {energiKcal ? (
                    <Tooltip
                      title="Mangler verdi i energi (kcal) parameter"
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
                  Energi (kcal)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="energiKcal"
                    value={nutrition.energiKcal}
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
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden mettede fettsyrer. Mengden på mettede fettsyrer må være lavere enn eller lik 10 / 100 g for å møte kravene for Nøkkelhullsmerking."
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
                  Hvorav sukkerarter (g)
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

              <tr className={sukkerarter ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {sukkerarter ? (
                    <Tooltip
                      title="Mangler verdi i sukkerarter parameter"
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
                  Sukkerarter (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="sukkerarter"
                    value={nutrition.sukkerarter}
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

              <tr className={vitaminB12 ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {vitaminB12 ? (
                    <Tooltip
                      title="Mangler verdi i viatamin B12 parameter"
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
                  Vitamin B12 (µg)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="vitaminB12"
                    value={nutrition.vitaminB12}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              <tr className={kalsium ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {kalsium ? (
                    <Tooltip
                      title="Mangler verdi i kalsium parameter"
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
                  Kalsium (mg)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="kalsium"
                    value={nutrition.kalsium}
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
                  Kostfiber (g)
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
          <div className="container food-result-container">
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
          <div className="container food-negResult-container">
            <h5>Nøkkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir ikke Nøkkelhullet.</p>
                {showEmptyResult ? (
                  <p>** Obligatoriske næringsverdier kan ikke være tomme.</p>
                ) : null}

                {mettede ? (
                  <p>** Mettede fettsyrer verdien kan være høyst 10 g/100 g.</p>
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
            className="container food-result-container"
            style={{ background: "#ECF6D9" }}
          >
            <h5>Ernæringspåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir EFSA. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        ) : null}
        {showResults === false && (
          <div className="container food-negResult-container">
            <h5>Ernæringspåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir ikke EFSA. </p>
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
            className="container food-result-container"
            style={{ background: "#ECF6D9" }}
          >
            <h5>Helsepåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir Helsepåstander. </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
              </div>
            </div>
          </div>
        ) : null}
        {showResults === false && (
          <div className="container food-negResult-container">
            <h5>Helsepåstander</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir ikke Helsepåstander. </p>
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

export default Kategori3;
