import { DatePicker } from 'antd';

const EDateTimePicker = (props) => {
  const { value, onChange } = props;
  return (
    <div>

      <div className="flex gap-[20px]">
        <div>
          <div className=" text-zinc-700 text-xl font-semibold  leading-[30px] mb-[10px]">年/月/日</div>
          <DatePicker onChange={onChange} value={value} />
        </div>
        <div>
          <div className=" text-zinc-700 text-xl font-semibold  leading-[30px] mb-[10px]">时/分</div>
          <DatePicker picker="time" />
        </div>

      </div>

    </div>
  );
};

const EDatePicker = (props) => {
  const { value, onChange } = props;

  return (
    <div>
      <div className=" text-zinc-700 text-xl font-semibold  leading-[30px] mb-[10px]">年/月/日</div>
      <DatePicker onChange={onChange} value={value} />

    </div>
  );
};

const ETimePicker = (props) => {
  const { value, onChange } = props;

  return (
    <div>
      <div className=" text-zinc-700 text-xl font-semibold  leading-[30px] mb-[10px]">时/分</div>
      <DatePicker picker="time" onChange={onChange} value={value} />
    </div>
  );
};
EDatePicker.ETimePicker = ETimePicker;
EDatePicker.EDateTimePicker = EDateTimePicker;

export default EDatePicker;
