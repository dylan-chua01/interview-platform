'use client';

import React, { useState } from 'react';
import { Search, Mic, MessageCircle, Speech, Quote, Star } from "lucide-react";
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 mt-35 relative bg-white">
    {/* Background Map */}
    <div className="hero-map" />

    {/* Content - Left Side */}
    <div className="relative z-10 flex-1">
      <p className='text-dark-100 font-semibold text-4xl'>PrepMate Interview Coach</p>
      <br />
      <h1 className="text-6xl font-bold text-primary-100 inline">
        Make your <span className="text-6xl font-bold" style={{ color: '#7889e4' }}>dream into reality.</span>
      </h1>
      <br /><br />
      <p className="text-lg text-muted-foreground text-primary-100 font-semibold">
        Practice interview questions customized for you and <br />receive real-time feedback from your personal AI Interview Coach.
      </p>
      <Link href="/sign-up" passHref>
        <button className="mt-10 px-8 py-3 flex-col bg-secondary hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
          Get PrepMate
        </button>
      </Link>
    </div>

    {/* Image - Right Side */}
    <div className="hidden xl:flex flex-1 relative items-center justify-center">
      <Image
        src="/people.png"
        alt="People using PrepMate"
        width={400}
        height={300}
        className="object-contain z-10"
      />
      {/* Optional decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
    </div>
  </section>

      <section className="w-full flex justify-center py-10 bg-[#C7D0EE]">
        <div className="text-center">
          <p className='text-dark-100 font-semibold text-4xl'>How can we help?</p>
        </div>
      </section>

      {/* Role Selection */}
      <section className="max-container padding-container flex flex-col py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 py-10 bg-[#C7D0EE]">
        <div className="flex flex-col space-y-4 w-96 relative z-10 ml-60">
          
        <div className="relative w-[400px] p-4 bg-white shadow-[0_0_50px_#4A90E2] rounded-xl ml-25">
          <input
            type="text"
            value="Full Stack Developer"
            className="w-full px-4 py-3 border rounded-md focus:outline-none text-gray-700"
            readOnly
          />
          <Search className="absolute top-6 right-6 text-gray-400 mt-2" size={20} />
        </div>

          <div className="relative w-[400px] p-4 bg-white shadow-[0_0_50px_#4A90E2] rounded-xl ml-25">
            <button className="w-full px-4 py-3 text-left text-secondary">Mix - Behavioural and Technical</button>
            <button className="w-full px-4 py-3 text-left text-secondary">Entry Level</button>
            <button className="w-full px-4 py-3 text-left text-secondary">Javascript</button>
            <button className="w-full px-4 py-3 text-left text-secondary">10 Questions</button>
            <button className="w-full px-4 py-3 text-left text-secondary">Canva</button>
            
            
          </div>
        </div>

   
        <div className="w-full flex flex-col gap-8 ml-40"> {/* Changed to column layout */}
        {/* First section */}
        <div className="flex items-start gap-4">
          <Speech className="text-blue-600 mt-1 flex-shrink-0" size={24} /> 
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tell us more</h2>
            <p className="text-secondary max-w-lg font-semibold">
            Tell us the role you're applying for, from entry-level positions to executive roles. 
              Our AI will tailor interview questions to help you succeed.
            </p>
          </div>
        </div>

        
        <div className="flex items-start gap-4">
          <Speech className="text-blue-600 mt-1 flex-shrink-0" size={24} /> 
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Choose your Role</h2>
            <p className="text-secondary max-w-lg font-semibold">
            Tell us more about the role you're applying to:<br></br>
              1. What type of interview do you want to practice?<br></br>
              2. What is your experience level?<br></br>
              3. What technologies e.g. Java, HTML, CSS do you want to cover? or any others?<br></br>
              4. How many questions would you like PrepMate to generate for you?<br></br>
              5. What company are you working for?     
            </p>
          </div>
        </div>
      </div>

      </section>

      <section className="max-container padding-container py-10 pb-32 md:gap-28 lg:py-20 border-2 bg-white">
  
  {/* Full-Width Centered Title */}
  <div className="w-full text-center mb-16 text-gray-900">
    <h2 className="text-4xl font-bold text-gray-900">Practice Interview Questions</h2>
    <p className="text-lg text-muted-foreground mt-2">
      Sharpen your skills industry-specific interview questions.
    </p>
  </div>

  {/* Main Content in Constrained Container */}
  <div className="flex flex-row justify-between items-start w-full max-w-5xl mx-auto gap-12">
    
    {/* Left Side */}
    <div className="flex flex-col space-y-4 max-w-md">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 whitespace-nowrap">
        <Speech size={24} className="text-blue-600" /> Practice your tailored questions
      </h2>
      <p className="text-dark-100">
        PrepMate’s AI adapts to your answers in real time, guiding you with smart follow-up questions to deepen your responses and sharpen your interview skills.
      </p>
    </div>

    {/* Right Side */}
    <div className="flex flex-col space-y-4 w-[450px]">
  <div className="flex items-center justify-start bg-white shadow-md rounded-xl p-6 space-x-4 border">
    <Mic className="text-blue-600 flex-shrink-0" size={40} />
    <p className="text-gray-900 font-semibold">
      Tell me about a project, even a small one, where you had to work independently.<br />
      What were the biggest obstacles you faced, and how did you manage your time and resources to complete it?
    </p>
  </div>
    </div>

  </div>
