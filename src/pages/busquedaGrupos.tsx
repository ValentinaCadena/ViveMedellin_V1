import Sidebar from "@/components/organisms/Sidebar"
import Header from "@/components/molecules/header"
import PublicationSection from "@/components/organisms/publicationSection"

export default function BusquedaGrupos () {
    return (
        <div className="bg-white">
            <Header></Header>
            <div className="flex gap-2">
                <div className="w-[30%]">
                <Sidebar></Sidebar>
                </div>
                <div className="p-8 w-[70%] max-h-213 overflow-auto">
                    <PublicationSection></PublicationSection>
                </div>
                
            </div>
            
        </div>
    )
}   