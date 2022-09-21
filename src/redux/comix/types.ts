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
}

export interface ComixState {
  comix: Comix[];
  comixContainer: Comix[];
  status: string;
}
