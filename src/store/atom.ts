import { atom, selector } from 'recoil';

type Auth = 'Admin' | 'User';

export interface IUser {
  id: string;
  name: string;
  email: string;
  auth: Auth;
}

export const user = atom<IUser>({
  key: 'userInfo',
  default: {
    id: 'KimDongGle',
    name: '김도환',
    email: 'windboy098@gmail.com',
    auth: 'Admin',
  },
});

export interface IFood {
  name: string;
  price: number;
}

export const foods = atom<IFood[]>({
  key: 'foods',
  default: [],
});

export const foodPriceSum = selector({
  key: 'foodSum',
  get: ({ get }) => {
    const foodList = get(foods);

    return foodList.reduce((prev, cur) => prev + cur.price, 0);
  },
});
