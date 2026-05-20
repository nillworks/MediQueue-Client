const getTutorListData = async userId => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutorsList/${userId}`,
  );
  return res.json();
};

export default getTutorListData;
