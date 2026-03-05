import { useEffect, useRef } from "react";

export function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    useEffect(() => {
        const onMove = (e) => {
            if (dotRef.current) {
                dotRef.current.style.left = e.clientX + "px";
                dotRef.current.style.top = e.clientY + "px";
            }
            setTimeout(() => {
                if (ringRef.current) {
                    ringRef.current.style.left = e.clientX + "px";
                    ringRef.current.style.top = e.clientY + "px";
                }
            }, 60);
        };
        document.addEventListener("mousemove", onMove);
        return () => document.removeEventListener("mousemove", onMove);
    }, []);
    return (
        <>
            <div className="o360-cursor" ref={dotRef} />
            <div className="o360-cursor-ring" ref={ringRef} />
        </>
    );
}
