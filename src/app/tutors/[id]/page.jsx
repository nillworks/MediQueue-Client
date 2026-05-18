import TutorDetailsPage from '@/Components/TutorsDetails/TutorsDetails';
import getSingleTutorsData from '@/lib/getSingleTutorsData';

const TutorsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const ex = await getSingleTutorsData(id);

  return (
    <>
      <TutorDetailsPage singleData={ex} />
    </>
  );
};

export default TutorsDetailsPage;
