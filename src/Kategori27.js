import { useState } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import keyholeLgog from "./circle-keyhole-logo.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Kategori27 = () => {
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
  const [energiKal, setEnergiKal] = useState(false);
  const [fett, setFett] = useState(false);
  const [mettede, setMettede] = useState(false);
  const [mettedeNull, setMettedeNull] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [sukkerarter, setSukkerarter] = useState(false);
  const [sukkerarterNull, setSukkerarterNull] = useState(false);
  const [fiber, setFiber] = useState(false);
  const [protein, setProtein] = useState(false);
  const [salt, setSalt] = useState(false);
  const [saltNull, setSaltNull] = useState(false);

  const [nutrition, setNutrition] = useState({
    energi: "",
    energiKal: "",
    fett: "",
    mettede: "",
    karbohydrat: "",
    sukkerarter: "",
    fiber: "",
    protein: "",
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
      nutrition.mettede !== "" &&
      nutrition.mettede <= 1.5 &&
      nutrition.sukkerarter !== "" &&
      nutrition.sukkerarter <= 3 &&
      nutrition.salt !== "" &&
      nutrition.salt <= 0.8 &&
      nutrition.fiber !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.protein !== "" &&
      nutrition.fett !== "" &&
      nutrition.energi !== "" &&
      nutrition.energiKal !== ""
    ) {
      setShowResults(true);
      setShowEmptyResult(false);
      setFett(false);
      setEnergi(false);
      setEnergiKal(false);
      setMettede(false);
      setMettedeNull(false);
      setKarbohydrat(false);
      setSukkerarter(false);
      setSukkerarterNull(false);
      setSalt(false);
      setSaltNull(false);
      setProtein(false);
      setFiber(false);
    } else {
      if (nutrition.energi === "" || nutrition.energi < 0) {
        setEnergi(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergi(false);
      }
      if (nutrition.energiKal === "" || nutrition.energiKal < 0) {
        setEnergiKal(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergiKal(false);
      }
      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettedeNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setMettedeNull(false);
      }
      if (nutrition.mettede > 1.5) {
        setMettede(true);
        setShowResults(false);
      } else {
        setMettede(false);
      }
      if (nutrition.fiber === "" || nutrition.fiber < 0) {
        setFiber(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setFiber(false);
      }
      if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
        setKarbohydrat(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydrat(false);
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
      if (nutrition.salt === "" || nutrition.salt < 0) {
        setSaltNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSaltNull(false);
      }
      if (nutrition.salt > 0.8) {
        setSalt(true);
        setShowResults(false);
      } else {
        setSalt(false);
      }
      if (nutrition.sukkerarter === "" || nutrition.sukkerarter < 0) {
        setSukkerarterNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSukkerarterNull(false);
      }
      if (nutrition.sukkerarter > 3) {
        setSukkerarter(true);
        setShowResults(false);
      } else {
        setSukkerarter(false);
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
              <tr className={energi ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {energi ? (
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
                    name="energi"
                    value={nutrition.energi}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>
              <tr className={energiKal ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {energiKal ? (
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
                    name="energiKal"
                    value={nutrition.energiKal}
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
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden mettede fettsyrer. Mengden på mettede fettsyrer må være lavere enn eller lik 1,5 / 100 g for å møte kravene for Nøkkelhullsmerking."
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
              <tr
                className={
                  sukkerarter
                    ? "alert-box"
                    : null || sukkerarterNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {sukkerarter ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden sukkerarter. Mengden på sukkerarter må være lavere enn eller lik 3 / 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {sukkerarterNull ? (
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
              <tr className={fiber ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {fiber ? (
                    <Tooltip
                      title="Mangler verdi i fiber parameter"
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
                  Fiber (g)
                </th>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="fiber"
                    value={nutrition.fiber}
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
                  salt ? "alert-box" : null || saltNull ? "alert-box" : null
                }
              >
                <th scope="row" className="table-font">
                  {salt ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden salt. Mengden på salt må være lavere enn eller lik o,8 / 100 g for å møte kravene for Nøkkelhullsmerking."
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
                  <p>** Mandatory nutrition values can't be empty.</p>
                ) : null}
                {salt ? (
                  <p>** Salt value can be maximum 0.8 grams per 100 grams.</p>
                ) : null}
                {sukkerarter ? (
                  <p>
                    ** Sukkerarter value can be maximum 3 grams per 100 grams.
                  </p>
                ) : null}
                {mettede ? (
                  <p>
                    ** Mettede fettsyrer value can be maximum 1.5 grams per 100
                    grams.
                  </p>
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

export default Kategori27;
