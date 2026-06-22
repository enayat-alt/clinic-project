import { useGetMyCoursesQuery } from "../../../../services/studentCourseApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  Award,
  Clock,
  PlayCircle,
  User,
  Settings,
  GraduationCap,
} from "lucide-react";

export default function MyLearning() {
  const user = useSelector((state) => state.auth.user);

  //const { data: courses = [], isLoading } = useGetMyCoursesQuery();
  const { data: courses = [], isLoading, error } = useGetMyCoursesQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-lg font-medium text-slate-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-[#1a504c]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-white">My learning</h1>
          <p className="text-emerald-100/80 mt-1 text-sm">
            Welcome back, {user?.name}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 h-fit">
            <div className="flex flex-col items-center text-center pb-5 border-b border-slate-100">
              <div className="w-16 h-16 rounded-full bg-[#1a504c] text-white flex items-center justify-center text-2xl font-semibold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <h2 className="mt-3 text-base font-semibold text-slate-800">
                {user?.name}
              </h2>
              <p className="text-slate-400 text-xs">Student</p>
            </div>

            <nav className="mt-4 space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-[#e5f9f8] text-[#1a504c]">
                <BookOpen size={16} />
                My learning
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                <Award size={16} />
                Certificates
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                <User size={16} />
                Profile
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                <Settings size={16} />
                Settings
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                icon={BookOpen}
                label="Enrolled"
                value={courses.length}
              />
              <StatCard icon={CheckCircle2} label="Completed" value={0} />
              <StatCard icon={Award} label="Certificates" value={0} />
              <StatCard icon={Clock} label="Hours" value={0} />
            </div>

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
                    <p className="text-xs text-slate-400 mt-0.5">
                      Resume where you left off
                    </p>

                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3">
                      <div
                        className="bg-[#1a504c] h-1.5 rounded-full"
                        style={{ width: "0%" }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-slate-400">0% completed</p>
                  </div>

                  {/* <button className="flex items-center justify-center gap-1.5 bg-[#1a504c] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#143e3b] transition whitespace-nowrap">
                    <PlayCircle size={15} />
                    Continue
                  </button> */}
                  <Link
                          to={`/learning/my-learning/${courses[0].Course.id}`}
                          className="flex items-center justify-center gap-1.5 bg-[#1a504c] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#143d3a] transition whitespace-nowrap"
                        >
                          <PlayCircle size={15} />
                          Continue
                        </Link>
                  
                </div>
              </div>
            )}

            {/* My Courses */}
            <div>
              <h2 className="text-base font-semibold text-slate-800 mb-3">
                My courses
              </h2>

              {courses.length > 0 ? (
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
                        {/* 
                        <button className="mt-4 w-full flex items-center justify-center gap-1.5 text-sm font-medium text-[#1a504c] border border-[#1a504c]/30 py-2 rounded-lg hover:bg-[#e5f9f8] transition">
                          <PlayCircle size={14} />
                          Continue
                        </button> */}
                        

                        <Link
                          to={`/learning/my-learning/${courses[0].Course.id}`}
                          className="flex items-center justify-center gap-1.5 bg-[#1a504c] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#143d3a] transition whitespace-nowrap"
                        >
                          <PlayCircle size={15} />
                          Continue
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
                  <BookOpen size={28} className="text-slate-300 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">
                    You haven't enrolled in any courses yet.
                  </p>
                </div>
              )}
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h2 className="text-base font-semibold text-slate-800 mb-4">
                Achievements
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <AchievementCard icon="🏆" label="First course completed" />
                <AchievementCard icon="🎓" label="First certificate earned" />
                <AchievementCard icon="📚" label="40+ learning hours" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
      <div className="w-9 h-9 rounded-lg bg-[#e5f9f8] flex items-center justify-center mb-2">
        <Icon size={16} className="text-[#1a504c]" />
      </div>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-xs text-slate-400 mt-0.5">{label}</p>
    </div>
  );
}

function AchievementCard({ icon, label }) {
  return (
    <div className="border border-slate-100 rounded-xl p-4 text-center bg-slate-50/50">
      <span className="text-2xl">{icon}</span>
      <p className="text-xs font-medium text-slate-600 mt-2">{label}</p>
    </div>
  );
}
