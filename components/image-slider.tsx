'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
    images: string[];
    name: string;
    autoPlay?: boolean;
    interval?: number;
}

export default function ImageSlider({
    images,
    name,
    autoPlay = true,
    interval = 10000,
}: ImageSliderProps) {
    const [current, setCurrent] = useState(0);

    // Auto slide
    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            nextSlide();
        }, interval);
        return () => clearInterval(timer);
    }, [current, autoPlay]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl ">
            {/* Images */}
            <div className="relative h-[400px] md:h-[550px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute inset-0 "
                    >
                        <Image
                            src={images[current]}
                            alt={`${name}`}
                            fill
                            className="object-top sm:object-fill rounded-2xl "
                            priority
                        />


                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
            >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
            >
                <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-4">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-[#0084b2]' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
