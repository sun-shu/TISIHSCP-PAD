import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const EDateTimePicker = (props) => {
  const { value, onChange, item: config } = props;
   
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
  const { value = {}, onChange, item: config } = props;

  const handleChange = (date, dateString) => {
    console.log(dayjs(date).valueOf(), dateString, 'dateString');
    onChange({
      ...value,
      answer: dayjs(date).valueOf(),
      elementId: config.id,
    });
  };

  return (
    <div>
      <div className=" text-zinc-700 text-xl font-semibold  leading-[30px] mb-[10px]">年/月/日</div>
      <DatePicker onChange={handleChange} value={dayjs(value.answer)} />
    </div>
  );
};

const ETimePicker = (props) => {
  const { value = {}, onChange, item: config } = props;

  const handleChange = (date, dateString) => {
    onChange({
      ...value,
      answer: dayjs(date).valueOf(),
      elementId: config.id,
    });
  };

  return (
    <div>
      <div className=" text-zinc-700 text-xl font-semibold  leading-[30px] mb-[10px]">时/分</div>
      <DatePicker picker="time" onChange={handleChange} value={dayjs(value.answer)} />
    </div>
  );
};
EDatePicker.ETimePicker = ETimePicker;
EDatePicker.EDateTimePicker = EDateTimePicker;

export default EDatePicker;
