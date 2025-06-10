import { Icon } from "@iconify/react/dist/iconify.js";

interface GroupDescriptionProps {
    topic: string;
}

const GroupDescription = ({ topic }: GroupDescriptionProps) => {
    return (
        <div className="text-darkBlue text-xl border-1 p-2 space-y-12 w-full mb-2 border-altGray rounded-2xl">
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Descripción</h1>
                <p>Texto descripción del grupo</p>
            </div>
            <div className="flex flex-row gap-8 justify-start">
                <p className="font-semibold">Tema del Grupo</p>
                <div className="flex gap-6 items-center">
                    <Icon icon="material-symbols:circle" width={4}></Icon>
                    <p>{topic}</p>
                </div>
            </div>
        </div>
    )
}

export default GroupDescription;