import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css"

import { Heading2 } from "../lib/main";
import { Button } from "../lib/main";
import { Radio } from "../lib/main";
import { Numeric2 } from "../lib/main";
import { Headline3 } from "../lib/main";
import { Numeric3 } from "../lib/main";
import { Layout } from "../lib/main";
import { Text } from "../lib/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1>Sandbox</h1>
    <Heading2 text="Почему Луна не падает на Землю, ведь она её также притягивает?" />
    <div className="row">
      <Text text="Ранее мы в своих рассуждениях принимали, что поверхность Земли плоская. Такое упрощение допустимо при не очень больших скоростях, при которых дальность полета тела сравнительно невелика." />
      <Text text="На самом же деле Земля — шар. И при определённых условиях тело может двигаться вокруг Земли бесконечно долгое время, одновременно постоянно стараясь упасть на Землю вследствие всемирного тяготения, но не касаясь ее поверхности. Например, Луна. В случае, когда скорость тела очень велика, при его движении по траектории, Земля из-за её кривизны будет удаляться от тела на столько, на сколько тело будет приближаться к Земле благодаря притяжению к ней." />
      <Text text="Тогда тело будет обращаться вокруг поверхности Земли, описывая окружность раудиуса R. Оно станет спутником Земли. Если такое тело было отправлено в космос с Земли, то оно называется искусственным спутником." />
    </div>
  </React.StrictMode>
);