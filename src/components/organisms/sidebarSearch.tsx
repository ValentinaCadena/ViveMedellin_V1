import SearchTitle from "../atoms/searchTitle";
import Filters from "../molecules/filters";

interface SidebarSearchProps {
    onSearch: () => void;
}

export default function SidebarSearch ({onSearch}: SidebarSearchProps) {
    return (
        <div className="border-r-2 border-altGray h-full">
            <SearchTitle onSearch={onSearch}></SearchTitle>
            <Filters></Filters>
        </div>
    )
}