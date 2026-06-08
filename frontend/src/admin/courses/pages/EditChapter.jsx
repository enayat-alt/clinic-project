import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetChapterByIdQuery,
  useUpdateChapterMutation,
} from "../services/chapterApi";

export default function EditChapter() {
  const { chapterId, courseId } =
    useParams();

  const navigate = useNavigate();

  const {
    data: chapter,
    isLoading,
  } = useGetChapterByIdQuery(
    chapterId
  );

  const [
    updateChapter,
    { isLoading: updating },
  ] = useUpdateChapterMutation();

  const [title, setTitle] =
    useState("");

  useEffect(() => {
    if (chapter) {
      setTitle(chapter.title);
    }
  }, [chapter]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert(
        "Please enter chapter title"
      );
      return;
    }

    try {
      await updateChapter({
        id: chapterId,
        title,
      }).unwrap();

      alert(
        "Chapter Updated Successfully"
      );

      navigate(
        `/admin/courses/${courseId}/content`
      );
    } catch (error) {
      console.log(error);

      alert(
        error?.data?.message ||
          "Failed to update chapter"
      );
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">
          Edit Chapter
        </h1>

        <p className="text-gray-500 mb-6">
          Update chapter information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium">
              Chapter Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={updating}
              className="bg-[#1a504c] text-white px-6 py-3 rounded-xl"
            >
              {updating
                ? "Updating..."
                : "Update Chapter"}
            </button>

            <button
              type="button"
              onClick={() =>
                navigate(
                  `/admin/courses/${courseId}/content`
                )
              }
              className="bg-gray-300 px-6 py-3 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}