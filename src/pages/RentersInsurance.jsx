import React from 'react';
import { BsShieldCheck, BsUpload, BsFileEarmarkText, BsExclamationTriangle } from 'react-icons/bs';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const RentersInsurance = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Renters Insurance" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <p className="text-gray-400 text-sm">Policy Status</p>
              <h1 className="text-3xl font-bold mt-2">Coverage Required</h1>
              <p className="text-gray-500 mt-2">
                The Monroe requires active renters insurance for all residents.
              </p>
            </div>

            <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Proof Missing
            </div>
          </div>

          <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 rounded-xl p-4">
            <div className="flex gap-3">
              <BsExclamationTriangle className="text-2xl text-orange-500" />
              <div>
                <p className="font-semibold text-orange-600">Action Needed</p>
                <p className="text-sm text-gray-600 mt-1">
                  Upload your proof of renters insurance before June 10 to keep your resident profile compliant.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            style={{ backgroundColor: currentColor }}
            className="mt-8 text-white px-8 py-3 rounded-xl font-semibold hover:drop-shadow-xl"
          >
            Upload Proof
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-xl font-semibold mb-5">Required Coverage</p>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Liability</span>
            <span>$100,000</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Personal Property</span>
            <span>Recommended</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Status</span>
            <span className="text-orange-500">Missing</span>
          </div>

          <div className="border-t mt-5 pt-5">
            <p className="text-sm text-gray-400">
              Accepted file types: PDF, JPG, PNG
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-2xl p-6">
          <BsShieldCheck className="text-3xl mb-4" style={{ color: currentColor }} />
          <p className="font-semibold">Verify Coverage</p>
          <p className="text-sm text-gray-400 mt-2">
            Add your provider, policy number, and expiration date.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <BsUpload className="text-3xl mb-4" style={{ color: currentColor }} />
          <p className="font-semibold">Upload Document</p>
          <p className="text-sm text-gray-400 mt-2">
            Submit proof of insurance directly from your resident portal.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <BsFileEarmarkText className="text-3xl mb-4" style={{ color: currentColor }} />
          <p className="font-semibold">Review History</p>
          <p className="text-sm text-gray-400 mt-2">
            View previous insurance submissions and renewal reminders.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-2xl p-8">
        <p className="text-xl font-semibold mb-5">Policy Information</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 rounded-xl border outline-none" placeholder="Insurance Provider" />
          <input className="p-3 rounded-xl border outline-none" placeholder="Policy Number" />
          <input className="p-3 rounded-xl border outline-none" placeholder="Expiration Date" />
          <input className="p-3 rounded-xl border outline-none" placeholder="Resident Unit" />
        </div>

        <textarea
          rows="4"
          className="w-full mt-4 p-3 rounded-xl border outline-none resize-none"
          placeholder="Additional notes"
        />

        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          className="mt-5 text-white px-8 py-3 rounded-xl font-semibold hover:drop-shadow-xl"
        >
          Submit Insurance Info
        </button>
      </div>
    </div>
  );
};

export default RentersInsurance;