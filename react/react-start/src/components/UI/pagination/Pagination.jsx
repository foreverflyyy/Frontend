import React, { useMemo } from "react";
import { getArrayPages } from "../../../utils/pages";
import '../../../styles/App.css';

export default function Pagination({totalPages, page, changePage}) {
  let pagesArray = useMemo(() => {
    return getArrayPages(totalPages);
  }, [totalPages]);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
}
