const getSingleTutorsData = async id => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`);
  return res.json();
};

export default getSingleTutorsData;
