const CustomTag = ({ text }) => {
  return (
    <div className="justify-center px-[10px] relative rounded-[10px] bg-primary-D9  h-[1.5rem] flex flex-row items-center justify-start py-[0rem] px-[0.63rem] box-border text-center text-[0.75rem] text-fg-main-bluegreen font-pingfang-sc">
      <span className="relative tracking-[0.05em] leading-[1.13rem] text-primary  w-max">
        {text}
      </span>
    </div>
  );
};

export default CustomTag;
