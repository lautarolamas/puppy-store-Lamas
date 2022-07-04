import React from "react";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import Bienvenida from "./Bienvenida";
export const WelcomeAndItems = () => {
  return (
    <div>
      <Bienvenida />
      <ItemListContainer />
    </div>
  );
};
