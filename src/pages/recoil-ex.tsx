import UserLayout from '@/layouts/UserLayout';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { foodPriceSum, foods, IFood, IUser, user } from '@/store/atom';
import { useRef } from 'react';

export default function RecoilEx() {
  const [userData] = useRecoilState<IUser>(user);
  const [foodData, setFoodData] = useRecoilState<IFood[]>(foods);
  const foodPriceTotal = useRecoilValue(foodPriceSum);
  const resetFoodData = useResetRecoilState(foods);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputPriceRef = useRef<HTMLInputElement>(null);
  // TODO: 비동기 예시 추가 + suspense

  const addPriceHandler = () => {
    const updateData: IFood = {
      name: inputTitleRef.current?.value ?? '',
      price: Number(inputPriceRef.current?.value || 0),
    };
    const updateList: IFood[] = [...foodData, updateData];

    setFoodData(updateList);
    if (inputTitleRef.current?.value) {
      inputTitleRef.current.value = '';
    }
    if (inputPriceRef.current?.value) {
      inputPriceRef.current.value = '';
    }
  };

  return (
    <UserLayout>
      <div>
        <h3>리코일 값 예시 - 유저 정보</h3>
        <p>{JSON.stringify(userData)}</p>
      </div>
      <div>
        <h3>리코일 값 예시 - 음식</h3>
        <div>
          <h3>모든 음식의 가격 합: {foodPriceTotal}</h3>
          <h4>음식 추가</h4>
          <div>
            <input type="text" ref={inputTitleRef} />
            <input type="text" ref={inputPriceRef} />
          </div>
          <div>
            <button type={'button'} onClick={addPriceHandler}>
              State 추가
            </button>
            <button type={'button'} onClick={resetFoodData}>
              Recoil State 리셋
            </button>
          </div>
          <div>
            {foodData &&
              foodData.map((food) => (
                <div key={food.name}>
                  <h5>음식이름: {food.name}</h5>
                  <h5>음식가격: {food.price}</h5>
                </div>
              ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        input {
          border: 1px solid #333;
        }
        button {
          background-color: #ddd;
        }
        button:first-child {
          margin-right: 15px;
        }
      `}</style>
    </UserLayout>
  );
}
