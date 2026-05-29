import AddTutorForm from '@/Components/AddTutorPage/AddTutorFrom';

export const metadata = {
  title: 'Add Tutor | ZenoTutor',
  description:
    'Add a new tutor to ZenoTutor by filling out the required details and start offering sessions.',
};

const page = () => {
  return (
    <>
      <AddTutorForm />
    </>
  );
};

export default page;
