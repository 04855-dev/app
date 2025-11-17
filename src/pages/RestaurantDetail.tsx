import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, Star } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  calories: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

const mockRestaurantDetails = {
  1: {
    name: "ข้าวมันไก่นายเล็ก",
    category: "อาหารไทย",
    rating: 4.5,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&h=400&fit=crop",
    address: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ",
    phone: "02-123-4567",
    openHours: "08:00-20:00",
    description: "ข้าวมันไก่ต้นตำรับ หอมกลิ่นขิง เนื้อนุ่ม น้ำจิ้มแซ่บ",
    menu: [
      { 
        id: 1, 
        name: "ข้าวมันไก่ธรรมดา", 
        price: 40, 
        description: "ไก่ต้ม น้ำจิ้ม ข้าวมัน",
        calories: 520,
        protein: 28,
        carbs: 65,
        fat: 15
      },
      { 
        id: 2, 
        name: "ข้าวมันไก่พิเศษ", 
        price: 50, 
        description: "ไก่ต้ม+ทอด น้ำจิ้ม ข้าวมัน",
        calories: 680,
        protein: 35,
        carbs: 70,
        fat: 25
      },
      { 
        id: 3, 
        name: "ข้าวมันไก่ทอด", 
        price: 45, 
        description: "ไก่ทอดกรอบ น้ำจิ้ม ข้าวมัน",
        calories: 650,
        protein: 32,
        carbs: 68,
        fat: 23
      },
      { 
        id: 4, 
        name: "ต้มยำไก่", 
        price: 60, 
        description: "ต้มยำน้ำข้น รสจัดจ้าน",
        calories: 280,
        protein: 25,
        carbs: 18,
        fat: 12
      }
    ]
  }
};

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const restaurant = mockRestaurantDetails[1]; // In real app, use id to fetch data

  if (!restaurant) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Image */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-md"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </Button>
      </div>

      {/* Restaurant Info */}
      <div className="px-4 py-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">{restaurant.name}</h1>
            <Badge variant="secondary" className="text-xs">
              {restaurant.category}
            </Badge>
          </div>
          <div className="flex items-center gap-1 bg-gradient-to-r from-accent to-primary text-white px-3 py-2 rounded-full shadow-md">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-bold">{restaurant.rating}</span>
            <span className="text-xs opacity-90">({restaurant.reviews})</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{restaurant.description}</p>

        {/* Details Cards */}
        <div className="space-y-3 mb-6">
          <Card className="p-4 border-border/50 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold mb-1">ที่อยู่</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{restaurant.address}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-border/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">เวลาทำการ</p>
                <p className="text-sm text-muted-foreground">{restaurant.openHours}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-border/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/30 p-2 rounded-lg">
                <Phone className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">โทรศัพท์</p>
                <p className="text-sm text-muted-foreground">{restaurant.phone}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Menu */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">🍽️ เมนูแนะนำ</h2>
          <div className="space-y-3">
            {restaurant.menu.map((item: MenuItem) => (
              <Card key={item.id} className="p-4 border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-base mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="bg-primary/10 px-3 py-2 rounded-lg">
                      <p className="font-bold text-primary text-lg">{item.price} ฿</p>
                    </div>
                  </div>
                </div>
                
                {/* Nutrition Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1.5">
                    <div className="bg-accent/20 px-2.5 py-1 rounded-md">
                      <span className="text-xs font-semibold text-accent-foreground">
                        🔥 {item.calories} kcal
                      </span>
                    </div>
                  </div>
                  {item.protein && (
                    <div className="text-xs text-muted-foreground">
                      โปรตีน {item.protein}g
                    </div>
                  )}
                  {item.carbs && (
                    <div className="text-xs text-muted-foreground">
                      คาร์บ {item.carbs}g
                    </div>
                  )}
                  {item.fat && (
                    <div className="text-xs text-muted-foreground">
                      ไขมัน {item.fat}g
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pb-6">
          <Button className="w-full shadow-lg hover:shadow-xl transition-all active:scale-95 text-base font-semibold" size="lg">
            📍 นำทางไปร้าน
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
