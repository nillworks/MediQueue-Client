'use client';

import { useSession } from '@/lib/auth-client';
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  toast,
} from '@heroui/react';
import Image from 'next/image';
import { useState } from 'react';

const BookingSession = ({ singleData }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(null);
  const { data } = useSession();
  const user = data?.user;

  const submitBooing = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const bookingData = {
      ...data,
      user,
      slots: singleData.slots,
      tutorId: singleData._id,
    };
    setLoading(true);

    // post Confirm Booing
    const req = await fetch(`http://localhost:8000/myBooking`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(bookingData),
    });

    const res = await req.json();
    setLoading(false);
    if (res.acknowledged === true) {
      setLoading(false);
      toast.success('Booking Confirmed Successfully', {
        description:
          'Your tutoring session has been successfully booked. We will contact you soon.',
        variant: 'success',
      });
    } else {
      toast.danger('Booking Failed', {
        description: 'We could not process your booking. Please try again.',
        variant: 'danger',
      });
      return;
    }
  };

  return (
    <Modal>
      {/* OPEN BUTTON */}
      <Modal open={open} onOpenChange={setOpen}>
        <Button
          onClick={() => setOpen(true)}
          className="w-full hover:to-blue-600 rounded-lg transition duration-300"
        >
          {user ? 'Book Now' : 'Login to Book'}
        </Button>
      </Modal>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header className="border-b border-gray-100 dark:border-white/10 p-6">
              <Modal.Heading className="text-2xl font-bold text-gray-900 dark:text-white mt-3">
                Book Session
              </Modal.Heading>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Fill the form and we will contact you soon
              </p>

              {/* Tutor Info Card */}
              <div className="mt-5 flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-white/5 dark:to-white/0 border border-blue-100 dark:border-white/10">
                <Image
                  width={200}
                  height={200}
                  src={
                    user?.image ||
                    'https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff'
                  }
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  alt="student"
                />

                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {user?.name || 'Student Profile Name'}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {singleData?.subject || 'Subject'} •{' '}
                    <span className="font-semibold">$</span>
                    {singleData?.price || 0}
                    /hr
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={submitBooing} className="flex flex-col gap-4">
                  {/* Tutor Name */}
                  <TextField
                    defaultValue={singleData?.name}
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Tutor Name</Label>
                    <Input
                      placeholder="Enter your full  name"
                      className="rounded-xl"
                    />
                  </TextField>

                  <TextField
                    defaultValue={user?.name}
                    className="w-full"
                    name="studentName"
                    type="text"
                  >
                    <Label>Student Name</Label>
                    <Input
                      placeholder="Enter your full  name"
                      className="rounded-xl"
                    />
                  </TextField>

                  <TextField
                    defaultValue={user?.email}
                    className="w-full"
                    name="email"
                    type="email"
                  >
                    <Label>Email</Label>
                    <Input
                      placeholder="Enter your email"
                      className="rounded-xl"
                    />
                  </TextField>

                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input
                      required
                      placeholder="Enter your phone number"
                      className="rounded-xl"
                    />
                  </TextField>

                  <TextField className="w-full" name="PreferredDate">
                    <Label>Preferred Date</Label>
                    <Input
                      type="date"
                      required
                      placeholder="Enter your company name"
                      className="rounded-xl"
                    />
                  </TextField>

                  <Button
                    type="submit"
                    className="flex-1 rounded-xl py-3 w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Confirm Booking'
                    )}{' '}
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingSession;
