const CustomInput = (props) => {
  return (
    <div className="flex flex-col items-start w-auto">
      <div className="text-[14px] text-[#353535] font-[600] my-[12px]">
        {props.head}
      </div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={`bg-[#fff] border-[1px] border-[#CACACA] rounded-[8px] p-[11px_16px_11px_16px]  min-w-[270px] cursor-pointer ${props.className}`}
      />
    </div>
  );
};

export default CustomInput;
