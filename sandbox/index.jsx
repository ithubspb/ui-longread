import React from "react";
import { createRoot } from "react-dom/client";

import { Headline3 } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Layout>
  <React.StrictMode>
    <h3>Sandbox</h3>
    <Headline3 text="Тестовый текст"/>
  </React.StrictMode>
  </Layout>
);