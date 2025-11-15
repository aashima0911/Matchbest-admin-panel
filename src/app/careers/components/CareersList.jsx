import { getAllCareers } from '../../lib/firebase/careers';
import CareerCard from './CareerCard';
import { Suspense } from 'react';

async function fetchCareers() {
  try {
    const careers = await getAllCareers();
    return careers;
  } catch (error) {
    console.error('Failed to fetch careers:', error);
    return [];
  }
}

function CareersGrid({ careers }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {careers && careers.length > 0 ? (
          careers.map((career) => (
            <CareerCard career={career} key={career.id} />
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-gray-600 py-20">
            <h3>Careers Not Available!</h3>
          </div>
        )}
      </div>
    </div>
  );
}

function CareersSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="h-64 bg-gray-800 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export default async function CareersList() {
  const careers = await fetchCareers();

  return (
    <section className="pb-28 pt-10 sm:pt-0 px-4">
      <div className="relative rounded-2xl w-full h-28 md:h-32 flex text-[#6d419f] mb-1 shadow-md items-center justify-center text-center">
        <div className="relative px-1">
          <h1 className="text-4xl md:text-5xl font-bold pb-2">Explore Careers</h1>
        </div>
      </div>

      <Suspense fallback={<CareersSkeleton />}>
        <CareersGrid careers={careers} />
      </Suspense>
    </section>
  );
}
