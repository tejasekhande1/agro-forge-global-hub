import {Badge} from "@/components/ui/badge.tsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Building2} from "lucide-react";

const CompanyOverview = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Who We Are
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-foreground mb-4">
                        Company Overview
                    </h1>
                    <p className="text-sm sm:text-sm text-muted-foreground max-w-3xl mx-auto">
                        Learn more about Enjo-Sak Global’s journey, expertise, and vision to become your trusted global
                        export partner.
                    </p>
                </div>
            </section>

            {/* Overview Content */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Company Overview */}
                    <div className="text-aligned">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">About Enjo-Sak Global</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-2">
                            Enjo-Sak Global Private Limited is a dynamic and forward-looking export company based in
                            India, committed to connecting
                            high-quality Indian products with global markets. We specialize in the sourcing, processing,
                            and export of a wide range
                            of agro-based and industrial products, including spices, food ingredients, herbal powders,
                            and engineering components.
                            <br/><br/>
                            With a deep-rooted commitment to quality, transparency, and long-term partnerships, Enjo-Sak
                            Global bridges the gap between
                            Indian manufacturers and international buyers. Our strong network of trusted suppliers and
                            producers across India allows
                            us to ensure timely delivery, competitive pricing, and adherence to international quality
                            standards.
                            <br/><br/>
                            Our mission is to create sustainable trade relationships by delivering excellence, fostering
                            trust, and constantly evolving
                            with market needs. At Enjo-Sak Global, we take pride in being a reliable export partner for
                            businesses in Africa, the
                            Middle East, Southeast Asia, and beyond.
                        </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6 pt-6">
                        <Card className="border border-green-200 hover:shadow-md transition duration-200">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <Building2 className="text-green-600"/>
                                <CardTitle className="text-base text-green-800">Diversified Product
                                    Portfolio</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                From spices and herbal powders to engineering components, we offer a comprehensive
                                selection of quality exports.
                            </CardContent>
                        </Card>
                        <Card className="border border-green-200 hover:shadow-md transition duration-200">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <Building2 className="text-green-600"/>
                                <CardTitle className="text-base text-green-800">Global Presence</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Serving clients across Africa, the Middle East, Southeast Asia, and beyond with
                                commitment and integrity.
                            </CardContent>
                        </Card>
                        <Card className="border border-green-200 hover:shadow-md transition duration-200">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <Building2 className="text-green-600"/>
                                <CardTitle className="text-base text-green-800">Ethical & Transparent</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                We ensure ethical sourcing and transparent trade practices backed by long-term
                                partnerships.
                            </CardContent>
                        </Card>
                        <Card className="border border-green-200 hover:shadow-md transition duration-200">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <Building2 className="text-green-600"/>
                                <CardTitle className="text-base text-green-800">Sustainable Growth</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                We are committed to sustainability, innovation, and contributing positively to global
                                development.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyOverview;
