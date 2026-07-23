import { Cpu } from "lucide-react";
import { MONO } from "../../../Fonts";
import { PulsingDot } from "./../PulsingDot/PulsingDot";
import { ABOUT_MY } from "./../../Data";

export const Footer = () => {
    return (
        <footer className="border-t border-border animated-border py-8">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 min-h-10 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }} >
                <div className="flex items-center gap-3">
                    <Cpu size={13} className="text-primary" />
                    <span
                        className="text-xs text-muted-foreground tracking-widest uppercase"
                        style={MONO}
                    >
                        { ABOUT_MY.item.long } · { ABOUT_MY.item.role } · MAR DEL PLATA-0223 · &copy; { new Date().getFullYear() }
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <PulsingDot />
                    <span className="text-xs text-primary" style={MONO}>
                        TODOS LOS SISTEMAS NOMINALES
                    </span>
                </div>
            </div>

            <div className="w-full text-center py-4">
                <span
                    className="text-xs text-muted-foreground tracking-widest uppercase"
                    style={{ ...MONO, fontSize: "16px" }}
                >
                    Hecho con ❤️ y React.
                </span>
            </div>

            <div
                className="h-0.5 w-full"
                style={{ background: "linear-gradient(to right, transparent, #00d4ff, #7b61ff, transparent)" }}
            />
        </footer>
    );
}