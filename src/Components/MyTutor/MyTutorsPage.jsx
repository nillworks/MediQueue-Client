import { Edit, Eye, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import getBookingData from '@/lib/getBookingData';
import Link from 'next/link';
import EditTutorModal from './EditTutorModal';

export async function MyTutorsPage() {
  const data = await getBookingData();
  const tutors = data?.myBooking;

  return (
    <div className="pt-30 container mx-auto pb-10">
      <Table className={'border border-[#dddd] rounded-lg'}>
        <TableHeader>
          <TableRow>
            <TableHead>Tutor Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Slots</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tutors.map((tutor, index) => (
            <TableRow key={index}>
              {/* Tutor */}
              <TableCell className="flex items-center gap-3 font-medium">
                {/* <Image
                  src={tutor.user.image}
                  width={20}
                  height={20}
                  className="rounded-full"
                  alt="tutor"
                /> */}
                {tutor.name}
              </TableCell>

              {/* Subject */}
              <TableCell>{tutor.subject}</TableCell>

              {/* Fee */}
              <TableCell className="text-blue-600 font-semibold">
                ${tutor.price}/hr
              </TableCell>

              {/* Slots */}
              <TableCell>{tutor.slots}</TableCell>

              {/* Status */}
              <TableCell>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    tutor.status
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-red-100 text-red-600 border border-red-200'
                  }`}
                >
                  {tutor.status ? 'Active' : 'Cancelled'}
                </span>
              </TableCell>

              {/* Actions */}
              <TableCell className="text-right flex gap-2 justify-end">
                <Link href={`/tutors/${tutor?.tutorId}`}>
                  <Button
                    size="icon"
                    variant="outline"
                    className={'cursor-pointer'}
                  >
                    <Eye size={16} />
                  </Button>
                </Link>

                {/* Edit */}
                <EditTutorModal tutorsData={tutor} />

                <Button
                  size="icon"
                  variant="destructive"
                  className={'cursor-pointer'}
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
