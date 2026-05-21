import MyBookedSession from '@/Components/MyBookedSession/MyBookedSession';

export const metadata = {
  title: 'My Booked Session | Manage Your Sessions',
  description:
    'View and manage all your booked tutoring sessions. Track session details, update status, and stay organized easily.',
};

const page = () => {
  return (
    <section className="pt-30 container mx-auto  pb-10">
      <MyBookedSession />
    </section>
  );
};

export default page;
