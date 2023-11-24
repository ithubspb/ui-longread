import React from "react";
import { createRoot } from "react-dom/client";
import { Heading1 } from "../lib/Headline1/Headline1";

import { Numeric2 } from "../lib/main";
import { Headline3 } from "../lib/main";
import { Numeric3 } from "../lib/main";
import { Layout } from "../lib/main";
import { Text } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Layout>
      <h1>Sandbox</h1>
      <Headline3 text="Тело, брошенное вертикально вниз, вертикально вверх, под некоторым углом к горизонту, горизонтально будет двигаться с ускорением свободного падения, так как на него во все время полёта дейстувует только сила тяжести." />
        <Text text="А искусственный спутник Земли движется с центростремительным ускорением — ускорением свободного падения по окружности, которое определяется по формуле:" />
        <Text text="где ν – модуль скорости, с которой тело движется по окружности радиуса r" />
        <Headline3 text="Значит модуль скорости для спутника:" />
        <Headline3 text="Минимальная скорость движения искусственного спутника Земли называется первой космической скоростью" />
    </Layout>
  </React.StrictMode>
);