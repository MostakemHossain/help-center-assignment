
const SearchHero = () => {
    return (
        <div className="flex flex-col p-20 items-center justify-center   bg-[#DADBF0]">
            <h1 className="text-6xl font-bold mb-6">How can we help?</h1>
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 border h-12  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchHero;
