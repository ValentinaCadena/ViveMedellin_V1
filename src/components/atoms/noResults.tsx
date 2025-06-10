
interface NoResultsProps {
  searchTerm: string;
}

export default function NoResults({ searchTerm }: NoResultsProps) {
  return (
    <div className="flex flex-col justify-start gap-6 items-start border-b-2 border-altGray pb-8 mb-169">
      <h1 className="text-3xl font-semibold text-darkBlue">
        Resultados para: <span className="font-normal">&lt;{searchTerm}&gt;</span>
      </h1>
      <div className="flex items-center gap-12">
        <p className="text-2xl text-darkBlue">¡No se encontraron grupos con el criterio buscado!</p>
      </div>
    </div>
  );
}
