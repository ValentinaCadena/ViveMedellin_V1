import { useEffect, useState } from "react";
import GroupCard from "../molecules/groupCard";
import PaginationControls from "../molecules/paginationControls";
import NoResults from "../atoms/noResults";
import LoadingSpinner from "../atoms/loadingSpinner";
import Switch from "../atoms/switch";
import GroupInfo from "./groupInfo";
import Button from "../atoms/button";

interface Group {
  id: number;
  groupName: string;
  description: string;
  image: string;
  topic: string;
  members: number;
  isPrivate: boolean;
}

interface GroupInfoProps {
  image: string;
  members: number;
  groupName: string;
  description: string;
  isPrivate: boolean;
  topic: string;
  author: string;
  date: string;
  groupState: "enCreacion" | "creado" | "default" | "unido";
}

export default function GroupSearchSection({
  groups,
  selectedCategory,
  onlyPrivate,
  searchQuery,
  loading,
  setLoading,
}: {
  groups: Group[];
  selectedCategory: string;
  onlyPrivate: boolean;
  searchQuery: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [usePagination, setUsePagination] = useState(false);
  const itemsPerPage = 4;

  const [groupStates, setGroupStates] = useState<Record<string, "default" | "unido">>({});
  const [selectedGroup, setSelectedGroup] = useState<GroupInfoProps | null>(null);

  const filteredGroups = groups.filter((group) => {
    const matchesCategory = selectedCategory ? group.topic === selectedCategory : true;
    const matchesPrivacy = onlyPrivate ? group.isPrivate === true : group.isPrivate === false;
    return matchesCategory && matchesPrivacy;
  });

  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  const currentGroups = usePagination
    ? filteredGroups.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredGroups;

  useEffect(() => {
    setCurrentPage(1);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [groups, selectedCategory, onlyPrivate, usePagination, setLoading]);

  const handleJoin = (groupName: string) => {
    setGroupStates((prev) => ({
      ...prev,
      [groupName]: "unido",
    }));
  };

  if (selectedGroup) {
    return (
      <div className="w-full h-full relative">
        <Button
          color="roundedBlue"
          icon="ic:sharp-keyboard-double-arrow-left"
          widthIcon="40"
          className="-top-4 -left-16 absolute"
          onClick={() => setSelectedGroup(null)}
        />
        <GroupInfo {...selectedGroup} />
      </div>
    );
  }

  return (
    <div className="w-full space-y-6 h-full">
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
              groupName={group.groupName}
              text={`Tema: ${group.topic}`}
              text2={`${group.members} miembros`}
              button="Unirse"
              groupState={groupStates[group.groupName] || "default"}
              onJoin={handleJoin}
              onImageClick={(info) => setSelectedGroup(info)}
              members={group.members}
              description={group.description}
              isPrivate={group.isPrivate}
              topic={group.topic}
              author="Autor Desconocido"
              date="2025-06-09"
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
        <NoResults searchTerm={searchQuery} />
      )}
    </div>
  );
}