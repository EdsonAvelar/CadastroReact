import React from "react";

import Header from "../Header";
import "./index.css";

export default props => (
  <React.Fragment>
    <Header />
    <main className="content">Conteúdo</main>
  </React.Fragment>
);
