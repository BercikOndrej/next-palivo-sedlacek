import React from 'react'
import SectionTitle from '../section-title'

const AboutInfo = () => {
  return (
    <div className='space-y-4'>
      <SectionTitle title='O nás' />
      <p>
        Jsme regionální firma s více jak 20 letou tradicí. Zabývající se výrobou a prodejem zejména suchého kvalitního palivového dříví. Nabízíme měkké a tvrdé listnaté dříví v délkách dle vašich požadavků. S výběrem ideálního druhu dřeva Vám rádi poradíme. Po telefonické domluvě Vás rádi uvítáme i mimo otevírací dobu.
      </p>
      <p>
        U nás najdete suché dříví, které Vám poskytne teplo ihned po doručení. Stejně tak dříví k doplnění zásob ve Vašem dřevníku na nadcházející topné sezóny.
      </p>
      <p>
        Samozřejmě můžete být přímo u expedice Vaší objednávky a na místě se tak ujistit o správné kvalitě a množství.
      </p>
      <p>
        Metrové dříví skladujeme rovnané v hráních, polínka v klecích. Zákazník má takto stoprocentní jistotu, že kupované dříví odpovídá požadovanému množství.
      </p>
      <p>
        Pro porovnání s konkurencí uvádíme ceny jak za prostorový metr sypaný, tak i za prostorový metr rovnaný. Obecně platí, že z 1 <abbr className='font-bold no-underline' title='prostorový metr'>prm</abbr> sypaného poskládáte 0,61 <abbr className='font-bold no-underline' title='prostorový metr'>prm</abbr> rovnaného.
      </p>
    </div>
  )
}

export default AboutInfo
