interface SortProps {
  name: string;
  type: string;
  order: string;
}

export const sortNames: SortProps[] = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

export const categoryNames: string[] = [
  "Марвел",
  "DC",
  "Манга",
  "Фантастика/Фэнтези",
];
