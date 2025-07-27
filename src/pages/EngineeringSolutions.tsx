import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Shield,
    Wrench,
    Zap,
    Factory,
    ArrowRight,
} from "lucide-react";

const engineeringServices = [
    {
        icon: Zap,
        title: "Special Purpose Machines (SPMs)",
        description: "Custom-built SPMs for automotive and industrial applications",
    },
    {
        icon: Shield,
        title: "Precision Dies and Toolings",
        description: "Blanking, forming, piercing, and progressive die systems",
    },
    {
        icon: Wrench,
        title: "Automation Systems",
        description: "PLC and robotics integration for automated operations",
    },
    {
        icon: Factory,
        title: "Automotive Parts & Components",
        description: "High-precision parts and tubular components",
    },
    {
        icon: Zap,
        title: "Laser Cutting Services",
        description: "State-of-the-art high-precision laser cutting solutions",
    },
];

const EngineeringSolutions = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Solutions
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4">
                        Precision Engineering Solutions
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        Engineered to meet international standards with customized design,
                        high-precision manufacturing, and automation.
                    </p>
                </div>
            </section>

            {/* Detailed Section with Image */}
            <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group flex flex-col md:flex-row">
                        {/* Left side: Image */}
                        <div className="relative h-80 md:h-auto md:w-1/2 overflow-hidden">
                            <img
                                src="/products/engineering.webp"
                                alt="Engineering Solutions"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <Wrench className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Right side: Description */}
                        <div className="md:w-1/2 flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-2xl text-foreground">
                                    Engineering Solutions
                                </CardTitle>
                                <p className="text-muted-foreground text-lg">
                                    Precision engineered for global standards
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {engineeringServices.map((service, index) => (
                                        <Card
                                            key={index}
                                            className="p-4 hover:shadow-md transition-all duration-300 group cursor-pointer border-l-4 border-l-primary"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all">
                                                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="flex-1">
                          <span
                              className="text-muted-foreground font-medium group-hover:text-primary transition-colors"
                          >
                            {service.title}
                          </span>
                                                </div>
                                                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                                <div className="mt-6 p-6 bg-gradient-to-r from-primary/5 to-green-50 rounded-xl border border-primary/10">
                                    <p className="text-muted-foreground font-medium">
                                        Built to meet global industrial standards, with tailored
                                        design and development.
                                    </p>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default EngineeringSolutions;
