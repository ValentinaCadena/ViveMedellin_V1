import { Icon } from "@iconify/react";
import Button from "../atoms/button";

interface GroupBasicInfoProps {
  image: string;
  groupName: string;
  isPrivate: boolean;
  members: number;
  groupState: "enCreacion" | "creado" | "default" | "unido";
  onJoin?: () => void;
}

export default function GroupBasicInfo({
  image,
  groupName,
  isPrivate,
  members,
  groupState,
  onJoin,
}: GroupBasicInfoProps) {
  return (
    <div className="text-darkBlue flex flex-col p-4 space-y-4 w-full">
      <img src={image} alt={groupName} className="rounded-2xl" />
      <h1 className="text-4xl font-semibold">{groupName}</h1>
      <div className="flex justify-between">
        <div className="flex gap-8 items-center text-2xl">
          <div className="flex gap-2 items-center">
            <Icon icon={isPrivate ? "mdi:lock-outline" : "ri:global-line"} width={36} />
            <p>{isPrivate ? "Grupo Privado" : "Grupo Público"}</p>
          </div>
          <div className="flex gap-6 items-center">
            <Icon icon="material-symbols:circle" width={4} />
            <p>{members} Miembros</p>
          </div>
        </div>

        {groupState !== "enCreacion" && (
          <div className="flex flex-row gap-4">
            {groupState === "creado" && (
              <>
                <Button text="Administrar" color="orange" className="text-xl px-8" />
                <Button text="Invitar" color="orange" className="text-xl px-8" />
              </>
            )}
            {groupState === "default" && (
              <Button text="Unirte" color="orange" className="text-xl px-8" onClick={onJoin}/>
            )}
            {groupState === "unido" && (
              <Button text="Invitar" color="orange" className="text-xl px-8" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
