"use client";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, start + 2);

    if (end - start < 2) {
      start = Math.max(1, end - 2);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center text-darkBlue text-xl items-center gap-2 mt-6 pb-6 flex-wrap">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-1.5 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Icon icon="ic:round-chevron-left" className="text-xl" />
        <span className="ml-1">Previous</span>
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`p-2 rounded-md font-medium hover:cursor-pointer ${
            page === currentPage
              ? "border border-altGray"
              : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-1.5 rounded-md hover:bg-gray-100 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="mr-1">Next</span>
        <Icon icon="ic:round-chevron-right" className="text-xl" />
      </button>
    </div>
  );
}