</section>

{/* Feedback Section */}
<section className="max-container padding-container py-10 pb-32 md:gap-28 lg:py-20 border-2 bg-[#BCD3EE]">
<div className="w-full text-center mb-16 text-gray-900">
    <h2 className="text-4xl font-bold text-gray-900">Receive Instant Feedback</h2>
    <p className="text-lg text-muted-foreground mt-2">
    You'll receive your interview report, complete with detailed analytics, to help you identify strengths and areas for improvement
    </p>
  </div>

  <div className="flex flex-row justify-between items-start w-full max-w-5xl mx-auto gap-12">
   {/* Left Side */}

   <div className="flex flex-col space-y-4 max-w-md relative">
  {/* Blue glow behind the clipboard */}
  <div className="absolute inset-0 rounded-lg bg-blue-400 blur-xl opacity-20 -z-10"></div>
  
  {/* Clipboard image */}
  <div className="relative">
    <Image 
      className="drop-shadow-lg" 
      src="/clipboard.png" 
      alt="feedback"
      width={300}
      height={300}
    />
    
    {/* Yellow star with glow */}
    <div className="absolute -top-3 -right-3 animate-bounce mt-20 mr-25" style={{ animationDelay: '0s' }}>
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-70 group-hover:opacity-90 transition-opacity"></div>
        <Star className="text-yellow-400 fill-yellow-400 drop-shadow-lg group-hover:scale-110 transition-transform" size={32} />
      </div>
    </div>
    
    <div className="absolute -top-6 left-1/4 animate-bounce mt-40 ml-5" style={{ animationDelay: '0.2s' }}>
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-70 group-hover:opacity-90 transition-opacity"></div>
        <Star className="text-yellow-400 fill-yellow-400 drop-shadow-lg group-hover:scale-110 transition-transform" size={28} />
      </div>
    </div>
    
    <div className="absolute bottom-2 right-1/4 animate-bounce mb-12 mr-10" style={{ animationDelay: '0.4s' }}>
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-70 group-hover:opacity-90 transition-opacity"></div>
        <Star className="text-yellow-400 fill-yellow-400 drop-shadow-lg group-hover:scale-110 transition-transform" size={24} />
      </div>
    </div>
  </div>
</div>

    {/* Right Side */}
    <div className="flex flex-col space-y-4 w-[450px]">
  <div className="flex items-center justify-start bg-white shadow-md rounded-xl p-6 space-x-4 border">
    <MessageCircle className="text-blue-600 flex-shrink-0" size={40} />
    <p className="text-gray-900 font-semibold">
      Broken Down Into: <br></br>
      1. Communication Skills<br></br>
      2. Technical Knowledge <br></br>
      3. Problem Solving <br></br>
      4. Cultural Fit <br></br>
      5. Confidence and Clarity <br></br>
    </p>
  </div>
  <Button
  className="text-white font-bold bg-[#1E5162] py-8 text-[24px]"
  onClick={() => window.location.href = '/feedback_sample.pdf'}
>
  Sample Report
</Button>
    </div>
</div>
</section>

<section className="max-container padding-container py-10 pb-32 md:gap-28 lg:py-20 border-2 bg-white">

<div className="flex justify-center items-center min-h-[300px] p-6"> 
      <div className="max-w-2xl w-full p-8 bg-light-100 rounded-xl shadow-lg border border-gray-200"> {/* Card container */}
        <div className="flex flex-col items-center text-center"> {/* Centered content */}
          <Quote 
            className="text-blue-600 mb-4" 
            size={28}
          />
          <p className="text-lg text-gray-800 italic mb-6 px-4">
            "PrepMate is what I used to land a job at Cathay Pacific, the 4th best airline in the world. I used it to prepare for interviews and used the feedback to work on my weaknesses."
          </p>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mb-2">
              D
            </div>
            <div>
              <p className="font-semibold text-gray-900">Dylan Chua</p>
              <p className="text-sm text-gray-500 mt-1">Cadet Pilot at Cathay Pacific</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center mt-5">
    <Link href="/sign-up" passHref>
        <button className="px-8 py-3 flex-col bg-secondary hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
          Get Started - It's Free
        </button>
      </Link>
      </div>
</section>



    </div>
  );
};

export default Hero;