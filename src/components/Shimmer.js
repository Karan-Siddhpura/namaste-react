const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {[...Array(20)].map((ele, index) => {
          return (
            <div className="p-3 m-5 w-72 flex flex-col gap-1" key={index}>
              <div className="w-[100%] bg-gray-200 rounded-lg h-48"></div>
              <div className="flex flex-col gap-1">
                <p className="w-[100%] bg-gray-200 rounded-lg h-5"></p>
                <p className="w-[100%] bg-gray-200 rounded-lg h-5"></p>
                <p className="w-[100%] bg-gray-200 rounded-lg h-5"></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shimmer;
