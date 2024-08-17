import CardInfo from "./CardInfo";

const Cards = async () => {
  const res = await fetch("https://help-center-three.vercel.app/cards");
  const data = await res.json();

  return (
    <div className="flex items-center justify-center mt-28 mb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-56 gap-y-10">
        {data?.data?.map((card: any) => (
          <CardInfo key={card._id} item={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
