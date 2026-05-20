import TutorsAll from '@/Components/TutorsPage/TutorsAll';

export const metadata = {
  title: 'All Tutors | MediQueue',
  description:
    'Browse all available tutors on MediQueue and find the best tutor for your needs.',
};

const page = () => {
  return (
    <>
      <TutorsAll />
    </>
  );
};

export default page;
