import React from 'react';
import { BsWallet2, BsCreditCard, BsBank, BsApple } from 'react-icons/bs';
import { MdWarningAmber } from 'react-icons/md';
import { Header } from '../components';
import { rentTransactions } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Rent = () => {
  const { currentColor } = useStateContext();

  const rentAmount = '$3,420.00';
  const dueDate = 'June 1, 2026';
  const isOverdue = true;

  const paymentMethods = [
    { title: 'Wallet', desc: 'Use resident wallet balance', icon: <BsWallet2 /> },
    { title: 'Apple Pay', desc: 'Quick mobile payment', icon: <BsApple /> },
    { title: 'Credit Card', desc: 'Visa, Mastercard, Amex', icon: <BsCreditCard /> },
    { title: 'Bank Transfer', desc: 'ACH transfer from bank', icon: <BsBank /> },
  ];

  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Rent" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <p className="text-gray-400 text-sm">Current Balance</p>
              <h1 className="text-4xl font-bold mt-2">{rentAmount}</h1>
              <p className="text-gray-500 mt-2">Due by {dueDate}</p>
            </div>

            <div
              className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
                isOverdue ? 'bg-red-500' : 'bg-green-500'
              }`}
            >
              {isOverdue ? 'Past Due' : 'Paid'}
            </div>
          </div>

          {isOverdue && (
            <div className="mt-6 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 flex gap-3 items-center">
              <MdWarningAmber className="text-2xl" />
              <p>Your rent payment is past the deadline. Please complete the payment as soon as possible.</p>
            </div>
          )}

          <button
            type="button"
            style={{ backgroundColor: currentColor }}
            className="mt-8 text-white px-8 py-3 rounded-xl font-semibold hover:drop-shadow-xl"
          >
            Pay Now
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-xl font-semibold mb-5">Payment Summary</p>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Monthly Rent</span>
            <span>$3,200.00</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Amenities Fee</span>
            <span>$150.00</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Late Fee</span>
            <span className="text-red-500">$70.00</span>
          </div>

          <div className="border-t mt-5 pt-5 flex justify-between font-bold text-lg">
            <span>Total Due</span>
            <span>{rentAmount}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-2xl p-8">
        <p className="text-xl font-semibold mb-5">Choose Payment Method</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {paymentMethods.map((method) => (
            <div key={method.title} className="bg-white rounded-xl p-5 border hover:shadow-md cursor-pointer">
              <div
                style={{ color: currentColor }}
                className="text-3xl mb-3"
              >
                {method.icon}
              </div>
              <p className="font-semibold">{method.title}</p>
              <p className="text-sm text-gray-400 mt-1">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-2xl p-8">
        <p className="text-xl font-semibold mb-5">Transaction History</p>

        {rentTransactions.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white rounded-xl p-4 mb-3">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.date} • {item.method}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold">{item.amount}</p>
              <p className={`text-sm ${item.status === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;