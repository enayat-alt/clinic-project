import { Search, Filter } from "lucide-react";

export default function CourseFilters({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  price,
  setPrice,
  categories,
}) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 lg:p-6">
  

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by course title..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
              w-full
              h-12
              pl-11
              pr-4
              rounded-2xl
              border border-gray-200
              bg-gray-50
              text-sm
              placeholder:text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#1a504c]/20
              focus:border-[#1a504c]
              focus:bg-white
              transition-all
            "
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="
            h-12
            px-4
            rounded-2xl
            border border-gray-200
            bg-gray-50
            text-sm
            text-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-[#1a504c]/20
            focus:border-[#1a504c]
            focus:bg-white
            transition-all
          "
        >
          <option value="">
            All Categories
          </option>

          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>

        {/* Price */}
        <select
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="
            h-12
            px-4
            rounded-2xl
            border border-gray-200
            bg-gray-50
            text-sm
            text-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-[#1a504c]/20
            focus:border-[#1a504c]
            focus:bg-white
            transition-all
          "
        >
          <option value="">
            All Prices
          </option>

          <option value="free">
            Free Courses
          </option>

          <option value="paid">
            Paid Courses
          </option>
        </select>
      </div>
    </div>
  );
}