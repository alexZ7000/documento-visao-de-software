import { useLocation, useNavigate } from "react-router-dom";

export default function Fim() {
    const location = useLocation();
    const vdd = location.state?.vdd;
    const posicao = location.state?.posicao;
    const numeroEncontrado = location.state?.numeroEncontrado;
    const navigate = useNavigate();
    return (
        <div
            className={
                "w-full gap-y-5 flex-col h-screen items-center justify-center flex"
            }
        >
            {vdd ? (
                <h1>{`Número: ${numeroEncontrado} encontrado na posição: ${posicao}`}</h1>
            ) : (
                <h1>NÚMERO NÃO ENCONTRADO</h1>
            )}
            <button
                type={"submit"}
                onClick={() => navigate("/")}
                className={
                    "bg-blue-500 w-52 transition-all duration-200 hover:bg-blue-600 active:scale-95 rounded-2xl text-lg text-white py-3"
                }
            >
                Entra
            </button>
        </div>
    );
}
