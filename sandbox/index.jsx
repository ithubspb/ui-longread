import React from "react";
import { createRoot } from "react-dom/client";
import { Heading1 } from "../lib/Headline1/Headline1";

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
    <Layout>
      <h1>Sandbox</h1>
      <Numeric2 text="TEST" />
      <Heading1 text="Тестовый текст" />
      <Text text="Text - 32PX" />
    </Layout>
  </React.StrictMode>
);