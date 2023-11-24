import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1>Sandbox</h1>
    <Heading2 text="Zagolovok" />
    <Button text="Отправить" />
  </React.StrictMode>
);