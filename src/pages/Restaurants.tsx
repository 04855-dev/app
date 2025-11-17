import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, ArrowLeft } from "lucide-react";

interface Restaurant {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  avgPrice: number;
  rating: number;
  distance: string;
  image: string;
  openHours: string;
}

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "ข้าวมันไก่นายเล็ก",
    category: "อาหารไทย",
    priceRange: "40-60 บาท",
    avgPrice: 50,
    rating: 4.5,
    distance: "0.5 กม.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
    openHours: "08:00-20:00"
  },
  {
    id: 2,
    name: "ส้มตำป้าจิ๋ว",
    category: "อาหารอีสาน",
    priceRange: "30-50 บาท",
    avgPrice: 40,
    rating: 4.7,
    distance: "0.8 กม.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop",
    openHours: "10:00-21:00"
  },
  {
    id: 3,
    name: "ก๋วยเตี๋ยวเรือลุงเฮง",
    category: "ก๋วยเตี๋ยว",
    priceRange: "35-55 บาท",
    avgPrice: 45,
    rating: 4.3,
    distance: "1.2 กม.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    openHours: "09:00-17:00"
  },
  {
    id: 4,
    name: "ข้าวราดแกงป้าแดง",
    category: "อาหารไทย",
    priceRange: "40-60 บาท",
    avgPrice: 50,
    rating: 4.6,
    distance: "0.6 กม.",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=400&h=300&fit=crop",
    openHours: "07:00-15:00"
  }
];

const Restaurants = () => {
  const navigate = useNavigate();
  const [selectedBudget] = useState(100);

  const filteredRestaurants = mockRestaurants.filter(
    (restaurant) => restaurant.avgPrice <= selectedBudget
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg">
        <div className="flex items-center gap-3 px-4 py-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold">ร้านอาหารแนะนำ</h1>
            <p className="text-sm opacity-95 font-light">งบประมาณ {selectedBudget} บาท</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="bg-secondary/20 rounded-lg px-4 py-2 mb-5 border border-secondary/30">
          <p className="text-sm text-foreground font-medium text-center">
            ✨ พบ {filteredRestaurants.length} ร้านที่เหมาะกับงบของคุณ
          </p>
        </div>

        <div className="space-y-4">
          {filteredRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="overflow-hidden cursor-pointer transition-all hover:shadow-xl active:scale-[0.97] border-border/50 shadow-md"
              onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            >
              <div className="flex gap-4 p-4">
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-28 h-28 rounded-xl object-cover shadow-sm"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-0.5 shadow-sm">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-xs font-semibold text-foreground">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <h3 className="font-semibold text-foreground truncate text-base mb-1">
                    {restaurant.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs w-fit mb-2">
                    {restaurant.category}
                  </Badge>
                  
                  <div className="mt-auto space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <div className="bg-primary/10 p-1 rounded">
                        <DollarSign className="h-3 w-3 text-primary" />
                      </div>
                      <span className="font-medium">{restaurant.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <div className="bg-secondary/20 p-1 rounded">
                        <MapPin className="h-3 w-3 text-secondary-foreground" />
                      </div>
                      <span>{restaurant.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <div className="bg-accent/20 p-1 rounded">
                        <Clock className="h-3 w-3 text-accent-foreground" />
                      </div>
                      <span>{restaurant.openHours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
