import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function PatientStories() {
  const testimonials = [
    {
      review:
        "The level of care I received was exceptional. From the nursing staff to the specialists, everyone treated me with kindness and professionalism throughout my recovery.",
      name: "Mr. Rajesh Kumar",
    },
    {
      review:
        "The emergency department responded quickly and the doctors explained every step of my treatment. I felt safe and well cared for.",
      name: "Mrs. Priya Sharma",
    },
    {
      review:
        "The hospital is clean, modern and the pharmacy services were extremely convenient. My entire experience was smooth and stress-free.",
      name: "Mr. Aman Verma",
    },
    {
      review:
        "I underwent orthopedic surgery here and the results exceeded my expectations. The medical team was highly experienced.",
      name: "Mr. Sunil Yadav",
    },
    {
      review:
        "Excellent facilities, caring doctors, and supportive staff. I highly recommend this hospital for quality healthcare.",
      name: "Mrs. Neha Gupta",
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#111] md:text-5xl">
            Patient Stories
          </h2>

          <p className="mt-4 text-gray-600">
            Hear what our patients say about their experience.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-[260px] flex-col justify-between border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div>
                  <span className="text-5xl leading-none text-[#c59b45]">
                    “
                  </span>

                  <p className="-mt-4 italic leading-8 text-gray-600">
                    {item.review}
                  </p>
                </div>

                <h4 className="mt-8 text-lg font-semibold text-[#111]">
                  — {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PatientStories;