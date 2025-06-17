import Button from "../atoms/button"
import { useRouter } from "next/router"

export default function LoginBottom () {
    const router = useRouter();
    return (
        <div className="text-center flex flex-col items-center gap-4 w-full max-w-125">
            <a href="https://www.facebook.com" target="#_blank" className="text-darkGray text-lg font-semibold underline hover:text-gray-400">¿Hás olvidado tu contraseña?</a>
            <Button onClick={() => router.push('/busquedaGrupos')} text="Continuar" color="orange" className="text-xl w-full"></Button>
            <div className="flex flex-row gap-16 w-full text-darkGray font-semibold py-2">
                <img src="/line.png" alt="line" width={158} className="py-3"/>
                <p className="text-darkGray">O BIEN</p>
                <img src="/line.png" alt="line" width={158} className="py-3"/>
            </div>
            <Button text="Iniciar sesión con Google" icon="devicon:google" iconPosition="left" color="blue" widthIcon="28" className="text-xl w-full"></Button>
            <Button text="Iniciar sesión con facebook" icon="fa6-brands:square-facebook" iconPosition="left" color="blue" widthIcon="28" className="text-xl w-full"></Button>
            <div className="text-lg">
                <p className="text-darkGray">¿No tienes una cuenta?</p>
                <a href="https://www.facebook.com/register" target="#_blank" className="text-altBlue underline font-semibold hover:text-blue-400">Regístrate aquí</a>
            </div>
        </div>
    )
}