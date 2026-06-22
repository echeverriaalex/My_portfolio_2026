import { MONO } from "../../../Constants";

/* ─── Ticker ──────────────────────────────────────── */
export function Ticker() {
  const items = [
    "NEURAL LINK ACTIVE",
    "SYSTEM INTEGRITY 99.8%",
    "ENCRYPTION ENABLED",
    "NODE BERLIN-01 CONNECTED",
    "UPTIME 847 DAYS",
    "THREAT LEVEL: NONE",
    "QUANTUM FIREWALL ACTIVE",
    "BIOMETRIC AUTH PASSED",
  ];
  const text = items.join("   ◈   ");
  return (
    <div className="overflow-hidden border-b border-border/50 py-1.5 bg-secondary/30">
      <div
        className="whitespace-nowrap text-xs text-primary/50 tracking-widest"
        style={{
          ...MONO,
          animation: "ticker 40s linear infinite",
        }}
      >
        {text + "   ◈   " + text}
      </div>
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; } 92% { opacity: 1; } 93% { opacity: 0.6; } 95% { opacity: 1; } 97% { opacity: 0.8; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 8px rgba(0,212,255,0.3), 0 0 20px rgba(0,212,255,0.1); }
          50% { box-shadow: 0 0 16px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.2); }
        }
        @keyframes data-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        /* Nuevas animaciones futuristas */
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(0,212,255,0.3), 0 0 20px rgba(0,212,255,0.1); }
          50% { text-shadow: 0 0 20px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.3); }
        }
        @keyframes border-glow {
          0%, 100% { border-color: rgba(0,212,255,0.2); box-shadow: inset 0 0 10px rgba(0,212,255,0.05); }
          50% { border-color: rgba(0,212,255,0.5); box-shadow: inset 0 0 20px rgba(0,212,255,0.15), 0 0 15px rgba(0,212,255,0.3); }
        }
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-30px); opacity: 0; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes circuit-lines {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          25% { opacity: 0.7; }
          50% { opacity: 1; }
          75% { opacity: 0.8; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes vibrate {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }
        
        /* Clases de animación */
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float-up 3s ease-in infinite;
        }
        .animate-rotate {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-neon {
          animation: neon-flicker 4s ease-in-out infinite;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .glow-btn:hover {
          box-shadow: 0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        .glow-btn:active {
          transform: translateY(0);
        }
        
        .glow-border {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .hud-text {
          animation: flicker 8s infinite;
        }
        
        /* Efecto de borde animado */
        .animated-border {
          position: relative;
          animation: border-glow 3s ease-in-out infinite;
        }
        
        /* Hover mejorado para cards */
        .card-hover {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        /* Efecto de carga progresiva */
        .stagger-1 { animation: fade-in-up 0.8s ease-out 0.1s forwards; opacity: 0; }
        .stagger-2 { animation: fade-in-up 0.8s ease-out 0.2s forwards; opacity: 0; }
        .stagger-3 { animation: fade-in-up 0.8s ease-out 0.3s forwards; opacity: 0; }
        .stagger-4 { animation: fade-in-up 0.8s ease-out 0.4s forwards; opacity: 0; }
      `}</style>
    </div>
  );
}