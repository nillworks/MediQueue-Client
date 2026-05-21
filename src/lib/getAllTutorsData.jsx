const getAllTutorsData = async (search = '') => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors?search=${search}`,
  );
  return res.json();
};

export default getAllTutorsData;
