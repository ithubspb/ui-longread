import React from "react";
import { createRoot } from "react-dom/client";
import { Heading1 } from "../lib/Headline1/Headline1";

import { Button } from "../lib/main";
import { Heading2 } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1>Sandbox</h1>
    <Heading1 text="Тестовый текст" />
  </React.StrictMode>
);