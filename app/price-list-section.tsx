import SectionTitle from '@/components/section-title'
import path from 'path'
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import PriceList from '@/components/price-list/price-list';
import { HEADER_MAP, Wood } from '@/utils/price-type';

const PriceListSection = () => {

  const filePath = path.join(process.cwd(), 'public', 'data', 'Cenik.csv') 
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data: Wood[] = parse(fileContent, {
    delimiter: ';',
    columns: (headers) => 
      headers.map(h => HEADER_MAP[h] ?? h),
    skip_empty_lines: true,
    trim: true
  })

  return (
    <section className='w-full py-8 p-4 md:p-8 bg-bg-color' id='section--price-list'>
      <div className='w-full mx-auto max-w-6xl flex flex-col gap-8'>
        <div>
          <SectionTitle title='Ceník' />
          <h3 className='text-primary font-bold text-2xl'>Suchého palivového dříví</h3>
          <p>Naše dřevo je v suchém stavu k okamžitému použití</p>
        </div>
        <PriceList data={data} />
      </div>
    </section>
  )
}

export default PriceListSection
