import React, { useState, useEffect, useRef, memo } from "react";
import styles from "../SortPopup/SortPopup.module.scss";
import { sortNames } from "../../designations";
import { useAppDispatch } from "../../redux/hooks";
import { setSortType } from "../../redux/filters/filtersReducer";

interface SortTypeProps {
  type: string;
  order: string;
}

let SortPopup = memo(function SortPopup({
  activeSortType,
}: {
  activeSortType: SortTypeProps;
}) {
  const [modal, setModal] = useState(false);

  const dispatch = useAppDispatch();

  const activeLabel = sortNames.find(
    (item) => item.type === activeSortType.type
  )?.name;

  const changeModal = () => {
    setModal(!modal);
  };

  const onSelectItem = (obj: SortTypeProps) => {
    const { type, order } = obj;
    dispatch(setSortType({ type, order }));
    setModal(false);
  };

  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!sortRef.current?.contains(event.target as Node)) {
        setModal(false);
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <svg
        className={!modal ? styles.rotated : null}
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span onClick={changeModal}>{activeLabel}</span>
      {modal && (
        <div className={styles.sort__popup}>
          <ul>
            {sortNames.map((obj: any, index: any) => {
              return (
                <li
                  className={activeLabel === obj.name ? styles.active : null}
                  onClick={() => onSelectItem(obj)}
                  key={index}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
