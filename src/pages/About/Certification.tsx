import React from 'react';
import {Badge} from '@/components/ui/badge';

const certifications = [
    {name: 'ISO 9001:2015 CERTIFIED', image: '/certifications/iso-certification.png'},
    {name: 'FSSAI', image: '/certifications/fssai-certification.png'},
    {name: 'APEDA', image: '/certifications/apeda-certification.png'},
    {name: 'SPICE BOARD', image: '/certifications/spice-board-certification.png'},
];

const Certifications = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Awards & Certifications
                    </Badge>
                    <h1 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-foreground mb-4">
                        Recognized for Excellence & Trust
                    </h1>
                    <p className="text-base sm:text-sm max-w-3xl mx-auto">
                        At Enjo-Sak Global, our commitment to quality, sustainability, and food safety has been honored
                        through prestigious awards and globally recognized certifications. These milestones reflect the trust
                        of our customers and the standards we uphold across every process.
                    </p>
                </div>
            </section>


            {/* Certifications Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-6">
                        {certifications.map((cert) => (
                            <div key={cert.name} className="group hover:cursor-pointer">
                                <div
                                    className="bg-white border-2 border-green-200 rounded-xl p-6 hover:bg-green-50 hover:border-green-300 transition-all duration-300 group-hover:scale-105 flex flex-col items-center justify-between shadow-sm w-44 h-48">
                                    <div
                                        className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={`${cert.name} certification`}
                                            className="w-20 h-20 object-contain"
                                            onError={(e) => {
                                                const img = e.currentTarget;
                                                img.style.display = 'none';
                                                const fallback = img.nextElementSibling as HTMLElement;
                                                if (fallback) fallback.style.display = 'block';
                                            }}
                                        />
                                        {/* Optional fallback placeholder */}
                                        {/* <Shield className="h-6 w-6 text-green-600 hidden" /> */}
                                    </div>
                                    <span
                                        className="text-sm text-gray-700 font-medium text-center mt-2 leading-tight line-clamp-2">
                    {cert.name}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;