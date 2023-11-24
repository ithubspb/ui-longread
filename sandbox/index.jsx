import React from "react";
import { createRoot } from "react-dom/client";

import { Numeric3 } from "../lib/main";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Layout>
  <React.StrictMode>
    <h1>Sandbox</h1>
    <Numeric3 text="Проверка"/>
  </React.StrictMode>
  </Layout>
);