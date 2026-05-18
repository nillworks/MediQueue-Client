const getAllTutorsData = async () => {
  const res = await fetch(`http://localhost:8000/tutors`);
  return res.json();
};

export default getAllTutorsData;
