import { useState } from "react";
import Sidebar from "@/components/organisms/Sidebar";
import SidebarSearch from "@/components/organisms/sidebarSearch";
import Header from "@/components/molecules/header";
import PublicationSection from "@/components/organisms/publicationSection";
import GroupSearchSection from "@/components/organisms/groupSearchSection";
import GroupInfo from "@/components/organisms/groupInfo";
import { groupsData } from "@/data/groupsData";
import Button from "@/components/atoms/button";

export interface GroupInfoProps {
  image: string;
  members: number;
  groupName: string;
  isPrivate: boolean;
  topic: string;
  author: string;
  date: string;
}

export default function BusquedaGrupos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [onlyPrivate, setOnlyPrivate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<GroupInfoProps | null>(null);

  const handleSearch = (query: string) => {
    setLoading(true);
    setSearchQuery(query);
    setSearchActive(true);
    setHasSearched(true);
  };

  const filteredGroups = groupsData.filter(
    (group) =>
      group.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      <Header
        onLogoClick={() => {
          setSearchActive(false);
          setSearchQuery("");
          setHasSearched(false);
          setOnlyPrivate(false);
          setSelectedGroup(null); // Reset vista detallada también
        }}
      />
      <div className="flex gap-2">
        <div className="w-[30%]">
          {searchActive ? (
            <SidebarSearch
              onSearch={handleSearch}
              onCategoryChange={(category) => {
                setLoading(true);
                setSelectedCategory(category);
              }}
              onPrivacyChange={(isPrivate) => {
                setLoading(true);
                setOnlyPrivate(isPrivate);
              }}
            />
          ) : (
            <Sidebar onSearch={handleSearch} setSelectedGroup={setSelectedGroup} />
          )}
        </div>

        <div className="p-16 pr-4 pt-6 w-[70%] h-213 overflow-auto relative">
          {selectedGroup ? (
            <>
              <Button
                color="roundedBlue"
                icon="ic:sharp-keyboard-double-arrow-left"
                widthIcon="40"
                className="top-2.5 left-1 absolute"
                onClick={() => setSelectedGroup(null)}
              />
              <GroupInfo {...selectedGroup} />
            </>
          ) : !hasSearched ? (
            <PublicationSection setSelectedGroup={setSelectedGroup} />
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
