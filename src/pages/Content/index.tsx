import React from "react";
import Categories from "../../components/Categories/Categories";
import LoadingBlock from "../../components/LoadingBlock.tsx";
import SortPopup from "../../components/SortPopup/SortPopup";
import "./Content.scss";

import db from "../../db.json";
import ComixBlock from "../../components/ComixBlock";

function Content() {
  const items = [];

  let categoryNames = ["Марвел", "DC", "Манга", "Фантастика/Фэнтези"];
  let sortNames = [
    { name: "популярности", type: "rating", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавиту", type: "name", order: "asc" },
  ];

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categoryNames} />
          <SortPopup items={sortNames} />
        </div>
        <h2 className="content__title">Все комиксы</h2>
        <div className={items.length <= 3 ? "flex-start" : "content__items"}>
          {db.comix.map((item) => (
            <ComixBlock {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
