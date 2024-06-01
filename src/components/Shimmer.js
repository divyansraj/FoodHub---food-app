const newobj = {
  backgroundColor: "grey",
  width: "500px",
  height: "100px",
};
export const Shimmer = () => {
  return (
    <>
    <div className="shimmer h-[50vh]"></div>
    <div className="max-w-[1280px] mx-auto my-0 pt-5">
      <h1 className=" mb-5 w-[400px] h-6 shimmer"></h1>
      <h1 className="w-[400px] h-6 mb-7 shimmer"></h1>
      <div className="flex justify-center flex-wrap gap-12 ">
        {Array(8)
          .fill("")
          .map((e, index) => (
            <div
              className="w-64 flex justify-between gap-0.5 flex-col"
              key={index}
            >
              <div className="w-64 h-44 shimmer"></div>

              <h2 className="text-xl w-48 h-5 mb-3 shimmer"></h2>
              <h3 className=" w-36 h-6 shimmer"></h3>
              <h3 className="w-36 h-6 shimmer"></h3>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="max-w-[800px] mx-auto my-0">
      <div className=" my-7 mx-0 flex gap-7">
        <img className=" w-48 h-48 shimmer"></img>

        <div>
          <h3 className="w-36 h-6 mb-3 shimmer"></h3>
          <h4 className="w-48 h-5 mb-3 shimmer"></h4>
          <h4 className="w-48 h-5 mb-3 shimmer"></h4>
          <h4 className=" w-96 h-5 shimmer"></h4>
        </div>
      </div>
      {Array(5)
        .fill("")
        .map((e, index) => (
          <div key={index}>
            <h1 className="w-[400px] h-6 mb-7 shimmer"></h1>
            <h1 className="w-36 h-6 mb-5 shimmer"></h1>
            <div className="flex flex-col py-4 px-0">
              <div className=" bg-[#e9e9e93b] flex flex-row justify-between py-5 px-0 rounded-md">
                <div className="food-details">
                  <h4 className="w-48 h-5 mb-3 shimmer"></h4>
                  <h4 className="w-48 h-5 mb-3 shimmer"></h4>
                  <p className="w-96 h-5 shimmer"></p>
                </div>
                <div className=" w-28 h-24 shimmer">
                  <img></img>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
