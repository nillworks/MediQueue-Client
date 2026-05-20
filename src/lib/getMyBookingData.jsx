const getMyBookingData = async userId => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/myBooking/${userId}`,
  );
  return res.json();
};

export default getMyBookingData;
