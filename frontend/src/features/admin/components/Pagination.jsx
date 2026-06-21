export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          px-3 py-2
          text-sm font-medium
          rounded-lg
          border border-slate-200
          bg-white
          text-slate-600
          shadow-sm
          disabled:opacity-40
          disabled:cursor-not-allowed
          hover:border-indigo-600
          hover:text-indigo-600
          transition
        "
      >
        ← Prev
      </button>

      {Array.from(
        { length: totalPages },
        (_, i) => (
          <button
            key={i}
            onClick={() =>
              onPageChange(i + 1)
            }
            className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600"
            }`}
          >
            {i + 1}
          </button>
        )
      )}

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        className="
          px-3 py-2
          text-sm font-medium
          rounded-lg
          border border-slate-200
          bg-white
          text-slate-600
          shadow-sm
          disabled:opacity-40
          disabled:cursor-not-allowed
          hover:border-indigo-600
          hover:text-indigo-600
          transition
        "
      >
        Next →
      </button>
    </div>
  );
}