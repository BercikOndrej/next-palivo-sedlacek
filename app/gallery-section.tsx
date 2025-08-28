import Gallery from '@/components/gallery/gallery'
import SectionTitle from '@/components/section-title'

const GallerySection = () => {
  return (
    <section className='w-full py-8 p-4 md:p-8'>
      <div className='"w-full mx-auto max-w-6xl'>
        <SectionTitle title='Galerie' />
        <Gallery />
      </div>
    </section>
  )
}

export default GallerySection
