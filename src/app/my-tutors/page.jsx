import { MyTutorsPage } from '@/Components/MyTutor/MyTutorsPage';

export const metadata = {
  title: 'My Tutors | Find Your Tutors',
  description:
    'View and manage your tutors list. Easily track, update, and organize your tutor connections in one place.',
};

const page = () => {
  return (
    <>
      <MyTutorsPage />
    </>
  );
};

export default page;
