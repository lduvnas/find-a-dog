import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <div>
      <div className="nav">
        <h1>Find A Dog</h1>
        <Link className="btn btn-primary btn-block" to="/">
          Start
        </Link>
        <Link className="btn btn-primary btn-block" to="/breed-list">
          Hundraser
        </Link>
      </div>
      {children}
    </div>
  );
}
