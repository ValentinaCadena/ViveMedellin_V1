export default function SearchTitle () {
    return (
        <div className="w-full space-y-4 border-b-2 border-Gray p-2 pb-4">
            <h1 className="text-3xl text-Blue font-bold">Grupos y comunidades</h1>
            <input type="text" id="text" name="busqueda" placeholder="Búsqueda realizada" className="border-altGray p-3 border-2 text-lg rounded-3xl w-full"/>
        </div>
    )
}