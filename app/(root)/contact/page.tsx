"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://formsubmit.co/dylancychua@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-light-100">
      <main className="flex-grow flex items-center justify-center p-4">
        <section className="w-full max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-sm">
          
          <h1 className="text-3xl font-bold text-center text-dark-100 mb-8">
            Contact Us
          </h1>

          {submitted ? (
            <div className="text-center space-y-6">
              <p className="text-xl text-dark-100 font-medium">
                Your message has been sent! We'll get back to you soon.
              </p>
              <Button
                onClick={() => router.push("/home")}
                className="btn-secondary px-8 py-3 text-lg"
              >
                Back to Home
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Form fields remain the same */}
              <div>
                <label className="block text-lg font-medium text-dark-100 mb-2">
                  Your Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full p-3 border border-light-400 rounded-lg text-dark-200 text-lg"
                />
                {errors.name && (
                  <p className="text-destructive-100 mt-1">{errors.name.message as string}</p>
                )}
              </div>

              <div>
                <label className="block text-lg font-medium text-dark-100 mb-2">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format"
                    }
                  })}
                  type="email"
                  className="w-full p-3 border border-light-400 rounded-lg text-dark-200 text-lg"
                />
                {errors.email && (
                  <p className="text-destructive-100 mt-1">{errors.email.message as string}</p>
                )}
              </div>

              <div>
                <label className="block text-lg font-medium text-dark-100 mb-2">
                  Your Message
                </label>
                <textarea
                  {...register("message", { required: "Message cannot be empty" })}
                  className="w-full p-3 border border-light-400 rounded-lg h-40 text-dark-200 text-lg"
                />
                {errors.message && (
                  <p className="text-destructive-100 mt-1">{errors.message.message as string}</p>
                )}
              </div>

              <div className="flex flex-col space-y-4">
                <Button type="submit" className="w-full btn-primary py-4 text-lg">
                  Send Message
                </Button>
                <Button
                  onClick={() => router.push("/")}
                  className="btn-secondary py-4 text-lg"
                >
                  Back to Home
                </Button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
};

export default ContactPage;