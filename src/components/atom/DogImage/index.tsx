import Image from 'next/image';
import { useRecoilValueLoadable } from 'recoil';
import { randomDogByBreed } from '@/store/atom';
import Loading from '@/components/atom/Loading';

type DogBreed = 'beagle' | 'pug' | 'shiba';

interface Props {
  breed: DogBreed;
}

// 비동기 recoil 동작을 위해서는 무조건 컴포넌트로 빼서 dynamic으로 import해서 써야함
// SSR이 안되서 SEO에 안걸리는점 참고
const DogImage = ({ breed }: Props) => {
  const imageUrlLoadable = useRecoilValueLoadable(randomDogByBreed(breed));
  let imageUrl = '';

  switch (imageUrlLoadable.state) {
    case 'hasValue':
      imageUrl = imageUrlLoadable.contents;
      break;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw imageUrlLoadable.contents;
  }

  if (!imageUrl) {
    return <Loading />;
  }

  return <Image src={imageUrl} alt="" width="100" height="100" />;
};

export default DogImage;
