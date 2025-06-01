import Sidebar from "@/components/organisms/Sidebar"
import SidebarSearch from "@/components/organisms/sidebarSearch"
import Header from "@/components/molecules/header"
import PublicationSection from "@/components/organisms/publicationSection"
import GroupSearchSection from "@/components/organisms/groupSearchSection"


export default function BusquedaGrupos () {
    return (
        <div className="bg-white">
            <Header></Header>
            <div className="flex gap-2">
                <div className="w-[30%]">
                <SidebarSearch></SidebarSearch>
                </div>
                <div className="p-8 w-[70%] max-h-213 overflow-auto">
                    <GroupSearchSection></GroupSearchSection>
                </div>
                
            </div>
            
        </div>
    )
}   