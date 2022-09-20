import React, { FC, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setItemsCart } from "../../redux/slices/cartReducer";
import styles from "./ComixBlock.module.scss";

interface ComixProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  category: number;
  rating: number;
}

const ComixBlock = ({
  id,
  imageUrl,
  name,
  price,
  category,
  rating,
}: ComixProps) => {
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(0);

  const addItemToCart = () => {
    const items = {
      id,
      imageUrl,
      name,
      price,
      category,
      rating,
    };
    dispatch(setItemsCart(items));
  };

  return (
    <div className={styles.comix}>
      <img className={styles.comix__img} src={imageUrl} alt="" />
      <h5 className={styles.comix__title}>{name}</h5>
      <div className={styles.comix__buttons}>
        <span className={styles.comix__price}>{price} ₽</span>
        <span className={styles.comix__buy} onClick={addItemToCart}>
          Купить{" "}
          {count !== 0 ? <b className={styles.comix__count}>{count}</b> : null}
        </span>
      </div>
    </div>
  );
};
export default ComixBlock;
