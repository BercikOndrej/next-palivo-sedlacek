import ContactSection from "./contact-section";
import GallerySection from "./gallery-section";
import PriceListSection from "./price-list-section";

export default function Home() {
  return <div>
    <PriceListSection />
    <GallerySection />
    <ContactSection />
  </div>;
}
