export interface ComixProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  category: number;
  rating: number;
  totalCount?: number;
  totalPrice?: number;
}

export interface CartProps {
  items: ComixProps[];
  totalPrice: number;
  totalCount: number;
}

export const initialState: CartProps = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};
