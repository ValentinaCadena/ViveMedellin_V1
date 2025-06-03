import { useState } from "react";
import { Icon } from "@iconify/react";

interface SearchBarProps {
    text: string;
    icon: string;
    onSearch: () => void;
}

const SearchBar = ({ text, icon, onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        if (inputValue.trim() !== "") {
            onSearch(); // activamos el cambio de vista
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="relative">
            <Icon
                icon={icon}
                width={24}
                className="top-4 left-3 absolute hover:cursor-pointer text-[#686868] hover:text-gray-400"
                onClick={handleSearch}
            />
            <input
                type="text"
                placeholder={text}
                className="border-altGray text-Blue p-3 border-2 text-lg pl-10 rounded-3xl w-full"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default SearchBar;
