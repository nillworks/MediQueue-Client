import { Eye } from 'lucide-react';
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
import EditTutorModal from './EditTutorModal';
import getTutorListData from '@/lib/getTutorListData';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import DeleteTutor from './DeleteTutor';

export async function MyTutorsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const data = await getTutorListData(session?.user?.id);
  const tutors = data?.tutorsList;

  return (
    <div className="pt-30 container mx-auto pb-10">
      <div className=" flex flex-col pb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
          My Tutors
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Manage your registered tutors
        </p>
      </div>
      <Table className={'border border-[#dddd] rounded-lg'}>
        <TableHeader className={'hover:bg-transparent'}>
          <TableRow className={'hover:bg-transparent'}>
            <TableHead>Tutor Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Slots</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tutors.length === 0 ? (
            <TableRow className={'hover:bg-transparent'}>
              <TableCell colSpan={6} className="text-center py-10">
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="text-lg font-semibold text-gray-700">
                    No Tutors Data Added
                  </p>

                  <p className="text-sm text-gray-500">
                    You haven’t added any tutor yet. Start by adding your first
                    tutor.
                  </p>

                  <Link href={'/add-tutor'}>
                    <Button className="mt-2 cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                      Add Tutor
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            tutors.map((tutor, index) => (
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
                  <Link href={`/tutors/${tutor?._id}`}>
                    <Button
                      size="icon"
                      variant="outline"
                      className={'cursor-pointer hover:bg-transparent'}
                    >
                      <Eye size={16} />
                    </Button>
                  </Link>

                  {/* Edit */}
                  <EditTutorModal tutorsData={tutor} />

                  {/* Delete Tutor */}
                  <DeleteTutor tutorsData={tutor} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
