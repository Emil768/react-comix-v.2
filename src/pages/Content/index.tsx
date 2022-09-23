import { useEffect } from "react";
import styles from "./Content.module.scss";

import {
  Categories,
  SortPopup,
  Container,
  ComixBlock,
  LoadingBlock,
} from "../../components";

import { fetchComix } from "../../redux/comix/comixReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { categoryNames } from "../../designations";
import emptyComix from "../../img/empty-search.png";
import Pagination from "../../components/Pagination";

function Content() {
  const dispatch = useAppDispatch();
  const { comix, totalCount, status } = useAppSelector((state) => state.comix);
  const { category, sortBy, currentPage } = useAppSelector(
    (state) => state.filter
  );

  const isLoaded = Boolean(status === "loaded");
  const categoryName = categoryNames[category!];
  const totalPages = Math.ceil(totalCount / 10);

  useEffect(() => {
    dispatch(fetchComix({ category, sortBy, currentPage }));
  }, [dispatch, category, sortBy, currentPage]);

  return (
    <div className={styles.content}>
      <Container>
        <div className={styles.content__top}>
          <Categories activeCategory={category} />
          <SortPopup activeSortType={sortBy} />
        </div>
        <h2 className={styles.content__title}>
          {categoryName == null ? "Все комиксы" : categoryName}
        </h2>
        <div className={styles.content__items}>
          {isLoaded ? (
            comix.length ? (
              comix.map((item) => <ComixBlock {...item} key={item.id} />)
            ) : (
              <div className={styles.content__empty}>
                <h1>Комиксы не найдены</h1>
                <p>Вероятней всего, вы ввели некорректные данные.</p>
                <img src={emptyComix} alt="" />
              </div>
            )
          ) : (
            Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)
          )}
        </div>
        <Pagination pages={totalPages} />
      </Container>
    </div>
  );
}

export default Content;
