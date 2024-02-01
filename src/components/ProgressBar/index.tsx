const ProgressBar = ({ processRate = 100 }) => {
  return (
    <>
      <div className="w-full h-4 relative">
        <div className="w-full h-4 left-0 top-0 absolute bg-primary-D9 rounded-2xl border border-teal-500 px-[5px]">
          <div className="flex justify-start items-center h-full">
            <div
              className="h-2 left-[5.55px] top-[4px]  bg-teal-500 rounded-lg"
              style={{
                width: `${processRate}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
