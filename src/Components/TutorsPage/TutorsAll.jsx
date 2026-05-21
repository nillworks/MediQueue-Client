import SearchTutors from './SearchTutors';
import CategoryFilter from './CategoryFilter';
import TutorsCard from '@/shared/TutorsCard';

const TutorsAll = async ({ tutorsData, searchParams }) => {
  let tutors = [...(tutorsData || [])];
  console.log(tutors);

  if (searchParams && searchParams.trim() !== '') {
    tutors = tutors.filter(tutor =>
      tutor.name.toLowerCase().includes(searchParams.toLowerCase()),
    );
  }

  return (
    <section className="w-full container mx-auto px-4 pt-30 py-8">
      <div className="mt-6 bg-white p-4 rounded-2xl">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-6">
            <SearchTutors defaultValue={searchParams || ''} />
          </div>

          <div className="md:col-span-3">
            <CategoryFilter options={['All', 'Science', 'Commerce', 'Arts']} />
          </div>

          <div className="md:col-span-3">
            <CategoryFilter options={['All', 'Online', 'In-Person']} />
          </div>
        </div>

        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tutors.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-10">
              No tutors match your search
            </p>
          ) : (
            tutorsData.map((tutor, index) => (
              <TutorsCard key={index} tutor={tutor} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TutorsAll;
