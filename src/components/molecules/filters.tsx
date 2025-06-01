import { Icon } from "@iconify/react/dist/iconify.js";
import CategoryButton from "../atoms/categoryButton";
import Switch from "../atoms/switch";

export default function Filters () {
    return (
        <div className="w-full flex justify-between text-Blue p-4">
            <h1 className="text-2xl font-semibold w-[30%]">Filtros</h1>
            <div className="mt-12 w-[70%] space-y-12 text-xl">
                <div className="flex justify-between">
                    <p className="font-semibold">Grupo privado</p>
                    <Switch></Switch>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <p>Categoría</p>
                        <Icon icon="mdi:chevron-up-down"></Icon>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <CategoryButton text="Cultura"></CategoryButton>
                        <CategoryButton text="Entretenimiento"></CategoryButton>
                        <CategoryButton text="Turismo"></CategoryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}