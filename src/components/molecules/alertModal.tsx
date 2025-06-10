import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../atoms/button";

const AlertModal = () => {
    return (
        <div className="fixed inset-0 bg-gray-300 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-155 text-center space-y-10 px-28 w-full relative">
                <div className="text-Red font-semibold flex gap-2 w-full items-center">
                    <Icon icon="tabler:alert-circle" width={56} className="w-30"></Icon>
                    <p className="text-justify text-lg">Debe estar registrado y autenticado para explorar todas las comunidades</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-Blue2 text-lg">Ingresa con tu usuario y contraseña</p>
                    <Button text="Iniciar sesión" color="orange" className="text-xl"></Button>
                    <p className="text-Blue2 text-lg">¿Aún no estás registrado?</p>
                    <Button text="+ Crear una cuenta" color="orange" className="text-xl"></Button>
                </div>
            </div>
        </div>
    )
}

export default AlertModal;