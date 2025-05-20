import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div style={{ paddingLeft: "10px" }}>
            <div className="row">
              <div className="col-md-6 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
