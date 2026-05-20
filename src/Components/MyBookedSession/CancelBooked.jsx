'use client';

import { AlertDialog, Button, CloseIcon, toast } from '@heroui/react';
import { useRouter } from 'next/navigation';

const CancelBooked = ({ BookingData }) => {
  const isActive = BookingData?.BookingStatus;
  const router = useRouter();

  console.log(BookingData);

  const handleCancelBooking = async () => {
    const req = await fetch(
      `http://localhost:8000/myBooking/${BookingData?._id}`,
      {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
      },
    );

    const res = await req.json();
    if (res.modifiedCount > 0) {
      router.refresh();
      toast.success('Booking Cancelled Successfully', {
        description: 'Your booking has been cancelled successfully.',
        variant: 'success',
      });
    } else {
      toast.danger('Cancellation Failed', {
        description: 'We could not cancel your booking. Please try again.',
        variant: 'danger',
      });
    }
  };

  return (
    <AlertDialog>
      {isActive ? (
        <AlertDialog.Trigger>
          <button
            disabled={!isActive}
            className={`${
              isActive
                ? 'bg-red-100 cursor-pointer p-2 rounded-full text-red-500 hover:bg-red-200'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <CloseIcon size={16} />
          </button>
        </AlertDialog.Trigger>
      ) : (
        <button
          disabled={!isActive}
          className={`${
            isActive
              ? 'bg-red-100  text-red-500 hover:bg-red-200'
              : 'bg-gray-200  p-2 rounded-full text-gray-400 cursor-not-allowed'
          }`}
        >
          <CloseIcon size={16} />
        </button>
      )}
      {/* Trigger */}

      {/* Modal */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will cancel booking for{' '}
                <strong>{BookingData?.name}</strong>.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleCancelBooking}
                slot="close"
                disabled={!isActive}
                variant="danger"
              >
                Confirm Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelBooked;
