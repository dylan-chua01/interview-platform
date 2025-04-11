// page.tsx
'use client';

import CheckoutPage from '@/components/CheckoutPage';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABBLE_KEY!);

export default function CheckOut() {
    const searchParams = useSearchParams();
    const amount = Number(searchParams.get('amount')) || 0; // Default to 0 if not provided

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Donation</h1>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-xl text-gray-600">Total:</span>
                        <span className="text-2xl font-bold text-blue-600">${amount.toFixed(2)}</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <div className="p-6">
                        <Elements
                            stripe={stripePromise}
                            options={{
                                mode: "payment",
                                amount: convertToSubcurrency(amount),
                                currency: "usd",
                                appearance: {
                                    theme: 'stripe',
                                    variables: {
                                        colorPrimary: '#0ea5e9',
                                        colorBackground: '#ffffff',
                                        colorText: '#1e293b',
                                    }
                                }
                            }}
                        >
                            <CheckoutPage amount={amount} />
                        </Elements>
                    </div>
                    
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm text-gray-600">Secure payment processed by Stripe</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}