import { useEffect, useState } from "react";
import { Cake, Gift, Mail } from "lucide-react";

const sections = ["hero", "memories", "letters"];

const Menu = () => {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const base =
        "transition-all duration-300 p-2";
    const activeStyle =
        "bg-white/20 scale-100 shadow-md";

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 mb-3 z-50">
            <ul className="menu menu-horizontal gap-2 backdrop-blur-md text-white bg-black/40 rounded-box shadow-lg">
                <li>
                    <a
                        href="#hero"
                        className={`${base} ${active === "hero" ? activeStyle : ""}`}
                    >
                        <Cake className="h-5 w-5" />
                    </a>
                </li>

                <li>
                    <a
                        href="#memories"
                        className={`${base} ${active === "memories" ? activeStyle : ""}`}
                    >
                        <Gift className="h-5 w-5" />
                    </a>
                </li>

                <li>
                    <a
                        href="#letters"
                        className={`${base} ${active === "letters" ? activeStyle : ""}`}
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
