/**
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */
import { getCitiesData } from '@/actions';
import  Footer  from '@/components/Footer';
import Header from "@/components/Header"

export const PageLayout = async ({ children }) => {
  //-------------- State & Variables --------------//
  const citiesData = await getCitiesData();

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//
  return (
    <>
      <Header _this={{ cities: citiesData?.cities }} />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
};
