import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dryFruitsData = [
    {
        subcategory: "Tree Nuts",
        products: [
            { name: "Cashew Nuts", image: "/products/cashew.jpg" },
            { name: "Almonds", image: "/products/almonds.jpg" },
            { name: "Walnuts", image: "/products/walnuts.jpg" },
            { name: "Pistachios", image: "/products/pistachios.jpg" },
        ],
    },
    {
        subcategory: "Dried Fruits",
        products: [
            { name: "Raisins", image: "/products/raisins.jpg" },
            { name: "Dried Figs (Anjeer)", image: "/products/figs.jpg" },
            { name: "Dry Dates (Chuhara)", image: "/products/dry_dates.jpg" },
            { name: "Dried Apricots", image: "/products/apricots.jpg" },
            { name: "Dried Mango Slices", image: "/products/dried_mango.jpg" },
            { name: "Dried Banana Chips", image: "/products/banana_chips.jpg" },
            { name: "Dried Papaya / Pineapple Cubes", image: "/products/mixed_cubes.jpg" },
            { name: "Amla (Dried Gooseberry)", image: "/products/amla.jpg" },
        ],
    },
    {
        subcategory: "Other Edible Nuts & Seeds",
        products: [
            { name: "Groundnuts (Peanuts)", image: "/products/peanuts.jpg" },
            { name: "Fox Nuts (Makhana)", image: "/products/makhana.jpg" },
            { name: "Water Chestnuts (Singhara)", image: "/products/singhara.jpg" },
            { name: "Charoli (Chironji Nuts)", image: "/products/charoli.jpg" },
        ],
    },
];

const DryFruitsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Products
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 capitalize">
                        Our Dry Fruits & Edible Nuts
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        Explore our finest selection of dry fruits, tree nuts, seeds, and dehydrated fruits — packed with nutrition and flavor.
                    </p>
                </div>
            </section>

            {/* Product Subcategories */}
            <div className="container py-10 space-y-12">
                {dryFruitsData.map((subcat) => (
                    <div key={`subcat-${subcat.subcategory}`}>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-primary">
                            {subcat.subcategory}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {subcat.products.map((product) => (
                                <Card
                                    key={`${subcat.subcategory}-${product.name}`}
                                    className="p-3 hover:shadow-md transition-shadow border-l-4 border-l-primary group cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-30 h-40 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                                        />
                                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DryFruitsPage;
