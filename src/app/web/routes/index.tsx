import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tela01 from "@screens/Tela01";
import Tela02 from "@screens/Tela02";
import Fim from "@screens/Fim/Fim.tsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Tela01 />} path={"*"}></Route>
                <Route element={<Tela02 />} path={"/Tela02"}></Route>
                <Route element={<Fim />} path={"/Fim"}></Route>
            </Routes>
        </BrowserRouter>
    );
}
