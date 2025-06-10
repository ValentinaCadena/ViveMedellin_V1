import { useEffect, useState } from "react";
import GroupCard from "../molecules/groupCard";
import PaginationControls from "../molecules/paginationControls";
import NoResults from "../atoms/noResults";
import LoadingSpinner from "../atoms/loadingSpinner";
import Switch from "../atoms/switch"; // ✅ Switch personalizado para activar/desactivar paginación
import GroupInfo from "./groupInfo";
import Button from "../atoms/button";

interface Group {
  id: number;
  title: string;
  image: string;
  topic: string;
  members: number;
  isPrivate: boolean;
}

interface GroupSearchSectionProps {
  groups: Group[];
  selectedCategory: string;
  onlyPrivate: boolean;
  searchQuery: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface GroupInfoProps {
  image: string;
  members: number;
  groupName: string;
  isPrivate: boolean;
  topic: string;
  author: string;
  date: string;
}


export default function GroupSearchSection({
  groups,
  selectedCategory,
  onlyPrivate,
  searchQuery,
  loading,
  setLoading,
}: GroupSearchSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [usePagination, setUsePagination] = useState(false);
  const itemsPerPage = 4;

  const filteredGroups = groups.filter((group) => {
    const matchesCategory = selectedCategory ? group.topic === selectedCategory : true;
    const matchesPrivacy = onlyPrivate ? group.isPrivate === true : group.isPrivate === false;
    return matchesCategory && matchesPrivacy;
  });

  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  const currentGroups = usePagination
    ? filteredGroups.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredGroups;
  const [selectedGroup, setSelectedGroup] = useState<GroupInfoProps | null>(null);


  useEffect(() => {
    setCurrentPage(1);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [groups, selectedCategory, onlyPrivate, usePagination, setLoading]);

  if (selectedGroup) {
  return (
    <div className="p-8 w-full space-y-6 h-201 relative">
      <Button color="roundedBlue" icon="ic:sharp-keyboard-double-arrow-left" widthIcon="40" className="-top-2 -left-7 absolute" onClick={() => setSelectedGroup(null)}></Button>
      <GroupInfo
        image={selectedGroup.image}
        members={selectedGroup.members}
        groupName={selectedGroup.groupName}
        isPrivate={selectedGroup.isPrivate}
        topic={selectedGroup.topic}
        author={selectedGroup.author}
        date={selectedGroup.date}
      />
    </div>
  );
}

  return (
    <div className="p-8 w-full space-y-6 h-201">
      {loading ? (
        <LoadingSpinner />
      ) : filteredGroups.length > 0 ? (
        <>
          <div className="flex flex-col items-start gap-8 justify-between border-b-2 border-altGray pb-8">
            <h2 className="text-3xl text-darkBlue font-semibold">
              Resultados para: <span className="text-darkBlue">{searchQuery}</span>
            </h2>
            <div className="flex items-center gap-12">
              <span className="text-xl text-darkBlue">Paginar</span>
              <Switch isChecked={usePagination} toggle={() => setUsePagination(!usePagination)} />
            </div>
          </div>

          {currentGroups.map((group) => (
            <GroupCard
              key={group.id}
              variant="search"
              image={group.image}
              title={group.title}
              text={`Tema: ${group.topic}`}
              text2={`${group.members} miembros`}
              button="Unirse"
              onImageClick={() =>
                setSelectedGroup({
                  image: group.image,
                  members: group.members,
                  groupName: group.title,
                  isPrivate: group.isPrivate,
                  topic: group.topic,
                  author: "Autor Desconocido", // puedes cambiarlo si tienes info real
                  date: "2025-06-09", // idem
                })
              }
            />
          ))}


          {usePagination && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      ) : (
        <NoResults searchTerm={searchQuery}/>
      )}
    </div>
  );
}
