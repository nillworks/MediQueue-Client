import TutorsAll from '@/Components/TutorsPage/TutorsAll';
import getAllTutorsData from '@/lib/getAllTutorsData';

const page = async ({ searchParams }) => {
  const { search } = await searchParams;

  const data = await getAllTutorsData(search);
  const tutorsData = data.tutors;

  return (
    <>
      <TutorsAll tutorsData={tutorsData} searchParams={search} />
    </>
  );
};

export default page;
