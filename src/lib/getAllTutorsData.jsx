const getAllTutorsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);
  return res.json();
};

export default getAllTutorsData;
