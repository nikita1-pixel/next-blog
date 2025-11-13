"use client";

import React from "react";
import styles from "./Pagination.module.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // Use this hook to maintain other queries

  const createPageURL = (pageNumber) => {
    // Create a new URLSearchParams instance based on existing queries
    const params = new URLSearchParams(searchParams);
    
    // Set the new page number
    params.set("page", pageNumber.toString());

    // Construct the full URL: current_path?new_queries
    return `${pathname}?${params.toString()}`;
  };

  const handlePrev = () => {
    if (hasPrev) {
      router.push(createPageURL(page - 1));
    }
  };

  const handleNext = () => {
    if (hasNext) {
      router.push(createPageURL(page + 1));
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;