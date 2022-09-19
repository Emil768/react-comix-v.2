import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";

import { Categories, SortPopup, Container, ComixBlock } from "../../components";

import { fetchComix } from "../../redux/slices/comixReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

function Content() {
  const dispatch = useAppDispatch();
  const { comix } = useAppSelector((state) => state.comix);
  const filter = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchComix());
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <Container>
        <div className={styles.content__top}>
          <Categories />
          <SortPopup />
        </div>
        <h2 className={styles.content__title}>Все комиксы</h2>
        <div className={styles.content__items}>
          {comix.map((item) => (
            <ComixBlock {...item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Content;
