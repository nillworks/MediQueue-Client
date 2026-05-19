'use client';

import { useSession } from '@/lib/auth-client';
import { toast } from '@heroui/react';

const AddTutorForm = () => {
  const { data } = useSession();
  const user = data.user;

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const rawData = Object.fromEntries(formData.entries());

    // checkbox values manually collect
    const availableDays = formData.getAll('availableDays');

    const toMinutes = time => {
      const [h, m] = time.split(':').map(Number);
      return h * 60 + m;
    };

    const finalData = {
      name: rawData.tutorName,
      subject: rawData.subject,
      university: rawData.institution,

      schedule: {
        startTime: toMinutes(rawData.startTime),
        endTime: toMinutes(rawData.endTime),
      },

      location: rawData.location,
      experience: Number(rawData.experience),
      price: Number(rawData.hourlyFee),
      slots: Number(rawData.totalSlots),
      image: rawData.photoUrl,
      mode: rawData.mode,
      days: availableDays,
      bio: rawData?.bio,
      sessionStartDate: new Date(rawData.sessionStartDate),
      sessionEndDate: new Date(rawData.sessionEndDate),

      accountInfo: user,
    };

    const req = await fetch(`http://localhost:8000/tutors`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(finalData),
    });

    const res = await req.json();
    if (res.acknowledged === true) {
      toast.success('Tutor Added Successfully', {
        description: 'Your tutor is now live and visible to students.',
        variant: 'success',
      });
    } else {
      toast.danger('Failed to Add Tutor', {
        description:
          error?.message || 'Something went wrong. Please try again.',
        variant: 'danger',
      });
      return;
    }
    e.target.reset();
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Add New Tutor</h1>
          <p className="text-gray-500 mt-2">
            Fill all required fields carefully
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Tutor Name + Subject */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tutor Name <span className="text-red-600">*</span>
                </label>
                <input
                  name="tutorName"
                  required
                  type="text"
                  placeholder="Enter tutor name"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject <span className="text-red-600">*</span>
                </label>
                <select
                  name="subject"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Subject</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Programming</option>
                </select>
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Photo URL <span className="text-red-600">*</span>
              </label>
              <input
                name="photoUrl"
                required
                type="text"
                placeholder="Paste image link"
                pattern="https?://.*"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {/* bio Details */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Bio <span className="text-red-600">*</span>
              </label>
              <input
                name="bio"
                required
                type="text"
                placeholder="Write bio details"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Institution + Experience */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Institution <span className="text-red-600">*</span>
                </label>
                <input
                  name="institution"
                  required
                  type="text"
                  placeholder="University / College"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Experience (Years) <span className="text-red-600">*</span>
                </label>
                <input
                  name="experience"
                  required
                  type="number"
                  placeholder="e.g. 5"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Fee + Slots */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Hourly Fee <span className="text-red-600">*</span>
                </label>
                <input
                  name="hourlyFee"
                  required
                  type="number"
                  placeholder="$50"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Slots <span className="text-red-600">*</span>
                </label>
                <input
                  name="totalSlots"
                  required
                  type="number"
                  placeholder="10"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Location + Mode */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location <span className="text-red-600">*</span>
                </label>
                <input
                  name="location"
                  required
                  type="text"
                  placeholder="City / Area"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Teaching Mode <span className="text-red-600">*</span>
                </label>
                <select
                  name="mode"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            {/* Available Days */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Available Days <span className="text-red-600">*</span>
              </label>

              <div className="flex flex-wrap gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <label
                    key={day}
                    className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-blue-100"
                  >
                    <input
                      type="checkbox"
                      name="availableDays"
                      value={day}
                      className="mr-1"
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>

            {/* Time Slot */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Time <span className="text-red-600">*</span>
                </label>
                <p className="text-xs text-gray-400 mb-1">
                  Select start time (e.g. 09:00 AM)
                </p>
                <input
                  name="startTime"
                  type="time"
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  End Time <span className="text-red-600">*</span>
                </label>
                <p className="text-xs text-gray-400 mb-1">
                  Select start time (e.g. 11:00 AM)
                </p>
                <input
                  name="endTime"
                  type="time"
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>

            {/* Session Date */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Session Start Date <span className="text-red-600">*</span>
                </label>
                <input
                  name="sessionStartDate"
                  required
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Session End Date <span className="text-red-600">*</span>
                </label>
                <input
                  name="sessionEndDate"
                  required
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 cursor-pointer bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Add Tutor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTutorForm;
