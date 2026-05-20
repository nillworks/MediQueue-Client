import AddTutorForm from '@/Components/AddTutorPage/AddTutorFrom';

export const metadata = {
  title: 'Add Tutor | MediQueue',
  description:
    'Add a new tutor to MediQueue by filling out the required details and start offering sessions.',
};

const page = () => {
  return (
    <>
      <AddTutorForm />
    </>
  );
};

export default page;
