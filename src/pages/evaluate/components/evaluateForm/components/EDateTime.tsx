import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';

// TODO by sunshu 这里需要将时间和日期分开 不要清除的话一起清除
const EDateTimePicker = (props) => {
  const { id, value = {}, onChange, item: config } = props;

  const handleChangeTime = (newValue) => {
    onChange({
      ...value,
      ...config,
      answer: newValue?.format('YYYY-MM-DD HH:mm'),
      elementId: config.id,
    });
  };

  return (
    <div id={id}>
      <div className="flex gap-[20px]">
        <DatePicker
          inputReadOnly
          placeholder="年-月-日 时/分"
          onChange={handleChangeTime}
          showNow={false}
          format="YYYY-MM-DD HH:mm"
          showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}

          value={value.answer && dayjs(value.answer)}
        />
      </div>
    </div>
  );
};

const EDatePicker = (props) => {
  const { id, value = {}, onChange, item: config } = props;

  const handleChange = (date, dateString) => {
    console.log(dayjs(date)?.valueOf(), dateString, 'dateString');
    onChange({
      ...value,
      ...config,
      answer: date?.format('YYYY-MM-DD'),
      elementId: config.id,
    });
  };

  return (
    <div id={id}>
      <DatePicker inputReadOnly showNow={false} renderExtraFooter={() => ''} placeholder="年/月/日"
                  onChange={handleChange}
                  value={value?.answer && dayjs(value?.answer)} />
    </div>
  );
};

const ETimePicker = (props) => {
  const { id, value = {}, onChange, item: config } = props;

  const timeStr = value.answer;

  let timeObject = null;
  if (timeStr) {
    timeObject = dayjs().set('hour', Number(timeStr.split(':')[0])).set('minute', Number(timeStr.split(':')[1]));
  }
  console.log(value, 'ETimePicker value', timeObject);
  const handleChange = (date, dateString) => {
    onChange({
      ...config,
      ...value,
      answer: date ? dayjs(date)?.format('HH:mm') : '',
      elementId: config.id,
    });
  };

  return (
    <div id={id}>
      <TimePicker inputReadOnly showNow={false} renderExtraFooter={null} placeholder="时/分" picker="time"
                  showTime={{ format: 'HH:mm', defaultValue: null }}
                  onChange={handleChange}
                  format={'HH:mm'}
                  value={timeObject} />
    </div>
  );
};
EDatePicker.ETimePicker = ETimePicker;
EDatePicker.EDateTimePicker = EDateTimePicker;

export default EDatePicker;
