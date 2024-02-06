const DateTimePicker = () => {
  return (
    <div>
      <h1>YearMonthDayTimeComponent</h1>
    </div>
  );
};

const DatePicker = () => {
  return (
    <div>
      <h1>DateTimeComponent</h1>
    </div>
  );
};

const TimePicker = () => {
  return (
    <div>
      <h1>DateTimeComponent</h1>
    </div>
  );
};
DatePicker.TimePicker = TimePicker;
DatePicker.DateTimePicker = DateTimePicker;

export default DatePicker;
