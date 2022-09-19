import React, { memo, useState } from "react";

import styles from "../Categories/categories.module.scss";
import { categoryNames } from "../../designations";
import { useDispatch } from "react-redux";
import { setCategoryIndex } from "../../redux/slices/filtersReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type ActiveCategory = number | null;

let Categories = memo(function Categories() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>(null);

  const dispatch = useAppDispatch();

  const onClickCategory = (index: ActiveCategory) => {
    dispatch(setCategoryIndex(index));
    setActiveCategory(index);
  };

  return (
    <div className={styles.categories}>
      <div className={styles.mobileOverflow}>
        <ul>
          <li
            className={activeCategory == null ? styles.active : null}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {categoryNames.map((item, index) => {
            return (
              <li
                onClick={() => onClickCategory(index)}
                className={activeCategory === index ? styles.active : null}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default Categories;
