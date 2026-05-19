'use client';

import {
  Delete,
  Edit,
  Eye,
  MoreHorizontalIcon,
  Trash2,
  View,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Image from 'next/image';

const tutors = [
  {
    name: 'Dr. Sarah Chen',
    subject: 'Mathematics',
    fee: 45,
    slots: 12,
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Prof. James Wilson',
    subject: 'Physics',
    fee: 60,
    slots: 8,
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emily Rodriguez',
    subject: 'Chemistry',
    fee: 40,
    slots: 15,
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

export default function MyTutorsPage() {
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
                <Image
                  src={tutor.image}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="tutor"
                />
                {tutor.name}
              </TableCell>

              {/* Subject */}
              <TableCell>{tutor.subject}</TableCell>

              {/* Fee */}
              <TableCell className="text-blue-600 font-semibold">
                ${tutor.fee}/hr
              </TableCell>

              {/* Slots */}
              <TableCell>{tutor.slots}</TableCell>

              {/* Status */}
              <TableCell>
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  {tutor.status}
                </span>
              </TableCell>

              {/* Actions */}
              <TableCell className="text-right flex gap-2 justify-end">
                <Button
                  size="icon"
                  variant="outline"
                  className={'cursor-pointer'}
                >
                  <Eye size={16} />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  className="cursor-pointer"
                >
                  <Edit size={16} className="text-green-500" />
                </Button>

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
