import {Badge} from "@/components/ui/badge.tsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Building2} from "lucide-react";

const OurGroup = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Our Legacy
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-foreground mb-4">
                        Our Group
                    </h1>
                    <p className="text-sm sm:text-sm text-muted-foreground max-w-3xl mx-auto">
                        Enjo-Sak Global Pvt. Ltd. is a proud member of the ENJO-CHEM Group — a trusted name in
                        agri-inputs and agrochemicals for over 15 years.
                    </p>
                </div>
            </section>

            {/* Group Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="text-aligned">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">About ENJO-CHEM Group</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                            The ENJO-CHEM Group has been a pioneer in the agrochemical and agri-input industry for over
                            15 years. With a focus on innovation, quality, and sustainable agriculture, the group has
                            built a solid reputation across India and globally. Its companies offer a diverse range of
                            solutions — from specialty biostimulants and micronutrients to crop protection products and
                            global agri-trade services.
                            <br/><br/>
                            Enjo-Sak Global Pvt. Ltd., as the export arm of the group, extends the group’s commitment to
                            quality and trust to international markets by exporting top-tier agri-commodities, spices,
                            and dehydrated foods.
                        </p>
                    </div>

                    {/* Group Companies */}
                    <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">🌿 Group Companies:</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        <Card className="border border-green-200 hover:shadow-md transition duration-200">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <Building2 className="text-green-600"/>
                                <CardTitle className="text-base text-green-800">
                                    Enjo-Chem Agrochemical Industries
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                A 15-year-old leader in agrochemicals and crop protection solutions. </CardContent>
                        </Card>

                        <Card className="border border-green-200 hover:shadow-md transition duration-200">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <Building2 className="text-green-600"/>
                                <CardTitle className="text-base text-green-800">
                                    Enjo-Chem Crop Care
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Focused on biostimulants and micronutrient-based products for sustainable
                                agriculture. </CardContent>
                        </Card>

                        <Card className="border border-green-200 hover:shadow-md transition duration-200">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <Building2 className="text-green-600"/>
                                <CardTitle className="text-base text-green-800">
                                    Enjo-Sak Global Pvt. Ltd.
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                The export division, specializing in agri-commodities, spices, and dehydrated products
                                for international markets. </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurGroup;