import React from "react";
import { createRoot } from "react-dom/client";
import { Heading1 } from "../lib/Headline1/Headline1";
import { Numeric2 } from "../lib/main";
import { Headline3 } from "../lib/main";
import { Numeric3 } from "../lib/main";
import { Layout } from "../lib/main";

import './style.css'

import moon from './moon.png'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Layout>
      <div className="row">
        <img  className = 'Kartinka' src={moon} alt="" />
        <div className = 'Nachalo'>Научный лонгрид</div>
        <p className = 'Zagolovok50'> Движение <br /> Ракет и <br /> спутников</p>
      </div>
      <p className = 'Zagolovok'>Почему люди не летают<br />как птицы ?</p>
      
      <Numeric2   text="Сила притяжения, действующая на человека, гораздо больше других сил действующих на него, например, силы Архимеда. Орёл же может парить над горами, потому что сила давления восходящих потоков воздуха уравновешивает силу тяжести действующую на него.

Человек для полётов приспособлен точно также как обыкновенный булыжник. А может ли булыжник летать? Для того, чтобы булыжник оторвался от поверхности Земли и хоть краткое время находился в состоянии полёта, его необходимо разогнать до какой‑либо скорости."/>
      <Heading1 text= "" />
      
    </Layout>
  </React.StrictMode>
);




