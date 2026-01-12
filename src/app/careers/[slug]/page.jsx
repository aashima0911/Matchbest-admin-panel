import Link from 'next/link';
import { getAllCareers, getCareerBySlug } from '../../lib/firebase/careers';
import Image from 'next/image';
import DarkMarkdownRenderer from '../../components/DarkMarkdownRenderer';
import ApplicationForm from './ApplicationForm';
import { notFound } from 'next/navigation';

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
    const title = career?.jobTitle || 'Job Opening';
    const description = career?.description || 'Join our team and help build the future of technology';
    const keywords = `${title}, ${career?.departmentId || 'tech'}, ${career?.location || 'remote'}, software development, MatchBest Group, career opportunity`;
    const imageUrl = 'https://matchbest.ai/assets/og-image.jpg'; // Could be customized per career if images are available

    return {
      title: `${title} | Careers at MatchBest Group`,
      description: description,
      keywords: keywords,
      alternates: {
        canonical: `https://matchbest.ai/careers/${slug}`,
      },
      openGraph: {
        title: `${title} | Careers at MatchBest Group`,
        description: description,
        url: `https://matchbest.ai/careers/${slug}`,
        siteName: 'MatchBest Group',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `${title} - MatchBest Group Careers`,
          },
        ],
        locale: 'en_US',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | Careers at MatchBest Group`,
        description: description,
        images: [imageUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      other: {
        'job:location': career?.location || 'Multiple Locations',
        'job:department': career?.departmentId || 'Technology',
        'job:posted_date': career?.postedDate || undefined,
        'job:expiry_date': career?.expiryDate || undefined,
      },
    };
  } catch (error) {
    return {
      title: 'Job Opening | MatchBest Group Careers',
      description: 'Explore exciting career opportunities at MatchBest Group. Join our team of innovators working on cutting-edge technology.',
      keywords: 'jobs, careers, software development, MatchBest Group, tech jobs',
      openGraph: {
        title: 'Job Opening | MatchBest Group Careers',
        description: 'Explore exciting career opportunities at MatchBest Group. Join our team of innovators working on cutting-edge technology.',
        url: `https://matchbest.ai/careers/${slug}`,
        siteName: 'MatchBest Group',
        images: [
          {
            url: 'https://matchbest.ai/assets/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'MatchBest Group Careers',
          },
        ],
        locale: 'en_US',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Job Opening | MatchBest Group Careers',
        description: 'Explore exciting career opportunities at MatchBest Group. Join our team of innovators working on cutting-edge technology.',
        images: ['https://matchbest.ai/assets/og-image.jpg'],
      },
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
