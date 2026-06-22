export default function ProgressBar({
  current,
  total,
}) {
  const percentage =
    total > 0
      ? Math.round(
          (current / total) * 100
        )
      : 0;

  return (
    <div className="bg-white p-4 border rounded-lg">
      <div className="flex justify-between mb-2">
        <span className="font-medium">
          Progress
        </span>

        <span>{percentage}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}