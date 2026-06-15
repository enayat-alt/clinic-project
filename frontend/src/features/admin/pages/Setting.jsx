
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
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage clinic and platform settings
        </p>
      </div>

      {/* General Settings */}
      <div
        className="
          bg-white dark:bg-slate-800
          rounded-2xl
          border border-slate-100 dark:border-slate-700
          shadow-sm
          p-6
        "
      >
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Clinic Name */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Clinic Name
            </label>

            <input
              type="text"
              name="clinicName"
              value={settings.clinicName}
              onChange={handleChange}
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Address */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Address
            </label>

            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Consultation Fee */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Consultation Fee
            </label>

            <input
              type="number"
              name="consultationFee"
              value={settings.consultationFee}
              onChange={handleChange}
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Subscription */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Learning Subscription
            </label>

            <input
              type="number"
              name="learningSubscription"
              value={settings.learningSubscription}
              onChange={handleChange}
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="
                inline-flex items-center
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                px-5 py-2.5
                rounded-xl
                text-sm
                font-medium
                transition
              "
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>

      {/* Security */}
      <div
        className="
          mt-8
          bg-white dark:bg-slate-800
          rounded-2xl
          border border-slate-100 dark:border-slate-700
          shadow-sm
          p-6
        "
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
          Security
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* New Password */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>
        </div>

        <button
          className="
            mt-6
            inline-flex items-center
            bg-amber-500
            hover:bg-amber-600
            text-white
            px-5 py-2.5
            rounded-xl
            text-sm
            font-medium
            transition
          "
        >
          Update Password
        </button>
      </div>
    </div>
  );
}