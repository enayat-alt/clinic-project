export default function LessonNavigation({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="px-4 py-2 border rounded-lg disabled:opacity-50"
      >
        Previous
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}