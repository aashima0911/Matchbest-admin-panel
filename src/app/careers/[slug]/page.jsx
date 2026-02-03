import Link from 'next/link';
import { getAllCareers, getCareerBySlug } from '../../lib/firebase/careers';
import Image from 'next/image';
import DarkMarkdownRenderer from '../../components/DarkMarkdownRenderer';
import ApplicationForm from './ApplicationForm';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `https://matchbest.ai/Career`,
    },
  };
}

// Generate static params for all careers
export async function generateStaticParams() {
  try {
    const careers = await getAllCareers();
    return careers.map((career) => ({
      slug: career.jobSlug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for each career post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const career = await getCareerBySlug(slug);
    return {
      title: career?.jobTitle || 'Job Opening',
      description: career?.description || 'Join our team and help build the future',
    };
  } catch (error) {
    return {
      title: 'Job Opening',
      description: 'Join our team',
    };
  }
}



export default async function CareerDetailsPage({ params }) {
  const { slug } = await params;

  try {
    const career = await getCareerBySlug(slug);

    if (!career) {
      notFound();
    }

    return (
      <div className="bg-gradient-to-b from-[#0F0722] to-black text-white pt-24 pb-24 sm:pt-32 sm:pb-32 min-h-screen">
        <div className="max-w-2xl mx-auto p-6">
          {/* Job Details Section */}
          <div className="space-y-4 mb-8">
            {/* {career.imageURL?.imageURL && (
              <div className="flex flex-col items-center mb-6">
                <Image
                  src={career.imageURL.imageURL}
                  alt={career.jobTitle}
                  width={250}
                  height={200}
                  className="w-52 h-42 md:w-64 md:h-54 lg:w-72 lg:h-72 rounded-full shadow-2xl border-4 border-purple-500/20"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkny5VzSLvSY4bYRbJcb5xLXG9jhRxMEgMQsLGCBVFfyOMKhEANwaPjOSUJMgTaWgAA=="
                />
              </div>
            )} */}

            <div>
              <h1 className="text-3xl font-bold text-purple-200 mb-2">{career.jobTitle}</h1>
            </div>

            <div>
              <span className="font-semibold text-purple-300">Short Description:</span>
              <p className="ml-2 mt-1 text-gray-200">{career.description}</p>
            </div>

            <div>
              <span className="font-semibold text-purple-300">Department:</span>
              <span className="ml-2">{career.departmentId}</span>
            </div>

            <div>
              <span className="font-semibold text-purple-300">Location:</span>
              <span className="ml-2">{career.location}</span>
            </div>

            <div>
              <span className="font-semibold text-purple-300">Job Posted Date:</span>
              <span className="ml-2">{career.postedDate}</span>
            </div>

            <div>
              <span className="font-semibold text-purple-300">Expiry Date:</span>
              <span className="ml-2">{career.expiryDate}</span>
            </div>

            {career.requirements && (
              <div>
                <span className="font-semibold text-purple-300">Job Requirements:</span>
                <div className="ml-2 text-gray-200 mt-2">
                  <DarkMarkdownRenderer content={career.requirements} />
                </div>
              </div>
            )}
          </div>

          {/* Application Form */}
          <ApplicationForm jobTitle={career.jobTitle} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading career post:', error);
    notFound();
  }
}
