import { Route, Routes } from "react-router-dom"; //* Importamos para hacer uso de las rutas */

import { Body } from "../ui/components/Body";
import { Navbar } from "../ui/components/Navbar";

export const AppRouter = () => {
  //* Exportamos esta variable, que sera puesto en el Main y es lo que vamos a renderizar */
  return (
    //* Lo que voy a renderizar */
    <>
      <Navbar />
      <Routes>
        {/* Invocamos a las ruras */}
        <Route path="/*" element={<Body />} />
        {/* Lo que sea la ruta que renderize el Elemento HeroesRoutes */}
      </Routes>
    </>
  );
};
