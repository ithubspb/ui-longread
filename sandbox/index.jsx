import React from "react";
import { createRoot } from "react-dom/client";

import { Math } from "../lib/main";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1>Sandbox</h1>
    {/* <Math formula="\sqrt[]{6,67 * 10 * \placeholder[a]{} \over \placeholder[b]{}}"/> */}
    <Math readonly formula="a=\frac{v^2}{r}" />
    <Math formula="g=\frac{v^2}{r}=>v^2=gr=>v=\sqrt{gr}" />
    <Math formula="" />
    <Math formula="" />
    <Math formula="" />
    <Math formula="" />
  </React.StrictMode>
);