import { headers } from 'next/headers';
import { auth } from './auth';

const getSingleTutorsData = async id => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return res.json();
};

export default getSingleTutorsData;
