import Scrollbar from "../molecules/scrollbar";
import Button from "../atoms/button";

export default function Sidebar () {
    return (
        <div className="max-w-100 space-y-4 ml-4">
            <h1 className="text-3xl text-Blue font-bold">Grupos y comunidades</h1>
            <input type="text" id="text" name="busqueda" placeholder="Buscar Grupos" />
            <Button text="Últimas publicaciones" icon="mdi:newspaper-variant-multiple-outline" iconPosition="left" widthIcon="50" color="emerald" className="w-full text-xl space-x-4 justify-start p-4"></Button>
            <Button text="Sugerencias de comunidades" icon="mdi:lightbulb-on-outline" iconPosition="left" widthIcon="50" color="gray" className="w-full text-xl space-x-4 justify-start p-4"></Button>
            <Button text="+ Crear nuevo grupo" color="orange" className="w-full text-2xl p-2"></Button>
            <Scrollbar></Scrollbar>
        </div>
    )
}