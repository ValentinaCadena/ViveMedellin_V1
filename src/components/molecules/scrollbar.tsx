import GroupCard from "./groupCard";

export default function Scrollbar () {
    return (
        <div className="w-full h-116 space-y-4 border-t-2 border-slate-300 pt-4 max-w-100 overflow-auto">
            <h1 className="text-Blue text-2xl font-bold">Grupos a los que perteneces</h1>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
            <GroupCard image="/grupoPI.png" group="Integrador 2" activity="Entrega avance 3"></GroupCard>
        </div>
    )
}
