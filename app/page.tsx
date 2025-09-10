import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import GallerySection from "./gallery-section";
import PriceListSection from "./price-list-section";

export default function Home() {
  return <div>
    <AboutSection />
    <div className="w-full h-0.5 py-8 bg-bg-color">
      <div className="border-b-2 border-text"></div>
    </div>
    <PriceListSection />
    <GallerySection />
    <ContactSection />
  </div>;
}
