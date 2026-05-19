const getTutorListData = async userId => {
  const res = await fetch(`http://localhost:8000/tutorsList/${userId}`);
  return res.json();
};

export default getTutorListData;
