const OneSection = ({ title }) => {
  return (
    <div className="flex flex-col ">
      <div className="text-2xl font-bold text-gray-800">{title}</div>
    </div>
  );
};
const TwoSection = ({ title }) => {
  return (
    <div className="flex flex-col ">
      <div className="text-[20px] font-bold text-gray-800 ">{title}</div>
    </div>
  );
};


const ETitle = {
  OneSection,
  TwoSection,
};
export default ETitle;
