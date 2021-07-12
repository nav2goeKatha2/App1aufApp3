import React, { useState } from "react";
import "../Style.css";
import Card from "./UI/Card";
import classes from "./Verbindung/Verbindungsanzeige.module.css";
import Button from "./UI/Button";
import Logo from "./Logo.js";
import SearchPage from "./SearchPage.js";
import Ende from "./Ende.js";

//import 'webpack';
/* import logo from '.../public/busemoji.png'

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
 */
const Verbindungsanzeige = (props) => {
  // Button - useState
  const [clickedBack, setBackClicked] = useState(false);
  const [clickedEnd, setEndClicked] = useState(false);
  const [hideConnectionDisplay, setHideConnectionDisplay] = useState(false);

  // const onClickHandler = () => {
  //   // event.preventDefault(); // Aktuell: Neuladen der Seite verhindern
  // };

  const backClickHandler = () => {
    setBackClicked(true);
  };
  const endClickHandler = () => {
    setEndClicked(true);
  };

  return (
    <div className="container-verbindung">
      {/* {endClickHandler ? null:  */}
      {hideConnectionDisplay ? null : (
        <form>
          <h1 className="Verbindung-header">Verbindungen</h1>
          {/* <Bild/> 
          <img src={require('.../public/busemoji.png')} />
          */}
          <div className="container-verbindungsanzeige">
            <div className="verbindung-textfeld">
              {" "}
              <p>Abfahrt:</p> {props.departureDay} {props.departureTime}{" "}
            </div>
            <div className="verbindung-textfeld">Linie: 50</div>
            <div className="verbindung-textfeld">
              <p>Ankunft:</p> {props.departureDay} {props.departureTime}{" "}
            </div>
            <div className="verbindung-textfeld">
              <p>Abfahrt an Haltestelle:</p> {props.departureStop}{" "}
            </div>
            <br></br>
            <div className="verbindung-textfeld">
              <p>Ankunft an Haltestelle:</p> {props.destinationStop}{" "}
            </div>
          </div>
          <div className="buttons-verbindung">
            {clickedBack ? (
              <SearchPage />
            ) : (
              <button
                className="button"
                onClick={() => {
                  setHideConnectionDisplay(true);
                  backClickHandler();
                }}
                type="submit"
              >
                Zurück zur Suche
              </button>
            )}

            {clickedEnd ? (
              <Ende />
            ) : (
              <button
                className="button"
                onClick={() => {
                  endClickHandler();
                  setHideConnectionDisplay(true);
                }}
                type="submit"
              >
                Test Beenden?
              </button>
            )}
          </div>
          <h1 className="logo">Nav2Gö</h1>
        </form>
      )}

      {/* } */}
    </div>
  );
};

export default Verbindungsanzeige;
