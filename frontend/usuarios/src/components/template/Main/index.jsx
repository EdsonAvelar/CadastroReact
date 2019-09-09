import React from "react";

import Header from "../Header";
import "./index.css";

export default props => (
  <React.Fragment>
    <Header {...props} />
    <main className="content">Conteúdo</main>
  </React.Fragment>
);
