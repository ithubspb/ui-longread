import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1>Sandbox</h1>
    <Button text="Отправить" />
  </React.StrictMode>
);