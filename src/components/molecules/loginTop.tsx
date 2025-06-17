export default function LoginTop () {
    return (
        <div className="full flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-row justify-center gap-2 items-center text-center">
                <img src="/logos/logoVM.png" alt="Vive Medellín" width={137}/>
                <h1 className="text-Orange font-semibold text-5xl pt-2">ViveMedellín</h1>
            </div>
            <h1 className="text-Blue text-4xl font-semibold">Inicia sesión en nuestra comunidad</h1>
            <h2 className="text-darkBlue text-3xl">Ingresa con tu usuario y contraseña</h2>
            <form className="flex flex-col w-full max-w-125 gap-3">
            <input type="text" id="usuario" name="usuario" placeholder="Nombre de usuario o correo electrónico" className="p-3 border-2 border-gray-300 rounded-lg text-Blue"/>
            <input type="password" id="password" name="password" placeholder="Contraseña" className="p-3 border-2 border-gray-300 rounded-lg text-Blue"/>
        </form>
        </div>
    );
}