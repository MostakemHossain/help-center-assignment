import Cards from "@/components/Cards/Cards";
import Navbar from "@/components/Navbar";
import SearchHero from "@/components/SearchHero";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <SearchHero />
      <Cards />
    </div>
  );
};

export default page;
