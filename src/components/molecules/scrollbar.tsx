import GroupCard from "./groupCard";
import { GroupInfoProps } from "@/pages/busquedaGrupos";

interface ScrollbarProps {
  setSelectedGroup: (group: GroupInfoProps) => void;
}

export default function Scrollbar ({setSelectedGroup}: ScrollbarProps) {
    return (
        <div className="w-full h-116 space-y-4 border-t-2 border-slate-300 pt-4 overflow-auto">
            <h1 className="text-Blue text-2xl font-bold">Grupos a los que perteneces</h1>
            <GroupCard image="https://cdn0.uncomo.com/es/posts/6/0/2/cual_es_la_diferencia_entre_grupo_y_equipo_24206_orig.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://cdn0.uncomo.com/es/posts/6/0/2/cual_es_la_diferencia_entre_grupo_y_equipo_24206_orig.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Integrador 2",
                isPrivate: true,
                topic: "Cultura",
                author: "Valentina",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Integrador 1",
                isPrivate: false,
                topic: "Entretenimiento",
                author: "Santiago",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://emprendepyme.net/wp-content/uploads/2023/03/focus-group-vs-grupo-de-discusion-1200x675.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://emprendepyme.net/wp-content/uploads/2023/03/focus-group-vs-grupo-de-discusion-1200x675.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Integrador 3",
                isPrivate: true,
                topic: "Turismo",
                author: "Kevin",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Fábrica Escuela",
                isPrivate: true,
                topic: "Entretenimiento",
                author: "Roberto",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "CodeFactory",
                isPrivate: false,
                topic: "Cultura",
                author: "Juan Fernando",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Arquitectura de Software",
                isPrivate: true,
                topic: "Turismo",
                author: "Diego Botia",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "ArquiCompu",
                isPrivate: false,
                topic: "Entretenimiento",
                author: "John Fredy",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://emprendepyme.net/wp-content/uploads/2023/03/focus-group-vs-grupo-de-discusion-1200x675.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://emprendepyme.net/wp-content/uploads/2023/03/focus-group-vs-grupo-de-discusion-1200x675.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Integrador 1",
                isPrivate: false,
                topic: "Cultura",
                author: "Hernando Silva",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Discretas 2",
                isPrivate: false,
                topic: "Cultura",
                author: "Sierra",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://emprendepyme.net/wp-content/uploads/2023/03/focus-group-vs-grupo-de-discusion-1200x675.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://emprendepyme.net/wp-content/uploads/2023/03/focus-group-vs-grupo-de-discusion-1200x675.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "Web3ForU",
                isPrivate: true,
                topic: "Turismo",
                author: "Daniel",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
            <GroupCard image="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg" title="Integrador 2" activity="Entrega avance 3"
            onImageClick={() =>
            setSelectedGroup({
                image: "https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg",
                members: Math.floor(Math.random() * 500) + 50,
                groupName: "LIS",
                isPrivate: true,
                topic: "Entretenimiento",
                author: "Susana",
                date: "2025-06-08",
            })
            }
            ></GroupCard>
        </div>
    )
}
