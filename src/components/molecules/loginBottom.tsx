import Button from "../atoms/button"

export default function LoginBottom () {
    return (
        <div className="text-center flex flex-col gap-4 w-full max-w-125">
            <p className="underline text-lg text-darkGray font-semibold">¿Hás olvidado tu contraseña?</p>
            <Button text="Continuar" color="orange" className="text-xl"></Button>
            <div className="flex flex-row gap-16 w-full text-darkGray font-semibold py-2">
                <img src="/line.png" alt="line" width={158} className="py-3"/>
                <p className="text-darkGray">O BIEN</p>
                <img src="/line.png" alt="line" width={158} className="py-3"/>
            </div>
            <Button text="Iniciar sesión con Google" icon="devicon:google" iconPosition="left" color="blue" widthIcon="28" className="text-xl"></Button>
            <Button text="Iniciar sesión con facebook" icon="fa6-brands:square-facebook" iconPosition="left" color="blue" widthIcon="28" className="text-xl"></Button>
            <div className="text-lg">
                <p className="text-darkGray">¿No tienes una cuenta?</p>
                <p className="underline text-altBlue font-semibold">Regístrate aquí</p>
            </div>
        </div>
    )
}