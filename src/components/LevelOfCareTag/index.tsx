import CustomTag from '@/components/CustomTag';
import { LevelOfCareEnum } from '@/enums/LevelOfCareEnum';

const LevelOfCareTag = ({ level = '' }) => {
  const levelMap = {
    [LevelOfCareEnum.Level1]: '1级照护',
    [LevelOfCareEnum.Level2]: '2级照护',
    [LevelOfCareEnum.Level3]: '3级照护',
    [LevelOfCareEnum.Level4]: '4级照护',
    [LevelOfCareEnum.Level5]: '5级照护',
    [LevelOfCareEnum.Level6]: '6级照护',
  };

  return (level ? <CustomTag text={levelMap[level]} /> : null);
};

export default LevelOfCareTag;