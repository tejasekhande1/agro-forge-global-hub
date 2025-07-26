import {Badge} from "@/components/ui/badge.tsx";

const Vision = () => {
    const missionPoints = [
        'Deliver a comprehensive range of high-quality agricultural commodities, spices, millets, and engineering goods to international markets.',
        'Foster trusted partnerships with farmers and manufacturers, ensuring ethical sourcing and transparent business practices.',
        'Promote innovation and continuous improvement, meeting global standards and exceeding customer expectations.',
        'Empower communities through sustainable practices, contributing positively to both local and global development.',
        'Establish Enjo-Sak as the preferred export partner for clients seeking integrity, expertise, and high-performance solutions.',
    ];
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        About Enjo-Sak
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4">
                        Our Vision & Mission
                    </h1>
                    <p className="text-sm sm:text-sm text-muted-foreground max-w-3xl mx-auto">
                        Discover the purpose, passion, and principles that power Enjo-Sak Global’s global trade
                        excellence.
                    </p>
                </div>
            </section>

            {/* Vision & Mission Content */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Vision */}
                    <div className="text-aligned">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">Vision</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-2">
                            Enjo-Sak Global Private Limited envisions becoming a globally renowned leader in exporting agricultural products,
                            engineering goods, spices, and millets. We aspire to bridge India’s rich agricultural and manufacturing heritage
                            with international markets by ensuring the highest standards of quality, innovation, and reliability.
                            <br /><br />
                            Our vision is to foster enduring partnerships with farmers, manufacturers, and overseas clients, emphasizing
                            ethical sourcing and transparent business practices. We strive to drive sustainable growth by promoting
                            environmentally friendly methods and community empowerment.
                            <br /><br />
                            Through a commitment to excellence, advanced solutions, and customer-centric approaches, Enjo-Sak aims to redefine
                            global export standards. We dedicate ourselves to inspiring trust, building long-lasting relationships, and
                            contributing positively to society and global food security.
                        </p>
                    </div>

                    {/* Mission */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">Mission</h2>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground text-sm md:text-base">
                            {missionPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Vision;