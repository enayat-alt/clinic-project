import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    clinicName: "Odisha Polyclinic™",
    email: "admin@odishapolyclinic.com",
    phone: "+91 9876543210",
    address: "Bhubaneswar, Odisha",
    consultationFee: 300,
    learningSubscription: 999,
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(settings);

    alert("Settings Saved Successfully");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage clinic and platform settings
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Clinic Name */}
          <div>
            <label className="block mb-2 font-medium">
              Clinic Name
            </label>

            <input
              type="text"
              name="clinicName"
              value={settings.clinicName}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Consultation Fee */}
          <div>
            <label className="block mb-2 font-medium">
              Consultation Fee
            </label>

            <input
              type="number"
              name="consultationFee"
              value={settings.consultationFee}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Subscription Price */}
          <div>
            <label className="block mb-2 font-medium">
              Learning Subscription
            </label>

            <input
              type="number"
              name="learningSubscription"
              value={settings.learningSubscription}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#1a504c] text-white px-6 py-3 rounded-xl hover:bg-black transition"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">
        <h2 className="text-xl font-semibold mb-6">
          Security
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>
        </div>

        <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition">
          Update Password
        </button>
      </div>
    </div>
  );
}