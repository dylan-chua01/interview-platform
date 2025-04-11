'use client';

import { useState } from 'react';
import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const PricingCards = () => {
  const [billingCycle, setBillingCycle] = useState('annual');

  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-16 px-4 lg:px-0 bg-white border-b mt-34 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Because everyone deserves a fair chance
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              That's right - We are here to support everyone. 
            </p>
          </div>

          <div className="flex justify-center items-center">
            {/* Free Plan Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 w-full max-w-sm hover:shadow-xl transition duration-300 ease-in-out text-center">
                <h2 className="text-2xl font-bold mb-1 text-secondary">Free</h2>
                <p className="text-gray-800 font-semibold mb-2">Forever Free</p>

                <Link href="/sign-up">
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold py-3 rounded-lg mb-6 transition-colors">
                    Get started
                </button>
                </Link>

                <div className="flex justify-center mb-6">
                <div className="w-16 h-0.5 bg-gray-200 rounded-full scale-x-500" />
                </div>

                <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1" size={18} />
                    <span className="text-gray-800">Unlimited Interview Cards</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1" size={18} />
                    <span className="text-gray-800">No Credit Card Required</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1" size={18} />
                    <span className="text-gray-800">Access to new features (if requested)</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1" size={18} />
                    <span className="text-gray-800">Data excluded from AI Training model</span>
                </li>
                </ul>
            </div>
            </div>

          {/* Donate Note */}
          <div className="flex flex-col items-center text-center mt-16 space-y-2">
            <div className="text-yellow-400 text-2xl">✨</div>
            <p className="text-xl font-medium text-gray-800">
              See details on{' '}
              <a
                href="/donate"
                className="text-blue-700 underline hover:text-blue-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                how you can support us!
              </a>
              .
            </p>
            <div className="text-yellow-400 text-2xl">✨</div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 pb-32 lg:py-20 bg-[#B2DACD] border-2">
            <div className="flex justify-center items-center min-h-[300px] px-4">
                <div className="text-center">
                <h2 className="text-secondary text-3xl md:text-5xl font-bold mb-4 leading-snug">
                    Say it right, right when it matters - <br className="hidden md:block" />
                    powered by PrepMate
                </h2>
                <p className="text-secondary text-lg md:text-xl font-medium mb-8">
                    Try PrepMate for Free today!
                </p>
                <a
                    href="/download"
                    className="bg-gradient-to-r from-[#7EC8E3]] to-[#050A30] text-white font-bold px-8 py-4 rounded-lg text-lg shadow-md hover:opacity-90 transition"
                >
                    Get PrepMate
                </a>
                </div>
            </div>
        </section>
    </>
  );
};

export default PricingCards;
