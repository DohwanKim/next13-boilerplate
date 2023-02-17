import UserLayout from '@/layouts/UserLayout';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { foodPriceSum, foods, IFood, IUser, user } from '@/store/atom';
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

const DogImage = dynamic(() => import('@/components/atom/DogImage'), {
  ssr: false,
});

export default function RecoilEx() {
  const [userData] = useRecoilState<IUser>(user);
  const [foodData, setFoodData] = useRecoilState<IFood[]>(foods);
  const foodPriceTotal = useRecoilValue(foodPriceSum);
  const resetFoodData = useResetRecoilState(foods);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputPriceRef = useRef<HTMLInputElement>(null);

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
      <br />
      <br />
      <div>
        <h2>리코일 값 예시 - 음식</h2>
        <div>
          <p>
            [리코일 selector를 통해 연산 된 데이터]
            <br />
            모든 음식의 가격 합: {foodPriceTotal}
          </p>
          <br />
          <h4>음식 추가</h4>
          <div>
            <input type="text" ref={inputTitleRef} placeholder={'음식 이름'} />
            <input
              type="text"
              ref={inputPriceRef}
              placeholder={'가격(숫자만 입력)'}
            />
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
      <div>
        <h2>리코일 비동기 동작 - 랜덤 이미지 들고오기</h2>
        <div>
          <p>파라미터를 넣어 쓰는 예시</p>
          <DogImage breed={'beagle'} />
          <DogImage breed={'pug'} />
          <DogImage breed={'shiba'} />
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
