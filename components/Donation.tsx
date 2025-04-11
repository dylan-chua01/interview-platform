'use client';
import { HeartHandshake, Sparkles, Users, Gift } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(15);

  return (
    <div className="min-h-screen bg-gray-50 mt-34">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <HeartHandshake className="text-pink-500" size={18} />
            <span className="font-medium text-secondary">Pay It Forward</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help Keep PrepMate <span className="text-[#1E5162]">Free for Everyone</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your one-time support helps maintain our platform and reach more people who need interview preparation but can't afford traditional resources.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-[#C7D0EE] rounded-xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-secondary">Make a Difference</h2>
            
            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Select Amount (USD)</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[5, 15, 25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount)}
                    className={`py-3 rounded-lg border border-dark-100 text-secondary ${
                      donationAmount === amount 
                        ? 'bg-blue-50 text-blue-600 border-blue-600' 
                        : 'hover:border-gray-400'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">$</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-dark-100 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-secondary font-semibold"
                  min="1"
                />
              </div>
            </div>

            {/* Donation Button */}
            <Link href={`/checkout?amount=${donationAmount}`} passHref>
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2">
      <HeartHandshake size={18} />
      Make Your Donation
    </button>
  </Link>

            <p className="text-sm text-gray-500 mt-4 text-center">
              All donations are securely processed via Stripe
            </p>
          </div>

          {/* Impact Visualization */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Impact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Sparkles className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Direct Access</h3>
                  <p className="text-gray-600">
                    ${donationAmount} provides interview prep for{' '}
                    <span className="font-semibold text-blue-600">
                      {Math.floor(donationAmount / 3)} people
                    </span>
                  </p>
                </div>
              </div>

              

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Gift className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Sustainable Future</h3>
                  <p className="text-gray-600">
                    Ensures we can keep PrepMate free for{' '}
                    <span className="font-semibold text-blue-600">
                      {Math.floor(donationAmount / 5)} years
                    </span>{' '}
                    per user supported
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What Donors Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I donated because I wish this existed when I was job hunting.",
                name: "Sarah K., Software Engineer"
              },
              {
                quote: "Giving back to help others succeed was so rewarding.",
                name: "Michael T., HR Manager"
              },
              {
                quote: "Love seeing exactly how my contribution makes a difference.",
                name: "Priya M., Career Coach"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-600 font-medium">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6 text-secondary">Together, We're Changing Lives</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary">
            Every dollar helps someone gain confidence and land their dream job.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;