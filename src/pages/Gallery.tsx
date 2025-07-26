import {Badge} from "@/components/ui/badge.tsx";

const Gallery = () => {
    return (
        <div className='min-h-screen bg-white'>
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                            Products
                        </Badge>
                        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4">
                            Capturing Our Global Impact
                        </h1>
                        <p className="text-sm sm:text-sm text-muted-foreground max-w-3xl mx-auto">
                            Explore moments from our trade exhibitions, export operations, and our journey across
                            continents through vibrant visuals.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;