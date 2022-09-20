import React, { memo, useState } from "react";

import styles from "../Categories/categories.module.scss";
import { categoryNames } from "../../designations";
import { setCategoryIndex } from "../../redux/slices/filtersReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type IndexProps = number | null;

interface CategoriesProps {
  activeCategory: IndexProps;
}

const Categories: React.FC<CategoriesProps> = React.memo(function Categories({
  activeCategory,
}: CategoriesProps) {
  const dispatch = useAppDispatch();

  const onClickCategory = (index: IndexProps) => {
    dispatch(setCategoryIndex(index));
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
