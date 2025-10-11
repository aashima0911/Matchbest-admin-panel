"use client";
import Link from "next/link";
export default function CareerCard({ career }) {
    return (
        <div className="flex flex-col h-full bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-lg border border-white/10 hover:border-purple-500/60 transition-all duration-300 overflow-hidden group">
            {/* Image */}
            {career?.imageURL?.imageURL && (
                <img src={career.imageURL.imageURL} alt={career.jobTitle} className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            )}
            <div className="flex flex-col flex-1 p-4 sm:p-6 gap-2">
                {/* Job Title */}
                <h1 className="font-extrabold text-lg sm:text-2xl text-purple-200 mb-1 group-hover:text-purple-400 transition-colors">{career?.jobTitle}</h1>
                {/* Description */}
                <p className="text-gray-200 text-xs sm:text-sm mb-2 line-clamp-2 min-h-[2.5em]">{career?.description?.substring(0, 100)}...</p>
                {/* Location and Department */}
                {/* <div className="flex flex-wrap gap-2 mb-2">
                    {career?.location && <span className="bg-purple-900/30 text-purple-200 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">{career.location}</span>}
                    {career?.departmentId && <span className="bg-pink-900/30 text-pink-200 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">{career.departmentId}</span>}
                </div> */}
                {/* Dates */}
                {/* <div className="text-xs text-gray-400 mb-2">
                    <span>Posted: {career?.postedDate}</span>{career?.expiryDate && <> | <span>Expires: {career.expiryDate}</span></>}
                </div> */}
                {/* Requirements (optional, short preview) */}
                {/* {career?.requirements && career.requirements.length > 0 && (
                    <div className="text-xs text-gray-300 mb-2">
                        <span>Requirements: {career.requirements.replace(/[#*`]/g, '').substring(0, 80)}...</span>
                    </div>
                )} */}
                {/* Apply Now Button as Link */}
                <div className="mt-auto pt-2">
                    <Link href={`/careers/${career.slugs ? career.slugs[0] : career.jobSlug}`}>
                        <button className="w-full px-3 sm:px-4 py-2 rounded-xl bg-[#5f12c6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-colors text-base sm:text-lg cursor-pointer">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
} 