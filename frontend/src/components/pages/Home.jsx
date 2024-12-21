
const Home = () => {
  return (
    <>
      <div className="p-4 pt-[6rem]">
        <h1 className="text-2xl font-bold mb-4">
          base templates Tailwind CSS Layout Examples
        </h1>
        {/* Grid Examples */}
        <div className="example">
          <h2 className="text-xl">Grid: grid-cols-3</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-gray-100 p-4 h-auto sm:h-32">
            <div className="bg-blue-500 text-white p-2 h-32 sm:h-full flex justify-center items-center">
              1
            </div>
            <div className="bg-green-500 text-white p-2 h-32 sm:h-full flex justify-center items-center">
              2
            </div>
            <div className="bg-red-500 text-white p-2 h-32 sm:h-full flex justify-center items-center">
              3
            </div>
            <div className="bg-yellow-500 text-white p-2 h-32 sm:h-full flex justify-center items-center">
              4
            </div>
          </div>
        </div>

        {/* Overflow Examples */}
        <div className="example">
          <h2 className="text-xl">Overflow: scroll</h2>
          <div className="overflow-scroll h-56 bg-gray-100 p-4">
            <div className="bg-blue-500 text-white p-2">Scrollable Content</div>
            <div className="bg-green-500 text-white p-2">More Content</div>
            <div className="bg-red-500 text-white p-2">Even More Content</div>
            <div className="bg-red-600 text-white p-2">Even More Content</div>
            <div className="bg-red-700 text-white p-2">Even More Content</div>
            <div className="bg-red-800 text-white p-2">Even More Content</div>
            <div className="bg-red-900 text-white p-2">Even More Content</div>
            <div className="bg-red-300 text-white p-2">Even More Content</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
