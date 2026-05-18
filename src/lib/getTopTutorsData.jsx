const getTopTutorsData = async () => {
  const res = await fetch(`http://localhost:8000/topTutors`);
  return res.json();
};

export default getTopTutorsData;
