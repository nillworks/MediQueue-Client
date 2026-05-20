'use client';

import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button, toast } from '@heroui/react';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DeleteTutor = ({ tutorsData }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutorsData?._id}`,
      {
        method: 'DELETE',
        headers: { authorization: `Bearer ${tokenData?.token}` },
      },
    );
    const res = await req.json();

    if (res.acknowledged === true) {
      router.refresh();
      toast.success('Tutor Deleted', {
        description:
          'This tutor and all related data have been permanently removed.',
        variant: 'success',
      });
    } else {
      toast.danger('Delete Failed', {
        description:
          error?.message || 'Something went wrong while deleting the tutor.',
        variant: 'danger',
      });
    }
  };

  return (
    <>
      <AlertDialog>
        <Button
          size="icon"
          variant=""
          className={'cursor-pointer text-red-500'}
        >
          <Trash2 size={16} />
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Tutor permanently
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete the tutor{' '}
                  <strong>{tutorsData?.name}</strong>. All related data will be
                  removed. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Confirmed Delete Tutor
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </>
  );
};

export default DeleteTutor;
