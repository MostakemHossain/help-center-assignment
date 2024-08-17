const CardInfo = ({ item }: any) => {
  return (
    <div className="max-w-sm p-6 h-40 bg-white  border-2 border-gray-400 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{item?.title}</h2>
      <hr className="w-full font-bold mb-2 border-gray-400" />
      <p className="text-gray-600">{item?.description}</p>
    </div>
  );
};

export default CardInfo;
