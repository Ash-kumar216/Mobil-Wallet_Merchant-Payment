import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Computer } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 lg:px-32 mt-20 mb-10 grid gap-3">
            <div>
                <div className="flex items-center justify-between">
                    <Logo />
                    <span title="All System Normal" className="bg-background hover:bg-secondary transition select-none cursor-pointer flex items-center justify-center gap-1 text-xs rounded-full py-1 px-2 border">Normal<Computer className="h-3 w-3" /></span>
                </div>
                <p className="text-xs md:text-sm">By ashPaz <span className="text-primary">.</span></p>
            </div>
            <p className="text-xs">©{new Date().getFullYear()} All rights reserved<span className="text-primary">.</span></p>
        </footer>
    )
}