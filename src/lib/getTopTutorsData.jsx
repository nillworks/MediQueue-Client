const getTopTutorsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topTutors`);
  return res.json();
};

export default getTopTutorsData;
