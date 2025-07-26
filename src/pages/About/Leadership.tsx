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
                                <div className="h-64 w-full overflow-hidden">
                                    <img
                                        src={advisor.image}
                                        alt={advisor.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                                                <p className="text-sm text-primary font-medium">{advisor.title}</p>
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