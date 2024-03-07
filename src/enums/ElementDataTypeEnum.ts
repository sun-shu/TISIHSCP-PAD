//elementDataType
// {code: "01", name: "数字(包括小数)", enName: "number", jpName: "数字(小数を含む)"}
// 1
// :
// {code: "02", name: "文本", enName: "text", jpName: "テキスト"}
// 2
// :
// {code: "03", name: "日期", enName: "date", jpName: "日付"}
// 3
// :
// {code: "05", name: "身份证号码", enName: "number", jpName: "身分証明書番号 ↵"}
// 4
// :
// {code: "08", name: "年/月/日", enName: "Year/Month/Day", jpName: "年/月/日"}
// 5
// :
// {code: "09", name: "时/分", enName: "Hour/minute", jpName: "時/分"}
// 6
// :
// {code: "10", name: "年/月/日/时/分", enName: "Year/Month/Day/Hour/Minute", jpName: "年/月/日/時/分"}
export enum ElementDataTypeEnum {
  NUMBER = '01',
  TEXT = '02',
  DATE = '03',
  IDCARD = '05',
  YEAR_MONTH_DAY = '08',
  HOUR_MINUTE = '09',
  DATE_TIME = '10',

}