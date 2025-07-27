import {useParams} from "react-router-dom";
import {categorizedProducts} from "@/data/products";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card.tsx";

const ProductCategoryPage = () => {
    const {category} = useParams();

    const selected = categorizedProducts.find((cat) => cat.slug === category);

    if (!selected) {
        return (
            <div className="text-center py-10 text-red-500 text-lg">
                Category not found.
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                        Products
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4 capitalize">
                        Our {selected.category}
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        Explore our best-in-class {selected.category.toLowerCase()} sourced with quality and care.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <div className="container py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {selected.items.map((product) => (
                        <Card
                            key={product.name}
                            className="p-3 hover:shadow-md transition-shadow border-l-4 border-l-primary group cursor-pointer"
                        >
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-30 h-40 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                                />
                                <span
                                    className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors"
                                >
            {product.name}
          </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductCategoryPage;
