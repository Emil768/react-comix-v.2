import { useState } from "react";
import { setCurrentPage } from "../../redux/filters/filtersReducer";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Pagination.module.scss";

function Pagination({ pages }: { pages: number }) {
  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState(0);

  const onChanghePage = (index: number) => {
    setActivePage(index);
    dispatch(setCurrentPage(index + 1));
  };

  return (
    <ul className={styles.pagination}>
      {Array(pages)
        .fill(0)
        .map((_, index) => (
          <li
            onClick={() => onChanghePage(index)}
            className={
              activePage === index
                ? [
                    styles.pagination__item,
                    styles.pagination__item_active,
                  ].join(" ")
                : styles.pagination__item
            }
            key={index}
          >
            {index + 1}
          </li>
        ))}
    </ul>
  );
}

export default Pagination;
