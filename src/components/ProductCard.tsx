
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Truck } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
  description: string;
  origin: string;
  availability: string;
  rating?: number;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  category,
  description,
  origin,
  availability,
  rating = 4.5,
  features
}) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-white backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-0">
            {availability}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <div className="flex items-center space-x-1 ml-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-muted-foreground">{rating}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Truck className="h-4 w-4 mr-2 text-primary" />
            <span>Origin: <span className="font-medium text-foreground">{origin}</span></span>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
            <div className="flex flex-wrap gap-2">
              {features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">
                  {feature}
                </Badge>
              ))}
              {features.length > 3 && (
                <Badge variant="outline" className="text-xs border-muted">
                  +{features.length - 3} more
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button className="flex-1 bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
