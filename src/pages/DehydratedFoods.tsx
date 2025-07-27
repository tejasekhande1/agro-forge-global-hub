import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Leaf,
    Clock3,
    HeartPulse,
    Shrink,
    Sandwich,
} from "lucide-react";

const features = [
    {
        icon: Clock3,
        title: "Long Shelf Life",
        description: "Dehydrated foods last significantly longer than fresh products.",
    },
    {
        icon: Sandwich,
        title: "Convenience",
        description: "Quick and easy to use for snacks, cooking, or travel.",
    },
    {
        icon: HeartPulse,
        title: "Nutritional Benefits",
        description:
            "Preserves much of the nutritional value while reducing spoilage.",
    },
    {
        icon: Shrink,
        title: "Space Saving",
        description: "Lightweight and compact for efficient storage.",
    },
];

const subcategories = [
    {
        title: "Dehydrated Vegetables",
        image: "/products/dehydrated-vegetables.jpg",
        examples: "Carrots, beans, okra, onions, tomatoes",
    },
    {
        title: "Dehydrated Fruits",
        image: "/products/dehydrated-fruits.jpg",
        examples: "Mango, pineapple, apple, banana, berries",
    },
    {
        title: "Dehydrated Herbs & Spices",
        image: "/products/dehydrated-herbs.jpg",
        examples: "Mint, coriander, thyme, basil",
    },
    {
        title: "Dehydrated Snacks",
        image: "/products/dehydrated-snacks.jpg",
        examples: "Kale, sweet potato, beetroot chips",
    },
    {
        title: "Dehydrated Powders",
        image: "/products/dehydrated-powders.jpg",
        examples: "Garlic powder, onion flakes, vegetable or fruit powders",
    },
];

const DehydratedFoods = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Product Category
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Dehydrated Foods
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        Nutrient-rich, long-lasting, and convenient — our dehydrated food range is crafted to meet
                        modern demands for health and shelf life.
                    </p>
                </div>
            </section>

            {/* Why Dehydrated Foods */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Why Dehydrated Foods?
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Explore the benefits of choosing dehydrated over fresh or frozen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-orange-50"
                            >
                                <CardContent className="p-6 text-center">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="h-6 w-6 text-white"/>
                                    </div>
                                    <h3 className="font-semibold text-base sm:text-lg mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subcategories Section */}
            <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Explore Our Dehydrated Range
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            A diverse portfolio of dehydrated vegetables, fruits, powders, and more.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {subcategories.map((item, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow overflow-hidden"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground text-sm">
                                        {item.examples}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DehydratedFoods;
