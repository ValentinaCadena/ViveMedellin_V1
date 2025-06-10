import SearchTitle from "../atoms/searchTitle";
import Filters from "../molecules/filters";
import { useState } from "react";

interface SidebarSearchProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onPrivacyChange: (onlyPrivate: boolean) => void;
}

export default function SidebarSearch({ onSearch, onCategoryChange, onPrivacyChange }: SidebarSearchProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleCategoryClick = (category: string) => {
    const newCategory = category === selectedCategory ? "" : category;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  const handlePrivacyToggle = () => {
    const newPrivacy = !isPrivate;
    setIsPrivate(newPrivacy);
    onPrivacyChange(newPrivacy);
  };

  return (
    <div className="border-r-2 border-altGray h-full">
      <SearchTitle onSearch={onSearch} />
      <Filters
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
        onlyPrivate={isPrivate}
        onPrivacyToggle={handlePrivacyToggle}
      />
    </div>
  );
}
