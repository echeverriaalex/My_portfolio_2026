import { Github } from "lucide-react";
import { MONO } from "../../../Fonts";
import { PulsingDot } from "../PulsingDot/PulsingDot";
import { useEffect, useState } from "react";

{/* Right side: clock + boot indicator */}

export const RightSide = () => {

    const [time, setTime] = useState(new Date());
    const [bootSeq, setBootSeq] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
    }, []);


    useEffect(() => {
        const t = setInterval(
            () => setBootSeq((v) => (v < 100 ? v + 2 : 100)),
            40,
        );
    return () => clearInterval(t);
    }, []);

    return (
     
        <div className="flex items-center gap-4 flex-shrink-0">
        <div className="hidden sm:flex items-center gap-2">
            <PulsingDot />
            <span
            className="text-xs text-primary tabular-nums"
            style={MONO}
            >
            {time.toLocaleTimeString("en-GB")}
            </span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 border border-border px-2.5 py-1">
            <span
            className="text-[10px] text-muted-foreground"
            style={MONO}
            >
            SYS
            </span>
            <div className="w-16 h-1 bg-secondary overflow-hidden">
            <div
                className="h-full bg-primary transition-all duration-75"
                style={{ width: `${bootSeq}%` }}
            />
            </div>
            <span
            className="text-[10px] text-primary"
            style={MONO}
            >
            {bootSeq}%
            </span>
        </div>
        </div>
    );
};