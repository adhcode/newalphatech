import AboutUs from "@/components/aboutUs";
import Foot from "@/components/foot";
import Hero from "@/components/hero";
import InvestmentPlan from "@/components/investPlan";


export default function Home() {
  return (
  <div className="flex flex-col gap-[150px]">
    <Hero/>
    <AboutUs/>
    <InvestmentPlan/>
    <Foot/>
  </div>
  );
}
