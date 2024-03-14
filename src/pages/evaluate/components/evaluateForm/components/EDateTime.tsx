import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const EDateTimePicker = (props) => {
  const { id, value = {}, onChange, item: config } = props;

  console.log(value, 'EDateTimePicker value1');
  const handleChangeDate = (newValue) => {

    let answer = newValue.valueOf();
    if (value?.answer) {
      const oldHour = dayjs(value.answer).hour();
      const oldMinute = dayjs(value.answer).minute();
      answer = dayjs(newValue).hour(oldHour).minute(oldMinute).valueOf();
    }

    onChange({
      ...value,
      ...config,
      answer,
      elementId: config.id,
    });
  };

  const handleChangeTime = (newValue) => {
    let answer = newValue.valueOf();
    if (value?.answer) {
      answer = dayjs(value.answer).hour(newValue.hour()).minute(newValue.minute()).valueOf();
    }

    onChange({
      ...value,
      ...config,
      answer: answer,
      elementId: config.id,
    });
  };

  return (
    <div id={id}>
      <div className="flex gap-[20px]">
        <div>
          <DatePicker inputReadOnly showNow={false} renderExtraFooter={() => ''} onChange={handleChangeDate}
                      value={value.answer && dayjs(value.answer)}
                      defaultValue={null} placeholder="年/月/日" />
        </div>
        <div>
          <DatePicker inputReadOnly showNow={false} renderExtraFooter={() => ''} placeholder="时/分" picker="time"
                      onChange={handleChangeTime}
                      value={value.answer && dayjs(value.answer)}
                      showTime={{ format: 'HH:mm', defaultValue: null }} />
        </div>
      </div>
    </div>
  );
};

const EDatePicker = (props) => {
  const { id, value = {}, onChange, item: config } = props;

  const handleChange = (date, dateString) => {
    console.log(dayjs(date).valueOf(), dateString, 'dateString');
    onChange({
      ...value,
      ...config,
      answer: date.valueOf(),
      elementId: config.id,
    });
  };

  return (
    <div id={id}>
      <DatePicker inputReadOnly showNow={false} renderExtraFooter={() => ''} placeholder="年/月/日"
                  onChange={handleChange}
                  value={value.answer && dayjs(value.answer)} />
    </div>
  );
};

const ETimePicker = (props) => {
  const { id, value = {}, onChange, item: config } = props;

  const handleChange = (date, dateString) => {
    onChange({
      ...value,
      ...config,
      answer: dayjs(date).valueOf(),
      elementId: config.id,
    });
  };

  return (
    <div id={id}>
      <DatePicker inputReadOnly showNow={false} renderExtraFooter={null} placeholder="时/分" picker="time"
                  showTime={{ format: 'HH:mm', defaultValue: null }}
                  onChange={handleChange}
                  value={value.answer && dayjs(value.answer)} />
    </div>
  );
};
EDatePicker.ETimePicker = ETimePicker;
EDatePicker.EDateTimePicker = EDateTimePicker;

export default EDatePicker;
