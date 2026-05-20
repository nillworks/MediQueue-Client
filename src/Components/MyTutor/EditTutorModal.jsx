'use client';
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  toast,
} from '@heroui/react';
import { Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const EditTutorModal = ({ tutorsData }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (tutorsData?.days) {
      setSelectedDays(tutorsData.days || []);
    }
  }, [tutorsData]);

  const handleDayChange = day => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const minutesToTime = minutes => {
    const h = String(Math.floor(minutes / 60)).padStart(2, '0');
    const m = String(minutes % 60).padStart(2, '0');
    return `${h}:${m}`;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateTutorData = Object.fromEntries(formData.entries());
    const availableDays = formData.getAll('days');

    const finalUpdateData = {
      ...updateTutorData,
      days: availableDays,
      slots: Number(updateTutorData?.slots),
    };

    setLoading(true);
    // Update Tutor List
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutorsData?._id}`,
      {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(finalUpdateData),
      },
    );

    const res = await req.json();

    if (res.acknowledged === true) {
      setLoading(false);
      router.refresh();
      toast.success('Tutor Update Successfully', {
        description: 'Your tutor is Update now live and visible to students.',
        variant: 'success',
      });
    } else {
      toast.danger('Failed to update tutor', {
        description:
          error?.message || 'Something went wrong. Please try again.',
        variant: 'danger',
      });
      return;
    }

    document.querySelector('[data-slot="modal-close-trigger"]')?.click();
    event.target.reset();
  };

  return (
    <>
      <Modal key={'blur'} open={open} onOpenChange={setOpen}>
        <Button
          onClick={() => setOpen(true)}
          size="icon"
          variant="outline"
          className="cursor-pointer"
        >
          <Edit size={16} className="text-green-500" />
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900">
              <Modal.CloseTrigger className="text-blue-400" />

              {/* HEADER */}
              <Modal.Header className="px-6 py-5 border-b rounded-lg border-gray-100 dark:border-zinc-800 bg-gradient-to-r from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-900">
                <Modal.Heading className="text-xl font-bold text-blue-600 dark:text-white">
                  Update Tutor information
                </Modal.Heading>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Modify tutor information and save changes instantly
                </p>
              </Modal.Header>

              {/* BODY */}
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Tutor Name + Subject */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <TextField defaultValue={tutorsData?.name || ''}>
                        <Label>Tutor Name</Label>
                        <Input
                          name="name"
                          placeholder="Enter tutor full name"
                          className={'border border-[#ddd] rounded-lg'}
                        />
                      </TextField>

                      <TextField>
                        <Label>Subject</Label>
                        <select
                          defaultValue={tutorsData?.subject || ''}
                          name="subject"
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option value="">Select Subject</option>
                          <option>Mathematics</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                          <option>Biology</option>
                          <option>Programming</option>
                          <option>Accounting</option>
                        </select>
                      </TextField>
                    </div>

                    {/* Photo URL */}
                    <TextField defaultValue={tutorsData?.image || ''}>
                      <Label>Photo URL</Label>
                      <Input
                        name="image"
                        className={'border border-[#ddd] rounded-lg'}
                        placeholder="https://example.com/image.jpg"
                      />
                    </TextField>

                    {/* Bio */}
                    <TextField defaultValue={tutorsData?.bio || ''}>
                      <Label>Bio</Label>
                      <Input
                        name="bio"
                        className={'border border-[#ddd] rounded-lg'}
                        placeholder="Write short bio about tutor"
                      />
                    </TextField>

                    {/* Institution + Experience */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <TextField defaultValue={tutorsData?.university || ''}>
                        <Label>Institution</Label>
                        <Input
                          className={'border border-[#ddd] rounded-lg'}
                          name="university"
                          placeholder="Harvard University / College name"
                        />
                      </TextField>

                      <TextField defaultValue={tutorsData?.experience || ''}>
                        <Label>Experience (Years)</Label>
                        <Input
                          name="experience"
                          type="number"
                          className={'border border-[#ddd] rounded-lg'}
                          placeholder="e.g. 5"
                        />
                      </TextField>
                    </div>

                    {/* Fee + Slots */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <TextField defaultValue={tutorsData?.price || ''}>
                        <Label>Hourly Fee</Label>
                        <Input
                          name="price"
                          type="number"
                          className={'border border-[#ddd] rounded-lg'}
                          placeholder="e.g. 50"
                        />
                      </TextField>

                      <TextField defaultValue={tutorsData?.slots || ''}>
                        <Label>Total Slots</Label>
                        <Input
                          name="slots"
                          type="number"
                          className={'border border-[#ddd] rounded-lg'}
                          placeholder="e.g. 10"
                        />
                      </TextField>
                    </div>

                    {/* Location + Mode */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <TextField defaultValue={tutorsData?.location || ''}>
                        <Label>Location</Label>
                        <Input
                          name="location"
                          className={'border border-[#ddd] rounded-lg'}
                          placeholder="Boston, USA"
                        />
                      </TextField>

                      <TextField>
                        <Label>Teaching Mode</Label>
                        <select
                          name="mode"
                          defaultValue={tutorsData?.mode || ''}
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option value="">Select Mode</option>
                          <option>Online</option>
                          <option>Offline</option>
                          <option>Hybrid</option>
                        </select>
                      </TextField>
                    </div>

                    {/* Available Days */}
                    <div>
                      <Label>Available Days</Label>

                      <div className="flex flex-wrap gap-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                          day => (
                            <TextField key={day}>
                              <Label className="flex items-center gap-1">
                                <Input
                                  type="checkbox"
                                  name="days"
                                  checked={selectedDays.includes(day)}
                                  value={day}
                                  onChange={() => handleDayChange(day)}
                                />
                                {day}
                              </Label>
                            </TextField>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <TextField
                        defaultValue={
                          tutorsData?.schedule?.startTime
                            ? minutesToTime(tutorsData.schedule.startTime)
                            : ''
                        }
                      >
                        <Label>Start Time</Label>
                        <Input
                          className={'border border-[#ddd] rounded-lg'}
                          name="startTime"
                          type="time"
                        />
                      </TextField>

                      <TextField
                        defaultValue={
                          tutorsData?.schedule?.endTime
                            ? minutesToTime(tutorsData.schedule.endTime)
                            : ''
                        }
                      >
                        <Label>End Time</Label>
                        <Input
                          className={'border border-[#ddd] rounded-lg'}
                          name="endTime"
                          type="time"
                        />
                      </TextField>
                    </div>

                    {/* Dates */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <TextField
                        defaultValue={
                          tutorsData?.sessionStartDate
                            ? tutorsData.sessionStartDate.split('T')[0]
                            : ''
                        }
                      >
                        <Label>Session Start Date</Label>
                        <Input
                          className={'border border-[#ddd] rounded-lg'}
                          name="sessionStartDate"
                          type="date"
                        />
                      </TextField>

                      <TextField
                        defaultValue={
                          tutorsData?.sessionEndDate
                            ? tutorsData.sessionEndDate.split('T')[0]
                            : ''
                        }
                      >
                        <Label>Session End Date</Label>
                        <Input
                          className={'border border-[#ddd] rounded-lg'}
                          name="sessionEndDate"
                          type="date"
                        />
                      </TextField>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 text-white"
                    >
                      {loading ? 'Updating...' : 'Confirm Update'}
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default EditTutorModal;
