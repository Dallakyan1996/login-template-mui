import React from 'react';
import { Link } from 'react-router-dom';
import './page-not-found.css';

const PageNotFound = () => (
  <div className="dgb">
    <div className="notFoundDiv">
      <div className="pageNotFoundWrapper">
        <h1 className="pageNotFoundNum">404</h1>
        <hr />
        <h1 className="notFoundTextDiv">This page could be not found</h1>
        <div className="goHomeDiv">
          <Link to="/">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PageNotFound;