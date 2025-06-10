import PublicationCard from "./publicationCard";

export default function PublicationSection () {
    return (
        <div>
            <h1 className="text-3xl text-darkBlue font-bold pb-6 pt-4 text-start">Lo más reciente de tus comunidades</h1>
            <div className="flex flex-col w-full justify-center gap-10 items-center bg-white overflow-auto">
                <PublicationCard 
                groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
                groupName="Manos a la obra"
                author="Santiago"
                date="Fecha"
                textPublication={<>Publicación de texto -- Línea 1 <br />Línea 2 <br /> Línea 3</>}
                commentAuthor="Valentina"
                comment="Comentario -- Linea 1 Linea 2"
                >
                </PublicationCard>
                <PublicationCard 
                groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
                groupName="Manos a la obra"
                author="Santiago"
                date="Fecha"
                textPublication={<>Publicación de texto -- Línea 1 <br />Línea 2 <br /> Línea 3</>}
                commentAuthor="Valentina"
                comment="Comentario -- Linea 1 Linea 2"
                >
                </PublicationCard>
                <PublicationCard 
                groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
                groupName="Manos a la obra"
                author="Santiago"
                date="Fecha"
                textPublication={<>Publicación de texto -- Línea 1 <br />Línea 2 <br /> Línea 3</>}
                commentAuthor="Valentina"
                comment="Comentario -- Linea 1 Linea 2 Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2"
                >
                </PublicationCard>
            </div>
        </div>
        
    )
}