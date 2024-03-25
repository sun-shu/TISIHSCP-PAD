import CustomTag from '@/components/CustomTag';
import { useModel } from 'umi';

const LevelOfCareTag = ({ level = '' }) => {
  const { getDictionaryItemsCodeNameDesc } = useModel('dictionaryModel');

  const [nurseGradeCodeNameDesc] = getDictionaryItemsCodeNameDesc(['nurseGrade']);

  return (level ? <CustomTag text={nurseGradeCodeNameDesc[level]} /> : null);
};

export default LevelOfCareTag;