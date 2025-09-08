import { Wood } from "@/utils/price-type"
import cenikSkladane from '@/public/price-list/cenik-skladane.webp'
import cenikSypane from '@/public/price-list/cenik-sypane.webp'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';


interface Props {
  wood: Wood,
  state: 'laminated' | 'loose'
}

const WoodCard = ({wood, state}: Props) => {
  return (
    <Card className="pt-0">
      <div className="w-full group overflow-clip rounded-t-md">
        <Image 
        src={state === 'laminated' ? cenikSkladane : cenikSypane}
        alt="Foto uskupení dřevin"
        className="rounded-t-md object-cover group-hover:scale-110 transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-primary font-bold text-lg">{wood.type}</CardTitle>
        <CardDescription>{`${wood.group} ${state === 'laminated' ? 'skládané' : 'sypané'} dřevo`}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full grid grid-cols-2 grid-rows-5 gap-4">
          <span className="font-bold text-black col-1 row-1">Míra</span>
          <span className="font-bold text-black col-2 row-1">Cena</span>

          <span className="row-2 col-1">25 cm</span>
          <span className="row-2 col-2">{state === 'laminated' ? wood.laminated25 : wood.loose25} Kč</span>

          <span className="row-3 col-1">33 cm</span>
          <span className="row-3 col-2">{state === 'laminated' ? wood.laminated33 : wood.loose33} Kč</span>

          <span className="row-4 col-1">50 cm</span>
          <span className="row-4 col-2">{state === 'laminated' ? wood.laminated50 : wood.loose50} Kč</span>

          {state === 'laminated' && (
            <>
              <span className="row-5 col-1">100 cm</span>          
              <span className="row-5 col-2">{wood.laminated100} Kč</span>
            </>
          )}

        </div>
      </CardContent>
    </Card>
  )
}

export default WoodCard
