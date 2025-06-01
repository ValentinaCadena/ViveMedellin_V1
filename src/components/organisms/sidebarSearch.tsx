import SearchTitle from "../atoms/searchTitle";
import Filters from "../molecules/filters";

export default function SidebarSearch () {
    return (
        <div className="border-r-2 border-altGray h-full">
            <SearchTitle></SearchTitle>
            <Filters></Filters>
        </div>
    )
}