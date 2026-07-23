import { useState } from "react";
import { MONO } from "../../../Fonts";
import { SquareMenu, X } from "lucide-react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Perfil", href: "#profile" },
        { label: "Stack", href: "#stack" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
    ];

    return (
        <div className="relative flex items-center gap-7">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                className="inline-flex items-center justify-center border border-primary/30 p-2 text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
            >
                {open ? <X size={18} /> : <SquareMenu size={18} />}
            </button>

            <div
                id="mobile-navigation"
                className={`absolute right-0 top-full z-50 mt-3 w-64 border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-200 md:hidden ${
                    open
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block border-b border-border/60 pb-2 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:text-primary"
                                style={MONO}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hidden md:flex items-center gap-7">
                <ul className="md:flex items-center gap-7">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors relative group"
                                style={MONO}
                            >
                                {link.label}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};