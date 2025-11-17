import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  UtensilsCrossed, 
  Star, 
  MapPin, 
  Clock,
  Search,
  TrendingUp,
  Award,
  Coffee,
  Pizza,
  IceCream,
  Salad
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // Mock data for featured restaurants
  const featuredRestaurants = [
    {
      id: "1",
      name: "ร้านอาหารญี่ปุ่น ซากุระ",
      category: "อาหารญี่ปุ่น",
      rating: 4.8,
      distance: "0.5 กม.",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      isFeatured: true,
    },
    {
      id: "2",
      name: "บ้านสวนกาแฟ",
      category: "คาเฟ่",
      rating: 4.6,
      distance: "1.2 กม.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      isFeatured: true,
    },
  ];

  // Mock data for popular restaurants
  const popularRestaurants = [
    {
      id: "3",
      name: "ก๋วยเตี๋ยวเรือป้าอ้อย",
      category: "อาหารไทย",
      rating: 4.7,
      avgPrice: 45,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    },
    {
      id: "4",
      name: "พิซซ่าฮัท สาขาเซ็นทรัล",
      category: "อาหารฝรั่ง",
      rating: 4.5,
      avgPrice: 250,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    },
    {
      id: "5",
      name: "ส้มตำนัวเผ็ดนัว",
      category: "อาหารอีสาน",
      rating: 4.9,
      avgPrice: 60,
      image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop",
    },
  ];

  // Food categories
  const categories = [
    { name: "คาเฟ่", icon: Coffee, color: "from-amber-400 to-orange-400" },
    { name: "พิซซ่า", icon: Pizza, color: "from-red-400 to-pink-400" },
    { name: "ไอศกรีม", icon: IceCream, color: "from-blue-400 to-cyan-400" },
    { name: "สลัด", icon: Salad, color: "from-green-400 to-emerald-400" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-lg sticky top-0 z-10">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">FoodFinder</h1>
              <p className="text-sm opacity-90 font-light">ค้นหาร้านอาหารที่ใช่</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <UtensilsCrossed className="h-8 w-8" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="ค้นหาร้านอาหาร, เมนู..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => navigate("/restaurants")}
            />
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-8">
        {/* Featured Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">ร้านแนะนำ</h2>
          </div>
          
          <div className="space-y-4">
            {featuredRestaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="overflow-hidden shadow-lg border-primary/20 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              >
                <div className="relative h-48">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    แนะนำ
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      {restaurant.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {restaurant.distance}
                    </span>
                  </div>
                  <p className="text-sm text-primary mt-2">{restaurant.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed className="h-5 w-5 text-secondary" />
            <h2 className="text-xl font-bold text-foreground">หมวดหมู่อาหาร</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card hover:shadow-md transition-all group"
                  onClick={() => navigate("/restaurants")}
                >
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-foreground text-center">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Popular Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-foreground">ร้านยอดนิยม</h2>
          </div>
          
          <div className="space-y-3">
            {popularRestaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="p-3 flex gap-3 shadow-sm border-border/50 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {restaurant.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {restaurant.category}
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-accent">
                      <Star className="h-3 w-3 fill-accent" />
                      {restaurant.rating}
                    </span>
                    <span className="text-primary font-medium">
                      ~{restaurant.avgPrice} บาท
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* View All Button */}
        <Button
          onClick={() => navigate("/restaurants")}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 py-6 text-base"
        >
          ดูร้านอาหารทั้งหมด
        </Button>
      </main>
    </div>
  );
};

export default Home;
