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
import { ClipLoader } from "react-spinners";

function Content() {
  const dispatch = useAppDispatch();
  const { comix, status } = useAppSelector((state) => state.comix);
  const { category, sortBy } = useAppSelector((state) => state.filter);

  const isLoaded = Boolean(status === "loaded");

  useEffect(() => {
    dispatch(fetchComix({ category, sortBy }));
  }, [dispatch, category, sortBy]);

  return (
    <div className={styles.content}>
      <Container>
        <div className={styles.content__top}>
          <Categories activeCategory={category} />
          <SortPopup activeSortType={sortBy} />
        </div>
        <h2 className={styles.content__title}>Все комиксы</h2>
        <div className={styles.content__items}>
          {
            isLoaded
              ? comix.map((item) => <ComixBlock {...item} key={item.id} />)
              : Array(comix.length)
                  .fill(0)
                  .map((_, index) => <LoadingBlock key={index} />)
            // <div className={styles.content__empty}>
            //   <ClipLoader color="#e34d4d" />
            // </div>
          }
        </div>
      </Container>
    </div>
  );
}

export default Content;
