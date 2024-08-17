import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchHero from "@/components/SearchHero";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <SearchHero />
      <Cards />
      <Footer />
    </div>
  );
};

export default page;
