import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';

const numbers = Array.from({ length: 9}).map((_, index) => index + 1);

const Gallery = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
      {numbers.map(num => (
        <AspectRatio key={num} ratio={16 / 9} className='w-full'>
          <Image 
          src={`/gallery/capka${num}.webp`}
          alt="Ukázkové foto"
          fill
          className="rounded-md object-cover" />
        </AspectRatio>
      ))}
    </div>
  )
}

export default Gallery
