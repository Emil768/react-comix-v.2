import { ComixProps } from "../redux/cart/types";

export const getTotalPrice = (arr: ComixProps[]) =>
  arr.reduce((sum, item) => (sum += item.totalPrice!), 0);

export const getTotalCount = (arr: ComixProps[]) =>
  arr.reduce((sum, item) => (sum += item.totalCount!), 0);
