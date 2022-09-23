export interface SortProps {
  type: string;
  order: string;
}

export interface FiltersProps {
  category: number | null;
  sortBy: SortProps;
  currentPage: number;
}

export const initialState: FiltersProps = {
  category: null,
  sortBy: {
    type: "rating",
    order: "desc",
  },
  currentPage: 1,
};
