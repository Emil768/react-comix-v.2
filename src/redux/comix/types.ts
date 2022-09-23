export interface Comix {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  category: number;
  rating: number;
}

export interface SortProps {
  type: string;
  order: string;
}

export interface FilterProps {
  category: number | null;
  sortBy: SortProps;
  currentPage: number;
}

export interface ComixState {
  comix: Comix[];
  comixContainer: Comix[];
  totalCount: number;
  status: string;
}

export interface ComixTotal {
  data: Comix[];
  allComix: number;
}
