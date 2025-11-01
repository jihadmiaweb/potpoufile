import React from "react"; // Explicit React import is good practice
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules directly from 'swiper/modules'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// NOTE: Swiper styles must be imported in your root/main file or here:
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// --- 1. TypeScript Interface ---
interface Testimonial {
    img: string;
    name: string;
    text: string;
}

// --- 2. Testimonial Card Component (Correct TS/React syntax) ---
// Correctly type the functional component and its props
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <motion.figure
            className="flex flex-col md:flex-row items-center gap-6 p-8 w-full border border-gray-100 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:ring-2 hover:ring-indigo-200"
            role="figure" // Explicitly setting the ARIA role
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex-shrink-0">
                <img
                    src={testimonial.img}
                    alt={`Portrait of ${testimonial.name}, client testimonial`} // Highly descriptive alt text
                    // Adding aspect-square for guaranteed shape consistency
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-indigo-400 shadow-inner aspect-square"
                    loading="lazy" // Improves initial page load performance
                />
            </div>

            <blockquote className="flex-1 text-center md:text-left">
                <p className="text-base italic text-gray-700 leading-relaxed mb-4">
                    **"{testimonial.text}"**
                </p>

                <figcaption className="mt-2">
                    <cite className="font-extrabold text-lg not-italic bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                        — {testimonial.name}
                    </cite>
                </figcaption>
            </blockquote>
        </motion.figure>
    );
};


// --- Service Data (using distinct images for clarity) ---
const testimonials: Testimonial[] = [
    {
        img: "/imgas/t2.jpg",
        name: "DAVID SADEN",
        text: "The speed and quality of development were truly exceptional. He delivered a seamless frontend integration that exceeded all our expectations.",
    },
    {
        img: "/imgas/t1.jpg",
        name: "JESSICA MIA",
        text: "A highly collaborative professional. Our complex backend requirements were met with clean, scalable code and excellent communication throughout the project lifecycle.",
    },
    {
        img: "/imgas/t2.jpg",
        name: "ALICE SMITH",
        text: "Another testimonial example. User praising the services and workflow and recommending him for any demanding web projects.",
    },
    {
        // Re-using an image for the fourth one, but using a different name
        img: "/imgas/t1.jpg",
        name: "MICHAEL CHEN",
        text: "Truly excellent work on the database design. The system performs flawlessly even under heavy load.",
    },
];

// --- 3. Main Testimonials Component (Renamed for clarity) ---
function AboutMe() {
    return (
        <section id="testimonials" className="py-20 w-full px-6 md:px-12 bg-gray-50">

            {/* Heading */}
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                    WHAT CLIENTS SAY
                </h1>
                <p className="pt-2 max-w-xl mx-auto text-gray-600 text-base mt-4">
                    Hearing directly from clients is the best measure of success. Their feedback drives continuous improvement in my work and service.
                </p>
            </header>

            {/* Swiper Slider Container */}
            <div className="max-w-4xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    // Configuring custom navigation buttons
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                        disabledClass: 'opacity-50 cursor-not-allowed', // Add a class for disabled state
                    }}
                    pagination={{
                        clickable: true,
                        // Add class for better visibility/styling of dots
                        bulletActiveClass: 'bg-indigo-600',
                    }}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx} className="pb-16 pt-4">
                            <TestimonialCard testimonial={t} />
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Buttons (Tailwind CSS applied directly) */}
                    <div className="swiper-navigation-custom mt-8 flex justify-center space-x-4 relative z-10">
                        <button
                            aria-label="Previous testimonial"
                            className="swiper-button-prev-custom p-3 rounded-full bg-white shadow-lg hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            &larr;
                        </button>
                        <button
                            aria-label="Next testimonial"
                            className="swiper-button-next-custom p-3 rounded-full bg-white shadow-lg hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            &rarr;
                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

// Export the component with the correct, descriptive name
export default AboutMe;