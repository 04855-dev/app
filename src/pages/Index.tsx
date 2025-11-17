import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { UtensilsCrossed, DollarSign, MapPin } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState([100]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="px-4 py-8 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl shadow-lg">
              <UtensilsCrossed className="h-14 w-14" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 drop-shadow-md">กินอะไรดี</h1>
          <p className="text-base opacity-95 font-light">ค้นหาร้านอาหารที่ใช่ ตรงงบของคุณ</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        {/* Features */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <Card className="p-4 text-center border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-7 w-7 text-primary" />
            </div>
            <p className="text-xs font-medium text-foreground leading-relaxed">ควบคุม<br />งบประมาณ</p>
          </Card>
          
          <Card className="p-4 text-center border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-7 w-7 text-secondary-foreground" />
            </div>
            <p className="text-xs font-medium text-foreground leading-relaxed">ใกล้คุณ<br />ที่สุด</p>
          </Card>
          
          <Card className="p-4 text-center border-accent/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-accent/40 to-accent/20 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <UtensilsCrossed className="h-7 w-7 text-accent-foreground" />
            </div>
            <p className="text-xs font-medium text-foreground leading-relaxed">หลากหลาย<br />ร้านค้า</p>
          </Card>
        </div>

        {/* Budget Selector */}
        <Card className="p-6 mb-6 shadow-lg border-border/50">
          <h2 className="text-lg font-semibold text-foreground mb-5">งบประมาณของคุณ</h2>
          
          <div className="text-center mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl py-6 px-4">
            <p className="text-sm text-muted-foreground mb-2 font-light">คุณมีเงิน</p>
            <div className="inline-flex items-baseline gap-2">
              <span className="text-6xl font-bold text-primary drop-shadow-sm">{budget[0]}</span>
              <span className="text-2xl font-medium text-muted-foreground">บาท</span>
            </div>
          </div>

          <Slider
            value={budget}
            onValueChange={setBudget}
            min={30}
            max={500}
            step={10}
            className="mb-4"
          />

          <div className="flex justify-between text-xs text-muted-foreground font-light">
            <span>30 ฿</span>
            <span>500 ฿</span>
          </div>
        </Card>

        {/* Quick Budget Buttons */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[50, 100, 150, 200].map((amount) => (
            <Button
              key={amount}
              variant={budget[0] === amount ? "default" : "outline"}
              size="sm"
              onClick={() => setBudget([amount])}
              className={`text-sm font-medium transition-all ${
                budget[0] === amount 
                  ? 'shadow-md scale-105' 
                  : 'hover:border-primary/50'
              }`}
            >
              {amount} ฿
            </Button>
          ))}
        </div>

        {/* Search Button */}
        <Button
          size="lg"
          className="w-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95 py-6"
          onClick={() => navigate("/restaurants")}
        >
          🔍 ค้นหาร้านอาหาร
        </Button>

        {/* Info Text */}
        <p className="text-center text-xs text-muted-foreground mt-8 leading-relaxed font-light px-2">
          ระบบจะแนะนำร้านอาหารที่เหมาะสมกับงบประมาณของคุณ<br />
          และอยู่ใกล้พื้นที่ของคุณ 📍
        </p>
      </main>

      {/* Footer */}
      <footer className="px-4 py-5 text-center text-xs text-muted-foreground border-t border-border/50 bg-muted/20">
        <p className="font-light">สร้างเพื่อช่วยคนไทยประหยัดเงินและเวลา ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
