"use client"

import { Button } from "@heroui/react"
import { Bell, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    {
        label: "Trang chủ",
        href: "/"
    },
    {
        label: "Khám phá",
        href: "/explore"
    },
    {
        label: "Thể loại",
        href: "/categories"
    },
    {
        label: "Thư viện của tôi",
        href: "/library"
    },
]

export default function Header(){
    const pathName = usePathname();
    return (
        <header className="sticky top-0 z-50 bg-surface shadow-sm">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo + Navigation */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-headline-md font-bold text-primary">
                        Edu3D
                    </Link>
                </div>

                {/* Navbar  */}
                <nav className="ml-12 hidden items-center gap-6 md:flex">
                    {navItems.map((item, key)=>{
                        const isActive = pathName == item.href;
                        return (
                            <Link href={item.href} key={key} className={
                                isActive ? 
                                    "border-b-2 border-primary pb-1 text-label-md font-bold text-primary" :
                                    "text-label-md text-on-surface-variant transition-colors hover:text-primary"
                            }>
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <Button isIconOnly variant="ghost">
                        <Search className="w-5 h-5"/>
                    </Button>

                    {/* Alert */}
                    <Button isIconOnly variant="ghost">
                        <Bell className="w-5 h-5"/>
                    </Button>

                    {/* Account */}
                    <Button isIconOnly variant="ghost">
                        <User className="w-5 h-5"/>
                    </Button>

                </div>
            </div>
        </header>
    );
}