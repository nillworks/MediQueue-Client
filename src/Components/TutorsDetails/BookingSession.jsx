'use client';

import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import Image from 'next/image';

const BookingSession = () => {
  const tutor = null;

  const submitBooing = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <Modal>
      {/* OPEN BUTTON */}
      <Button className="w-full cursor-pointer py-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md hover:shadow-xl hover:to-blue-600 transition-all">
        Login to Book
      </Button>

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
                  src={tutor?.image || '/avatar.png'}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  alt="tutor"
                />

                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {tutor?.name || 'Tutor Name'}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {tutor?.subject || 'Subject'} • ${tutor?.fee || 0}/hr
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={submitBooing} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Student Name</Label>
                    <Input
                      placeholder="Enter your full  name"
                      className="rounded-xl"
                    />
                  </TextField>

                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input
                      placeholder="Enter your email"
                      className="rounded-xl"
                    />
                  </TextField>

                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input
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
                    Confirm Booking
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
