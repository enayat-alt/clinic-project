import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  useGetCoursesQuery,
  useDeleteCourseMutation,
} from "../services/courseApi";

import CourseHeader from "../components/CourseHeader";
import CourseStats from "../components/CourseStats";
import CourseFilters from "../components/CourseFilters";
import CoursesTable from "../components/CoursesTable";

export default function AdminCourses() {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get("page")) || 1;

  const {
    data,
    isLoading,
    error,
  } = useGetCoursesQuery({
    page,
    limit: 6,
  });

  const courses = data?.courses || [];
  const pagination =
    data?.pagination;

  const [deleteCourse] =
    useDeleteCourseMutation();

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this course?",
      );

    if (!confirmDelete) return;

    try {
      await deleteCourse(id).unwrap();

      alert(
        "Course deleted successfully",
      );
    } catch (error) {
      console.error(error);

      alert(
        error?.data?.message ||
          "Failed to delete course",
      );
    }
  };

  const filteredCourses =
    courses.filter(
      (course) =>
        course.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase(),
          ) ||
        course.category
          ?.toLowerCase()
          .includes(
            search.toLowerCase(),
          ) ||
        course.instructor
          ?.toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    );

  const totalCourses =
    courses.length;

  const publishedCourses =
    courses.filter(
      (course) =>
        course.status?.toLowerCase() ===
        "published",
    ).length;

  const draftCourses =
    totalCourses -
    publishedCourses;

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        Loading courses...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-10 text-red-500">
        Failed to load courses
      </div>
    );
  }

  return (
    <div>
      <CourseHeader />

      <CourseStats
        totalCourses={totalCourses}
        publishedCourses={
          publishedCourses
        }
        draftCourses={draftCourses}
      />

      <CourseFilters
        search={search}
        setSearch={setSearch}
      />

      <CoursesTable
        courses={filteredCourses}
        page={page}
        pagination={pagination}
        setSearchParams={
          setSearchParams
        }
        navigate={navigate}
        handleDelete={handleDelete}
      />
    </div>
  );
}
