import { Eye, Trash2 } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import Link from 'next/link';
import getMyBookingData from '@/lib/getMyBookingData';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import CancelBooked from './CancelBooked';

const MyBookedSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const MyBookingData = await getMyBookingData(session?.user.id);
  const MyBooking = MyBookingData?.myBooking;

  return (
    <>
      <div className=" flex flex-col pb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
          My Booked Sessions
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Track and manage your learning sessions
        </p>
      </div>

      <Table className={'border border-[#dddd] rounded-lg'}>
        <TableHeader className={'hover:bg-transparent'}>
          <TableRow className={'hover:bg-transparent'}>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Tutor Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Cancel</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {MyBooking.length === 0 ? (
            <TableRow className={'hover:bg-transparent'}>
              <TableCell colSpan={6} className="text-center py-10">
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="text-lg font-semibold text-gray-700">
                    No Booking Data
                  </p>

                  <p className="text-sm text-gray-500">
                    You haven’t added any tutor yet. Start by adding your first
                    tutor.
                  </p>

                  <Link href={'/tutors'}>
                    <Button className="mt-2 cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            MyBooking.map((Booking, index) => (
              <TableRow key={index} className={'hover:bg-transparent'}>
                {/* Tutor */}
                <TableCell className="flex items-center gap-3 font-medium">
                  {/* <Image
                  src={tutor.user.image}
                  width={20}
                  height={20}
                  className="rounded-full"
                  alt="tutor"
                /> */}
                  {Booking.accountInfo.name}
                </TableCell>

                {/* Subject */}
                <TableCell>{Booking?.phone}</TableCell>

                {/* Fee */}
                <TableCell>{Booking.name}</TableCell>

                {/* Slots */}
                <TableCell>{Booking.email}</TableCell>

                {/* Status */}
                <TableCell>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      Booking.BookingStatus
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-red-100 text-red-600 border border-red-200'
                    }`}
                  >
                    {Booking.BookingStatus ? 'Confirmed' : 'Cancelled'}
                  </span>
                </TableCell>

                {/* Actions */}
                <TableCell className="text-right flex gap-2 justify-end">
                  <Link href={`/tutors/${Booking?.tutorId}`}>
                    <Button
                      size="icon"
                      variant="outline"
                      className={'cursor-pointer hover:bg-transparent'}
                    >
                      <Eye size={16} />
                    </Button>
                  </Link>

                  <CancelBooked BookingData={Booking} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default MyBookedSession;
