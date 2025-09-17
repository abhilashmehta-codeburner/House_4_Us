
import PropertyInfo from '@/components/Details/Details';
import GallerySection from '@/components/Gallary/gallery';
import EnquiryForm from '@/components/Enquiry/Enquiry';

export default function GalleryWithForm() {

  return (
        <section className='container max-w-5xl mx-auto my-12 px-4'>
      <div className='flex flex-col lg:flex-row gap-8'>
        <GallerySection />

        <EnquiryForm/>
      </div>
      <PropertyInfo />
    </section>
  );
}
