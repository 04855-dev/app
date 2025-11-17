import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex flex-col items-center justify-center px-6">
      {/* Logo Container */}
      <div className="text-center space-y-8 animate-in fade-in-50 duration-1000">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <UtensilsCrossed className="h-24 w-24 text-primary-foreground" />
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            FoodFinder
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
            ค้นหาร้านอาหารที่ใช่<br />ตรงงบของคุณ ใกล้ที่สุด
          </p>
        </div>

        {/* Welcome Message */}
        <div className="pt-8">
          <p className="text-lg text-foreground/80 mb-8">
            ยินดีต้อนรับสู่แอปค้นหาร้านอาหาร
          </p>
          
          {/* Start Button */}
          <Button
            onClick={() => navigate("/auth")}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl px-12 py-6 text-lg font-semibold rounded-2xl transform hover:scale-105 transition-all duration-300"
          >
            เริ่มต้นใช้งาน
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center">
        <p className="text-sm text-muted-foreground">
          พบร้านอาหารยอดนิยมในบริเวณใกล้คุณ
        </p>
      </div>
    </div>
  );
};

export default Splash;
