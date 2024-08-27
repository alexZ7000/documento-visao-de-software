import { useLocation, useNavigate } from "react-router-dom";
import ModernInput from "@components/ModernInput.tsx";
import { useState } from "react";

export default function Tela02() {
    const location = useLocation();
    const listaOrdenada = location.state?.listaOrdenada;
    console.log(listaOrdenada);
    const [userInput10, setUserInput10] = useState("");
    const navigate = useNavigate();

    function handleSubmit() {
        if (userInput10) {
            const inputNumber = parseInt(userInput10, 10);
            if (listaOrdenada.includes(parseInt(userInput10))) {
                navigate("/Fim", {
                    state: {
                        vdd: true,
                        posicao: listaOrdenada?.indexOf(inputNumber),
                        numeroEncontrado: userInput10
                    }
                });
            } else {
                navigate("/Fim", {
                    state: {
                        vdd: false,
                        posicao: 0,
                        numeroEncontrado: 0
                    }
                });
            }
        }
    }

    return (
        <div
            className={
                "w-full h-screen flex flex-col justify-center items-center"
            }
        >
            {listaOrdenada?.map((num: number, index: number) => (
                <div className={""}>
                    <p key={"H1 + " + index}>{num}</p>
                </div>
            ))}
            <div className={"w-72 mt-10 flex flex-col gap-y-3"}>
                <ModernInput
                    label="Digite um número inteiro para busca"
                    value={userInput10}
                    onChange={(value) => setUserInput10(value)}
                    placeholder="Digite um número inteiro para busca"
                />
                <button
                    type={"submit"}
                    onClick={handleSubmit}
                    className={
                        "bg-blue-500 w-full transition-all duration-200 hover:bg-blue-600 active:scale-95 rounded-2xl text-lg text-white py-3"
                    }
                >
                    Entra
                </button>
            </div>
        </div>
    );
}
