import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../app/authSlice";
import { useGetMyCoursesQuery } from "../../../../services/studentCourseApi";
import { BookOpen, CheckCircle2, Award, PlayCircle } from "lucide-react";

export default function Dashboard() {


  const user = useSelector(selectCurrentUser);

  //const { data: courses = [], isLoading, error } = useGetMyCoursesQuery();
  const { data: courses = [], isLoading, error } =
  useGetMyCoursesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const token = useSelector((state) => state.auth.accessToken);


  return (
    <div className="min-h-screen bg-slate-50">
      {/* Welcome Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Ready to continue your learning journey?
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Loading */}
        {isLoading && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <p className="text-center text-sm text-slate-400">
              Loading courses...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <p className="text-center text-sm text-rose-500">
              Failed to load courses.
            </p>
          </div>
        )}

        {!isLoading && !error && (
          <>
            {/* Continue Learning */}
            {courses.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <h2 className="text-base font-semibold text-slate-800 mb-3">
                  Continue learning
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-slate-50 rounded-xl p-4">
                  <div className="w-full sm:w-32 h-20 rounded-lg bg-[#1a504c]/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {courses[0].Course.thumbnail ? (
                      <img
                        src={courses[0].Course.thumbnail}
                        alt={courses[0].Course.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <BookOpen size={24} className="text-[#1a504c]" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-800 truncate">
                      {courses[0].Course.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {courses[0].Course.description}
                    </p>

                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3">
                      <div
                        className="bg-[#1a504c] h-1.5 rounded-full"
                        style={{ width: "0%" }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-slate-400">0% completed</p>
                  </div>

                  <button className="flex items-center justify-center gap-1.5 bg-[#1a504c] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-purple-700 transition whitespace-nowrap">
                    <PlayCircle size={15} />
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                icon={BookOpen}
                label="Enrolled courses"
                value={courses.length}
              />
              <StatCard icon={CheckCircle2} label="Completed" value={0} />
              <StatCard icon={Award} label="Certificates" value={0} />
            </div>

            {/* My Learning */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-semibold text-slate-800">
                  My learning
                </h2>
                <p className="text-xs text-slate-400">
                  {courses.length} courses
                </p>
              </div>

              {courses.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
                  <BookOpen size={28} className="text-slate-300 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">
                    You haven't enrolled in any courses yet.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.map((enrollment) => (
                    <div
                      key={enrollment.id}
                      className="bg-white/80 backdrop-blur rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                    >
                      <div className="w-full h-28 bg-[#1a504c]/10 flex items-center justify-center overflow-hidden">
                        {enrollment.Course.thumbnail ? (
                          <img
                            src={enrollment.Course.thumbnail}
                            alt={enrollment.Course.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <BookOpen size={28} className="text-[#1a504c]" />
                        )}
                      </div>

                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 min-h-[2.5rem]">
                          {enrollment.Course.title}
                        </h3>

                        <p className="text-xs text-slate-400 mt-1">
                          {enrollment.Course.instructor}
                        </p>
                        {enrollment.Course.level && (
                          <p className="text-xs text-slate-400 mt-0.5">
                            {enrollment.Course.level}
                          </p>
                        )}

                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Progress</span>
                            <span>0%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <div
                              className="bg-[#1a504c] h-1.5 rounded-full"
                              style={{ width: "0%" }}
                            />
                          </div>
                        </div>

                        <Link
                          to={`/courses/${enrollment.Course.id}`}
                          className="mt-4 w-full flex items-center justify-center gap-1.5 text-sm font-medium text-[#1a504c] border border-[#1a504c]/30 py-2 rounded-lg hover:bg-[#1a504c]/5 transition"
                        >
                          <PlayCircle size={14} />
                          Continue
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
      <div className="w-9 h-9 rounded-lg bg-[#1a504c]/10 flex items-center justify-center mb-2">
        <Icon size={16} className="text-[#1a504c]" />
      </div>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-xs text-slate-400 mt-0.5">{label}</p>
    </div>
  );
}
