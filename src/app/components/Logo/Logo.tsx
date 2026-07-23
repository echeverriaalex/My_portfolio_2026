import { Cpu } from "lucide-react";
import { MONO, ORBITRON } from "../../../Fonts";
import { ABOUT_MY } from "../../Data";

export const Logo = () => {
    return (
        <div className="flex items-center gap-3 flex-shrink-0">
            <div
                className="relative w-8 h-8 flex items-center justify-center border border-primary/40"
                style={{ boxShadow: "0 0 12px rgba(0,212,255,0.2)" }}
            >
                <Cpu size={16} className="text-primary" />
            </div>
            <div>
                <div
                    className="text-sm font-bold tracking-widest uppercase leading-none hud-text"
                    style={{ ...ORBITRON, color: "var(--primary)" }}
                >
                    { ABOUT_MY.item.short.toUpperCase() }
                </div>
                <div
                    className="text-[12px] text-foreground tracking-widest mt-0.5"
                    style={MONO}
                >
                    DEV · SYSTEM
                </div>
            </div>
        </div>
    );
};