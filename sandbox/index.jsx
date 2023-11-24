import React from "react";
import { createRoot } from "react-dom/client";

import { Headline3 } from "../lib/main";
import { Numeric3 } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Layout>
    <h1>Sandbox</h1>
    </Layout>
  </React.StrictMode>
);