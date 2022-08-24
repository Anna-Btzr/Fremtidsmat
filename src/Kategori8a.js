import { useState } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import keyholeLgog from "./circle-keyhole-logo.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Kategori8a = () => {
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
  const [fettNull, setFettNull] = useState(false);
  const [mettede, setMettede] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [sukkerarter, setSukkerarter] = useState(false);
  const [sukkerarterNull, setSukkerarterNull] = useState(false);
  const [protein, setProtein] = useState(false);
  const [salt, setSalt] = useState(false);
  const [saltNull, setSaltNull] = useState(false);
  const [vitaminB12, setVitaminB12] = useState(false);
  const [kalsium, setKalsium] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [kostfiberNull, setKostfiberNull] = useState(false);

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
      nutrition.energiKj !== "" &&
      nutrition.energiKcal !== "" &&
      nutrition.fett !== "" &&
      nutrition.fett <= 7 &&
      nutrition.mettede !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.sukkerarter !== "" &&
      nutrition.sukkerarter <= 5 &&
      nutrition.protein !== "" &&
      nutrition.salt !== "" &&
      nutrition.salt <= 1 &&
      nutrition.vitaminB12 !== "" &&
      nutrition.kalsium !== "" &&
      nutrition.kostfiber !== "" &&
      nutrition.kostfiber >= 5
    ) {
      setShowResults(true);
      setShowEmptyResult(false);
      setEnergiKj(false);
      setEnergiKcal(false);
      setFett(false);
      setFettNull(false);
      setMettede(false);
      setKarbohydrat(false);
      setHvoravSukkerarter(false);
      setSukkerarter(false);
      setSukkerarterNull(false);
      setProtein(false);
      setSalt(false);
      setSaltNull(false);
      setVitaminB12(false);
      setKalsium(false);
      setKostfiber(false);
      setKostfiberNull(false);
    } else {
      if (nutrition.energiKj === "" || nutrition.energiKj < 0) {
        setEnergiKj(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergiKj(false);
      }

      if (nutrition.energiKcal === "" || nutrition.energiKcal < 0) {
        setEnergiKcal(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergiKcal(false);
      }

      if (nutrition.fett === "" || nutrition.fett < 0) {
        setFettNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setFettNull(false);
      }
      if (nutrition.fett > 7) {
        setFett(true);
        setShowResults(false);
      } else {
        setFett(false);
      }

      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettede(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setMettede(false);
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

      if (nutrition.sukkerarter === "" || nutrition.sukkerarter < 0) {
        setSukkerarterNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSukkerarterNull(false);
      }
      if (nutrition.sukkerarter > 5) {
        setSukkerarter(true);
        setShowResults(false);
      } else {
        setSukkerarter(false);
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
      if (nutrition.salt > 1) {
        setSalt(true);
        setShowResults(false);
      } else {
        setSalt(false);
      }

      if (nutrition.vitaminB12 === "" || nutrition.vitaminB12 < 0) {
        setVitaminB12(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setVitaminB12(false);
      }

      if (nutrition.kalsium === "" || nutrition.kalsium < 0) {
        setKalsium(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKalsium(false);
      }

      if (nutrition.kostfiber === "" || nutrition.kostfiber < 0) {
        setKostfiberNull(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKostfiberNull(false);
      }
      if (nutrition.kostfiber < 5) {
        setKostfiber(true);
        setShowResults(false);
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

              <tr
                className={
                  fett ? "alert-box" : null || fettNull ? "alert-box" : null
                }
              >
                <th scope="row" className="table-font">
                  {fett ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden fett. Mengden på fett må være lavere enn eller lik 7 g/ 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {fettNull ? (
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

              <tr className={mettede ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {mettede ? (
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
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden sukkerarter. Mengden på sukkerarter må være lavere enn eller lik 5 g/ 100 g for å møte kravene for Nøkkelhullsmerking."
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
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden salt. Mengden på salt må være lavere enn eller lik 1 g/ 100 g for å møte kravene for Nøkkelhullsmerking."
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

              <tr
                className={
                  kostfiber
                    ? "alert-box"
                    : null || kostfiberNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {kostfiber ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden kostfiber. Mengden på kostfiber må være høyst enn eller lik 5 g / 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {kostfiberNull ? (
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

                {fett ? <p>** Fett verdien kan være høyst 7 g/100 g.</p> : null}

                {sukkerarter ? (
                  <p>
                    ** Tilsatte sukkerarter verdien kan være høyst 5 g/100 g.
                  </p>
                ) : null}

                {salt ? <p>** Salt verdien kan være høyst 1 g/100 g.</p> : null}
                {kostfiber ? (
                  <p>** Kostfiber verdien kan være minst 5 g/100 g.</p>
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

export default Kategori8a;