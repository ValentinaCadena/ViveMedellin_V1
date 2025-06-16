import Scrollbar from "../molecules/scrollbar";
import Button from "../atoms/button";
import SearchBar from "../atoms/searchBar";
import { GroupInfoProps } from "@/pages/busquedaGrupos";

interface SidebarProps {
  onSearch: (query: string) => void;
  setSelectedGroup: (group: GroupInfoProps) => void;
  onCreateClick: () => void;
}

export default function Sidebar({ onSearch, setSelectedGroup, onCreateClick }: SidebarProps) {
  return (
    <div className="w-full space-y-4 border-r-2 border-Gray px-4 pt-2">
        <h1 className="text-3xl text-Blue font-bold">Grupos y comunidades</h1>
        <SearchBar text="Buscar Grupos" icon="tabler:search" onSearch={onSearch}></SearchBar>
        <Button text="Últimas publicaciones" icon="mdi:newspaper-variant-multiple-outline" iconPosition="left" widthIcon="50" color="emerald" className="w-full text-xl space-x-4 justify-start p-4"></Button>
        <Button text="Sugerencias de comunidades" icon="mdi:lightbulb-on-outline" iconPosition="left" widthIcon="50" color="gray" className="w-full text-xl space-x-4 justify-start p-4"></Button>
        <Button text="+ Crear nuevo grupo" color="orange" className="w-full text-2xl p-2" onClick={onCreateClick}></Button>
      <Scrollbar setSelectedGroup={setSelectedGroup} />
    </div>
  );
}
