import { Gender } from '@prisma/client';

const getGender = (gender: string): Gender => {
  switch (gender) {
    case 'MALE':
    case 'Male':
      return Gender.MALE;
    case 'FEMALE':
    case 'Female':
      return Gender.FEMALE;
    case 'NON_BINARY':
    case 'Non-Binary':
      return Gender.NON_BINARY;
    default:
      console.error("Gender not found with name '" + gender + "'");
      return Gender.NON_BINARY;
  }
};

export default getGender;
