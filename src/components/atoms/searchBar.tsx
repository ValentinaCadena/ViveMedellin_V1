import { useState } from "react";
import { Icon } from "@iconify/react";

interface SearchBarProps {
  text: string;
  icon: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ text, icon, onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  const handleIconClick = () => {
    onSearch(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white border border-gray-300 rounded-3xl p-2">
      <button type="button" onClick={handleIconClick}>
        <Icon icon={icon} className="text-gray-500 mr-2 text-xl hover:cursor-pointer hover:text-gray-300" />
      </button>
      <input
        type="text"
        placeholder={text}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full outline-none text-Blue text-base"
      />
    </form>
  );
}
