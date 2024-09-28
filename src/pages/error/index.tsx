import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <div className="flex w-full justify-center items-center flex-col min-h-screen text-white">
            <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
            Voltar para Home
            </Link>
        </div>
    )
}