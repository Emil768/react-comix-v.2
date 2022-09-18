import React, { FC, useState } from "react";
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
  imageUrl,
  name,
  price,
  category,
  rating,
}: ComixProps) => {
  const [state, setState] = useState(0);
  return (
    <div className={styles.comix}>
      {/* <span className={styles.comix__rating}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fafc50"
        >
          <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
          <b>{rating}</b>
        </svg>
      </span> */}
      <img className={styles.comix__img} src={imageUrl} alt="" />
      <h5 className={styles.comix__title}>{name}</h5>
      <div className={styles.comix__buttons}>
        <span className={styles.comix__price}>{price} ₽</span>
        <span className={styles.comix__buy} onClick={() => setState(state + 1)}>
          Купить{" "}
          {state !== 0 ? <b className={styles.comix__count}>{state}</b> : null}
        </span>
      </div>
    </div>
  );
};
export default ComixBlock;
