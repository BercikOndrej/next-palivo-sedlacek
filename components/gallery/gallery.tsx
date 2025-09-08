'use client';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const numbers = Array.from({ length: 9}).map((_, index) => index + 1);

const Gallery = () => {
  return (
    <PhotoProvider>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
          {numbers.map(num => (
            <PhotoView key={num} src={`/gallery/capka${num}.webp`}>
              <AspectRatio key={num} ratio={16 / 9} className='w-full group overflow-clip hover:cursor-pointer rounded-md'>
                <Image 
                src={`/gallery/capka${num}.webp`}
                alt="Ukázkové foto"
                fill
                className="rounded-md object-cover group-hover:scale-125 transform duration-300" />
              </AspectRatio>
            </PhotoView>
          ))}
      </div>
    </PhotoProvider>
  )
}

export default Gallery
