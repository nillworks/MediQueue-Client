const getMyBookingData = async userId => {
  const res = await fetch(`http://localhost:8000/myBooking/${userId}`);
  return res.json();
};

export default getMyBookingData;
