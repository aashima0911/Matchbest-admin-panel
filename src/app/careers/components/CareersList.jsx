"use client";
import { getAllCareers } from '../../lib/firebase/careers';
import { useEffect, useState } from 'react';
import CareerCard from './CareerCard';
import Link from "next/link";

export default function CareersList() {
    const [loading, setLoading] = useState(false);
    const [careers, setCareers] = useState(false);

    async function fetchCareers() {
        setLoading(true);
        const jobs = await getAllCareers();
        setCareers(jobs);
        setLoading(false);
    }
    useEffect(() => {
        fetchCareers();
    }, []);

    if (!loading && !careers) {
        return (
            <div className="text-center text-lg text-gray-600 h-[50vh] flex items-center justify-center pb-20">
                <h3>Careers Not Available!</h3>
            </div>
        );
    }

    return (
        <section className="pb-28 pt-10 sm:pt-0 px-4">
            <div className="relative rounded-2xl w-full h-28 md:h-32 flex text-[#6d419f] mb-1 shadow-md items-center justify-center text-center ">
                <div className="relative px-1">
                    <h1 className="text-4xl md:text-5xl font-bold pb-2 ">Explore Careers</h1>
                </div>
            </div>
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div key={idx} className="h-64 bg-gray-800 rounded-xl animate-pulse" />
                    ))}
                </div>
            )}
            {careers && (
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {careers.map((career) => (
                            <CareerCard career={career} key={career.id} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
} 