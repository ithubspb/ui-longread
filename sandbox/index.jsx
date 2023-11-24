import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "../lib/main";
import { Radio } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h2>Sandbox</h2>
    <Button text="Отправить" />
    <Radio text="Sandbox" />
  </React.StrictMode>
);