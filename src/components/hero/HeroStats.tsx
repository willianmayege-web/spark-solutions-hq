import { heroStats } from "@/data/hero-slides";

const HeroStats = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/60 md:bg-black/50 backdrop-blur-sm border-t border-border py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 text-center">
          {heroStats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
