import { useState } from "react";
import Sidebar from "@/components/organisms/Sidebar";
import SidebarSearch from "@/components/organisms/sidebarSearch";
import Header from "@/components/molecules/header";
import PublicationSection from "@/components/organisms/publicationSection";
import GroupSearchSection from "@/components/organisms/groupSearchSection";

export default function BusquedaGrupos() {
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = () => {
        setHasSearched(true);
    };

    return (
        <div className="bg-white">
            <Header />
            <div className="flex gap-2">
                <div className="w-[30%]">
                    {/* Pasamos la función a Sidebar */}
                    {!hasSearched ? <Sidebar onSearch={handleSearch} /> : <SidebarSearch onSearch={handleSearch} />}
                </div>
                <div className="p-8 w-[70%] max-h-213 overflow-auto">
                    {!hasSearched ? <PublicationSection /> : <GroupSearchSection />}
                </div>
            </div>
        </div>
    );
}
