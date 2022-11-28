import { StrickMode } from "react";
import { CreateRoot } from "react-dom";

const rootElement = document.getElementById("root");
const root = CreateRoot(rootElement);

root.render(
  <StrickMode>
    <App />
  </StrickMode>
);

//create a react app from the scrach 
// it should be displaying heading
//