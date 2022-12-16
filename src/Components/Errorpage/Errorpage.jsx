import React from "react";
import { Link } from "react-router-dom";

import "./errorpage.css";

export function ErrorPage() {
  return (
    <div className="errorPage_section">
      <div className="errorPage_wrapper">
        <h1>404</h1>
        <p>
          I'm afraid you've found a page that doesn't exist on this app. That
          can happen when you follow a link to something that has since been
          deleted. Or the link was incorrect to begin with.
        </p>
        <p>Sorry about that.</p>
        <ul>
          <li>
            <Link to="/signin"> Go to the Home page </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
