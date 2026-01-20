import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 flex items-center shadow-lg ${isDark ? "bg-slate-900" : "bg-sky-400"
                }`}
            aria-label="Toggle theme"
        >
            {/* Background stars (Night) */}
            <AnimatePresence>
                {isDark && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 overflow-hidden rounded-full"
                    >
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute bg-white rounded-full"
                                style={{
                                    width: Math.random() * 2 + 1 + "px",
                                    height: Math.random() * 2 + 1 + "px",
                                    top: Math.random() * 80 + 10 + "%",
                                    left: Math.random() * 80 + 10 + "%",
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Clouds (Day) */}
            <AnimatePresence>
                {!isDark && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 overflow-hidden rounded-full"
                    >
                        <div className="absolute w-4 h-2 bg-white/40 rounded-full top-2 left-2 blur-[1px]" />
                        <div className="absolute w-3 h-1.5 bg-white/30 rounded-full bottom-2 right-4 blur-[1px]" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Toggle Switch (Sun/Moon) */}
            <motion.div
                className="z-10 w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-md"
                animate={{
                    x: isDark ? 32 : 0,
                    rotate: isDark ? 360 : 0,
                    backgroundColor: isDark ? "#c0c0c0" : "#ffce45",
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                }}
            >
                <span className="select-none">
                    {isDark ? "🌙" : "🌞"}
                </span>
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
