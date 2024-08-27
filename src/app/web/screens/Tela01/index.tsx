import ModernInput from "@components/ModernInput.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Tela01() {
    const [userInput1, setUserInput1] = useState("");
    const [userInput2, setUserInput2] = useState("");
    const [userInput3, setUserInput3] = useState("");
    const [userInput4, setUserInput4] = useState("");
    const [userInput5, setUserInput5] = useState("");
    const [userInput6, setUserInput6] = useState("");
    const [userInput7, setUserInput7] = useState("");
    const [userInput8, setUserInput8] = useState("");
    const [sortedValues01, setSortedValues01] = useState<number[]>([]);
    const navigate = useNavigate();

    const sortValues = () => {
        const values = [
            userInput1,
            userInput2,
            userInput3,
            userInput4,
            userInput5,
            userInput6,
            userInput7,
            userInput8
        ];
        const numericValues = values.map((value) => parseInt(value, 10));

        const sortedValues = numericValues.sort((a, b) => a - b);

        setSortedValues01(sortedValues);
        console.log(sortedValues);
        return sortedValues;
    };

    const handleSubmit = () => {
        const fe = sortValues();
        if (
            userInput1 &&
            userInput2 &&
            userInput3 &&
            userInput4 &&
            userInput5 &&
            userInput6 &&
            userInput7 &&
            userInput8
        ) {
            console.log(sortedValues01);
            navigate("/Tela02", { state: { listaOrdenada: fe } });
        } else {
            alert("Preencha todos os campos antes de continuar.");
        }
    };

    return (
        <div className={"w-full h-screen flex justify-center items-center"}>
            <div className={"w-52 flex flex-col gap-y-6"}>
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput1}
                    onChange={(value) => setUserInput1(value)}
                    placeholder="Digite um número inteiro"
                />
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput2}
                    onChange={(value) => setUserInput2(value)}
                    placeholder="Digite um número inteiro"
                />
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput3}
                    onChange={(value) => setUserInput3(value)}
                    placeholder="Digite um número inteiro"
                />
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput4}
                    onChange={(value) => setUserInput4(value)}
                    placeholder="Digite um número inteiro"
                />
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput5}
                    onChange={(value) => setUserInput5(value)}
                    placeholder="Digite um número inteiro"
                />
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput6}
                    onChange={(value) => setUserInput6(value)}
                    placeholder="Digite um número inteiro"
                />
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput7}
                    onChange={(value) => setUserInput7(value)}
                    placeholder="Digite um número inteiro"
                />
                <ModernInput
                    label="Digite um número inteiro"
                    value={userInput8}
                    onChange={(value) => setUserInput8(value)}
                    placeholder="Digite um número inteiro"
                />
                <button
                    type={"submit"}
                    onClick={handleSubmit}
                    className={
                        "bg-blue-500 transition-all duration-200 hover:bg-blue-600 active:scale-95 rounded-2xl text-lg text-white py-3"
                    }
                >
                    Entra
                </button>
            </div>
        </div>
    );
}
