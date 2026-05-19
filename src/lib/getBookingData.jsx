const getBookingData = async () => {
  const res = await fetch(`http://localhost:8000/myBooking`);
  return res.json();
};

export default getBookingData;
