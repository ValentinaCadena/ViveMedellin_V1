import { useState } from "react";
import Sidebar from "@/components/organisms/Sidebar";
import SidebarSearch from "@/components/organisms/sidebarSearch";
import Header from "@/components/molecules/header";
import PublicationSection from "@/components/organisms/publicationSection";
import GroupSearchSection from "@/components/organisms/groupSearchSection";
import { groupsData } from "@/data/groupsData";

export default function BusquedaGrupos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [onlyPrivate, setOnlyPrivate] = useState(false);
  const [loading, setLoading] = useState(false); // 🆕 Nuevo estado de carga

  const handleSearch = (query: string) => {
    setLoading(true); // 🌀 activar loading antes de aplicar filtros
    setSearchQuery(query);
    setSearchActive(true);
    setHasSearched(true);
  };

  // ⏳ filtro que se actualizará después de activar loading
  const filteredGroups = groupsData
    .filter((group) =>
      group.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.topic.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-white">
      <Header onLogoClick={() => {
        setSearchActive(false);
        setSearchQuery("");
        setHasSearched(false);
        setOnlyPrivate(false);
      }} />
      <div className="flex gap-2">
        <div className="w-[30%]">
          {searchActive ? (
            <SidebarSearch
              onSearch={handleSearch}
              onCategoryChange={(category) => {
                setLoading(true); // 🌀 loading cuando cambia filtro
                setSelectedCategory(category);
              }}
              onPrivacyChange={(isPrivate) => {
                setLoading(true); // 🌀 loading cuando cambia filtro
                setOnlyPrivate(isPrivate);
              }}
            />
          ) : (
            <Sidebar onSearch={handleSearch} />
          )}
        </div>
        <div className="p-8 pt-4 w-[70%] max-h-213 overflow-auto">
          {!hasSearched ? (
            <PublicationSection />
          ) : (
            <GroupSearchSection
              groups={filteredGroups}
              selectedCategory={selectedCategory}
              onlyPrivate={onlyPrivate}
              searchQuery={searchQuery}
              loading={loading}
              setLoading={setLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
}