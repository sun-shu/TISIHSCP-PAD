import CustomTag from '@/components/CustomTag';
import { LevelOfCareEnum } from '@/enums/LevelOfCareEnum';

const LevelOfCareTag = ({ level = '' }) => {
  const levelMap = {
    [LevelOfCareEnum.Level1]: '正常',
    [LevelOfCareEnum.Level2]: '轻度',
    [LevelOfCareEnum.Level3]: '中度I',
    [LevelOfCareEnum.Level4]: '中度II',
    [LevelOfCareEnum.Level5]: '重度I',
    [LevelOfCareEnum.Level6]: '重度II',
  };

  return (level ? <CustomTag text={levelMap[level]} /> : null);
};

export default LevelOfCareTag;