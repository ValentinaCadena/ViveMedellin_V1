import SearchBar from "./searchBar";

interface SearchTitleProps {
    onSearch: (query: string) => void;
}

export default function SearchTitle ({ onSearch }: SearchTitleProps) {
    return (
        <div className="w-full space-y-4 border-b-2 border-Gray p-2 pb-6">
            <h1 className="text-3xl text-Blue font-bold">Grupos y comunidades</h1>
            <SearchBar text="Búsqueda realizada" icon="tabler:search" onSearch={onSearch}></SearchBar>
        </div>
    )
}