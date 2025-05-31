import Sidebar from "@/components/organisms/Sidebar"
import Header from "@/components/molecules/header"
import PublicationSection from "@/components/organisms/publicationSection"

export default function BusquedaGrupos () {
    return (
        <div className="bg-white">
            <Header></Header>
            <Sidebar></Sidebar>
            <PublicationSection></PublicationSection>
        </div>
    )
}   