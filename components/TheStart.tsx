'use client';
import React from 'react';
import { Mic, Heart, Users, Award, MessageSquare, Compass } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <><><><section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mt-34">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We're on a mission to help people land their dream <span className="text-[#296E85]">job</span>.
            <br />
            and a whole lot of good vibes!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We’re building the smarter way to prep — no pressure, no anxiety, just real support when it matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4">
              Each of us at PrepMate has faced interview challenges - freezing during technical rounds, struggling with behavioral questions, or feeling overwhelmed by the process.
            </p>
            <p className="text-gray-600">
              We believe interview prep should be <span className="font-medium">accessible, effective, and empowering</span>. That philosophy shapes our product, culture, and daily work.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mic className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">AI-Powered Practice</h4>
                <p className="text-gray-600">Realistic mock interviews with instant feedback</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Heart className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Supportive Community</h4>
                <p className="text-gray-600">Join other candidates and improve together</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Compass className="text-purple-600" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Personalized Coaching</h4>
                <p className="text-gray-600">Accessible to one on ones with HR professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why I Started <span className="text-[#296E85]">PrepMate</span>
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            I’ve been on both sides of the interview table — as a nervous candidate and as a hiring manager. What I realized was that most people don’t lack the skills — they just struggle to communicate them under pressure.
          </p>
          <p className="text-xl text-gray-700">
            I started PrepMate because I wanted to level the playing field. Everyone deserves a fair shot at their dream role, and I knew technology could bridge the gap between potential and performance. This isn’t just a product — it’s a passion project born out of real frustration, and a desire to make interviews feel less like interrogations and more like conversations.
          </p>
        </div>
      </section>

    </><section className="w-full bg-[white] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            My Journey to PrepMate
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            I still remember my very first interview — a phone call for a customer service role at the airport. I was a first-year university student, living away from home in a new country. Ten minutes before the call, I was shaking. The moment I answered, my mind went completely blank.
          </p>
          <p className="text-xl text-gray-700 mb-6">
            I didn’t know what to expect. I had barely two days to prepare, and between lectures and assignments, I came into that interview underprepared. A few days later, I received the "I'm regret to inform you "email”
          </p>
          <p className="text-xl text-gray-700 mb-6">
            That wasn't the last rejection. However, over time, interviews started to feel a little easier. I poured hours into learning — reading what recruiters look for, watching endless YouTube videos, and studying how top candidates perform. Eventually, it paid off. I landed a sales role at one of the biggest airlines in the world.
          </p>
          <p className="text-xl text-gray-700 mb-6">
            But I will never forget how tough those first steps were. I kept thinking, <em>“What if I had a safe space to practice? What if there was something that actually helped me grow — not just another article or guru video?”</em>
          </p>
          <p className="text-xl text-gray-700 mb-6">
            That’s when the idea for PrepMate started taking shape. I wanted to build the resource I never had — a tool to help people who feel lost, overwhelmed, or just need a little support to feel confident walking into their next opportunity.
          </p>
          <p className="text-xl text-gray-700 mb-6">
            I’ve lived through the stress and uncertainty of trying to kickstart a career. And I’ve realized that no one should have to go through it alone. That’s why I created PrepMate — not just for students, but for anyone, at any stage of their career.
          </p>
          <p className="text-xl text-gray-700 font-semibold">
            I built this for the community. For the underdogs. For the dreamers. For you. <br />
            And that’s why PrepMate will always be free.
          </p>
        </div>
      </section>
    </><section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why use AI for Interview Preparation?
          </h2>
          <h3 className="text-4xl font-semibold text-gray-900 mb-6">
            Overview
          </h3>
          <p className="text-xl text-black mb-6">
          Using AI for interview preparation offers significant benefits, such as personalized feedback through mock interviews and resume evaluation tools. These features help candidates feel more prepared and confident during job interviews. The article highlights how AI can customize practice sessions, refine resumes, and assess performance to target individual areas of improvement—making it an essential tool for succeeding in today’s competitive job market.
          </p>
          <div className="text-gray-900 mb-6">
  <h3 className="text-3xl font-semibold mb-4">Key Advantages of AI in Interview Preparation</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li className='text-xl text-black mb-6'>
      <strong>Tailored Practice Sessions:</strong> AI-powered tools analyze your performance and customize interview questions based on your role and requirements, making every session effective.
    </li>
    <li className='text-xl text-black mb-6'>
      <strong>Instant Feedback:</strong> With real-time feedback on communication skills, technical knowledge, problem solving, cultural fit and confidence and clarity, candidates can immediately understand their strengths and weaknesses, accelerating their progress.
    </li>
    <li className='text-xl text-black mb-6'>
      <strong>Confidence Building:</strong> Practicing in a safe, simulated environment helps to reduce performance anxiety, allowing users to walk into real interviews feeling more prepared and self-assured.
    </li>
    <li className='text-xl text-black mb-6'>
      <strong>Time-Efficient Preparation:</strong> AI adapts to your schedule and learning pace, making interview prep more efficient for students, job seekers, and working professionals alike.
    </li>
    <li className='text-xl text-black mb-6'>
      <strong>Scalability and Accessibility:</strong> Whether you're preparing for your first job or your tenth, AI tools are available anytime, anywhere—providing support to anyone who needs it.
    </li>
  </ul>
</div>

        </div>
        <div className="w-full flex justify-center mt-5">
    <Link href="/sign-up" passHref>
        <button className="px-8 py-3 flex-col bg-secondary hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
          Get Started
        </button>
      </Link>
      </div>
      </section></>

  );
};

export default AboutUs;