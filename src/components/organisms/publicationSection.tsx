import PublicationCard from "./publicationCard";
import { GroupInfoProps } from "@/pages/busquedaGrupos";

interface PublicationSectionProps {
  setSelectedGroup: (group: GroupInfoProps) => void;
}

export default function PublicationSection({ setSelectedGroup }: PublicationSectionProps) {
  return (
    <div>
      <h1 className="text-3xl text-darkBlue font-bold pb-6 text-start">
        Lo más reciente de tus comunidades
      </h1>
      <div className="flex flex-col w-full justify-center gap-10 items-center bg-white overflow-auto">
        <PublicationCard
          groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
          groupName="Manos a la obra"
          author="Santiago"
          date="Fecha"
          textPublication={
            <>
              Publicación de texto -- Línea 1 <br />
              Línea 2 <br /> Línea 3
            </>
          }
          commentAuthor="Valentina"
          comment="Comentario -- Linea 1 Linea 2"
          onImageClick={() =>
            setSelectedGroup({
              image: "https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg",
              members: Math.floor(Math.random() * 500) + 50,
              groupName: "Manos a la obra",
              isPrivate: true,
              topic: "Turismo",
              author: "Autor Desconocido",
              date: "2025-06-09",
            })
          }
        />

        <PublicationCard
          groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
          groupName="Manos a la obra"
          author="Santiago"
          date="Fecha"
          textPublication={
            <>
              Publicación de texto -- Línea 1 <br />
              Línea 2 <br /> Línea 3
            </>
          }
          commentAuthor="Valentina"
          comment="Comentario -- Linea 1 Linea 2"
          onImageClick={() =>
            setSelectedGroup({
              image: "https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg",
              members: Math.floor(Math.random() * 500) + 50,
              groupName: "Manos a la obra",
              isPrivate: true,
              topic: "Cultura",
              author: "Autor Desconocido",
              date: "2025-06-09",
            })
          }
        />

        <PublicationCard
          groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
          groupName="Manos a la obra"
          author="Santiago"
          date="Fecha"
          textPublication={
            <>
              Publicación de texto -- Línea 1 <br />
              Línea 2 <br /> Línea 3
            </>
          }
          commentAuthor="Valentina"
          comment="Comentario -- Linea 1 Linea 2"
          onImageClick={() =>
            setSelectedGroup({
              image: "https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg",
              members: Math.floor(Math.random() * 500) + 50,
              groupName: "Manos a la obra",
              isPrivate: false,
              topic: "Entretenimiento",
              author: "Autor Desconocido",
              date: "2025-06-09",
            })
          }
        />
      </div>
    </div>
  );
}
