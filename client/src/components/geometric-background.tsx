export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 bg-dynamic-gradient animate-gradient-animate">
      {/* Geometric Background Elements */}
      <div className="geometric-shape w-32 h-32 bg-brand-primary rounded-full top-10 left-10 animate-float"></div>
      <div className="geometric-shape w-24 h-24 bg-brand-secondary rounded-full top-1/4 right-20 animate-float-reverse"></div>
      <div className="geometric-shape w-40 h-40 bg-brand-white rounded-full bottom-20 left-1/4 animate-pulse-slow"></div>
      <div 
        className="geometric-shape w-28 h-28 bg-brand-primary top-1/2 right-1/3 animate-rotate-slow"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
      <div 
        className="geometric-shape w-36 h-36 bg-brand-secondary bottom-1/3 right-10 animate-float"
        style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
      ></div>
    </div>
  );
}
