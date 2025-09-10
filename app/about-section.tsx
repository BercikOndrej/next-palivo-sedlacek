import AboutImages from "@/components/about/about-images"
import AboutInfo from "@/components/about/about-info"

const AboutSection = () => {
  return (
    <section className='w-full  bg-bg-color py-8 p-4 md:p-8'>
      <div className='w-full mx-auto max-w-6xl flex'>
        <AboutInfo />
      </div>
    </section>
  )
}

export default AboutSection
