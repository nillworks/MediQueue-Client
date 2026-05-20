import { notFound } from 'next/navigation';
import TutorDetailsPage from '@/Components/TutorsDetails/TutorsDetails';
import getSingleTutorsData from '@/lib/getSingleTutorsData';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const ex = await getSingleTutorsData(id);

  if (!ex) {
    notFound();
  }
  return {
    title: `${ex.name} Tutor`,
    description: ex.description,
  };
}

const TutorsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const ex = await getSingleTutorsData(id);

  if (!ex) {
    notFound();
  }

  return (
    <>
      <TutorDetailsPage singleData={ex} />
    </>
  );
};

export default TutorsDetailsPage;
