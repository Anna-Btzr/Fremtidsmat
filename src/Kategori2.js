import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import keyholeLgog from "./circle-keyhole-logo.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Kategori2 = () => {
  const [info, setInfo] = useState("");
  const onClickInfo = () => {
    setInfo(true);
  };
  const onClickClose = () => {
    setInfo(false);
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="container food-result-container">
          <img
            src={keyholeLgog}
            className="keyhole-logo img-fluid"
            alt="keyhole logo"
          />
          <h5>Nøkkelhullet</h5>
          <div className="row">
            <div className="col-md-10">
              <p>Det er ingen betingelser for å møte Nøkkelhullet. </p>
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

        <div style={{ padding: "5px" }}></div>
        <div
          className="container food-result-container"
          style={{ background: "#ECF6D9" }}
        >
          <h5>Ernæringspåstander</h5>
          <div className="row">
            <div className="col-md-10">
              <p>Det er ingen betingelser for å møte EFSA. </p>
            </div>
            <div className="col-md-2">
              <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div
          className="container food-result-container"
          style={{ background: "#ECF6D9" }}
        >
          <h5>Helsepåstander</h5>
          <div className="row">
            <div className="col-md-10">
              <p>Det er ingen betingelser for å møte Helsepåstander. </p>
            </div>
            <div className="col-md-2">
              <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori2;
