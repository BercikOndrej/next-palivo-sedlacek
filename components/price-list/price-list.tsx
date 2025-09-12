import { Wood } from "@/utils/price-type";
import WoodCard from "./wood-card";
import { Fragment } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from 'next/image';
import piliny from '@/public/price-list/cenik-piliny.webp'
import doprava from '@/public/price-list/cenik-doprava.jpg'
import paleta from '@/public/price-list/cenik-paleta.webp'


interface Props {
  data: Wood[];
}

const PriceList = ({data}: Props) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {data.map(wood => <Fragment key={wood.type}>
        <WoodCard state={'laminated'} wood={wood} />
        <WoodCard state={'loose'} wood={wood} />
      </Fragment>
      )}
      {/* Piliny */}
      <Card className="pt-0">
        <div className="w-full group overflow-clip rounded-t-md">
          <Image 
          src={piliny}
          alt="Foto pilin"
          className="rounded-t-md object-cover group-hover:scale-110 transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-primary font-bold text-lg">Piliny</CardTitle>
          <CardDescription>Prodávané po prm</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
            <span className="font-bold text-black col-1 row-1">Míra</span>
            <span className="font-bold text-black col-2 row-1">Cena</span>

            <span className="row-2 col-1">1 prm</span>
            <span className="row-2 col-2">50 Kč</span>

          </div>
        </CardContent>
      </Card>
      {/* Paleta */}
      <Card className="pt-0">
        <div className="w-full group overflow-clip rounded-t-md">
          <Image 
          src={paleta}
          alt="Foto palety"
          className="rounded-t-md object-cover group-hover:scale-110 transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-primary font-bold text-lg">Paleta</CardTitle>
          <CardDescription>Připočítává se k celkové ceně dříví</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
            <span className="font-bold text-black col-1 row-1">Míra</span>
            <span className="font-bold text-black col-2 row-1">Cena</span>

            <span className="row-2 col-1">1 kus</span>
            <span className="row-2 col-2">400 Kč</span>

          </div>
        </CardContent>
      </Card>
      {/* Doprava */}
      <Card className="pt-0">
        <div className="w-full group overflow-clip rounded-t-md">
          <Image 
          src={doprava}
          alt="Foto dopravy"
          className="rounded-t-md object-cover group-hover:scale-110 transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-primary font-bold text-lg">Doprava</CardTitle>
          <CardDescription>Přepočet podle najetých km</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
            <span className="font-bold text-black col-1 row-1">Míra</span>
            <span className="font-bold text-black col-2 row-1">Cena</span>

            <span className="row-2 col-1">1 km</span>
            <span className="row-2 col-2">30 Kč</span>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PriceList
