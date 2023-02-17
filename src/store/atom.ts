import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

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

export const randomDog = selector({
  key: 'randomDog',
  get: async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const data = response.data;

    return data.message;
  },
});

export const randomDogByBreed = selectorFamily({
  key: 'randomDogByBreed',
  get: (breed: string) => async () => {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images/random`,
    );
    const data = response.data;
    return data.message;
  },
});
