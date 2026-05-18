const getSingleTutorsData = async id => {
  const res = await fetch(`http://localhost:8000/tutors/${id}`);
  return res.json();
};

export default getSingleTutorsData;
