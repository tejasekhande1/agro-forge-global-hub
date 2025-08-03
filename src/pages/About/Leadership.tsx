import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Users} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";

const Leadership = () => {

    const advisors = [
        {
            name: 'Mr. Arun M. Kotame',
            title: 'Agro Industry Specialist',
            description:
                'With over 25 years of experience in agricultural transformation, Mr. Kotame has worked extensively with farming cooperatives, agri-business startups, and rural development initiatives. His vision has helped bridge the gap between traditional practices and modern technology in the agri-value chain.',
            image: '/images/arun-kotame.jpg',
        },
        {
            name: 'Mr. Vijay J. Shirke',
            title: 'Engineering & Automation Expert',
            description:
                'A veteran in automotive engineering and Special Purpose Machine (SPM) design, Mr. Shirke brings 25+ years of innovation in automation systems and manufacturing process optimization. His contributions have significantly improved efficiency and quality standards across multiple sectors.',
            image: '/images/vijay-shirke.jpg',
        },
        {
            name: 'Aniket A. Kotame',
            title: 'Director, Enjo-Sak Global Pvt. Ltd.\nCEO, Enjo-Chem Group.',
            description: 'Aniket holds a B.Tech in Chemical Engineering from VIT Pune. With a passion for global commerce and sustainable trade practices, he leads operational excellence and strategic planning at Enjo-Sak Global. His scientific acumen and problem-solving mindset play a key role in ensuring quality, compliance, and customer satisfaction across all our international trade verticals.\n' +
                'He also serves as the CEO of Enjo-Chem Group, a leading agrochemical manufacturer in India. Under his leadership, the company has empowered and served over 1 lakh farmers—and continues to grow—by delivering innovative, high-quality solutions in crop care, specialty fertilizers, and sustainable agriculture.',
            image: '/images/aniket-kothame.jpg',
        },
        {
            name: 'Mayur Vijay Shirke',
            title: 'Director, Enjo-Sak Global Pvt. Ltd.',
            description: 'Mayur holds a B.Tech in Mechatronics and Automation Engineering from MIT ADT University, Pune. As a forward-thinking entrepreneur with a deep understanding of industrial systems and global trade, he plays a key role in shaping the vision and strategic direction of Enjo-Sak Global. His leadership is driven by a strong foundation in engineering, automation, and cross-border business development.\n' +
                '\n' +
                'In addition to his role at Enjo-Sak, Mayur also serves as the Development and Marketing Head at Varad Group, a leading manufacturer of Special Purpose Machines (SPMs), automotive components, and automation solutions. His combined experience across both organizations enables him to bridge technical innovation with market demands, ensuring customer satisfaction and long-term growth. With a passion for international collaboration, he continues to explore opportunities to position Indian manufacturing on the global map.',
            image: '/images/mayur-shirke.jpg',
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Our Advisory Board
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4">
                        Leadership That Inspires Excellence
                    </h1>
                    <p className="text-sm sm:text-sm text-muted-foreground max-w-3xl mx-auto">
                        Decades of industry expertise. Strategic guidance rooted in innovation, integrity, and excellence.
                    </p>
                </div>
            </section>

            {/* Advisory Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {advisors.map((advisor, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-2xl overflow-hidden"
                            >
                                {/* Image */}
                                <div className="h-80 w-full overflow-hidden">
                                    <img
                                        src={advisor.image}
                                        alt={advisor.name}
                                        className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <CardHeader className="p-0 mb-3">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center">
                                                <Users className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{advisor.name}</CardTitle>
                                                <p className="text-sm text-primary font-medium">
                                                    {advisor.title.split('\n').map((line, idx) => (
                                                        <span key={idx}>
                                                            {line}
                                                            <br/>
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-0 pt-4">
                                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                                            {advisor.description}
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Leadership;