import TutorsAll from '@/Components/TutorsPage/TutorsAll';
import getAllTutorsData from '@/lib/getAllTutorsData';

export const metadata = {
  title: 'All Tutors',
  description:
    'Browse and find the best tutors available for your learning needs.',
};

const page = async ({ searchParams }) => {
  const {
    search = '',
    startDate = '',
    endDate = '',
  } = (await searchParams) || {};

  const data = await getAllTutorsData(search, startDate, endDate);

  return <TutorsAll tutorsData={data.tutors} />;
};

export default page;
