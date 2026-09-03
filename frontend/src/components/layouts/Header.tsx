"use client"

import { Button, Drawer } from "@heroui/react"
import { Bell, Menu, Search, User, X, Home, Compass, Grid, Bookmark } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
    {
        label: "Trang chủ",
        href: "/",
        icon: Home
    },
    {
        label: "Khám phá",
        href: "/explore",
        icon: Compass
    },
    {
        label: "Thể loại",
        href: "/categories",
        icon: Grid
    },
    {
        label: "Thư viện của tôi",
        href: "/library",
        icon: Bookmark
    },
];

export default function Header(){
    const pathName = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-surface shadow-sm">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo + Navigation */}
                <Link href="/" className="flex flex-row items-center gap-2">
                    <Image src="/images/logo.png" alt="Edu3D" width={40} height={40} priority/>
                    <div className="text-headline-md font-bold text-primary">
                        Edu3D
                    </div>
                </Link>

                {/* Navbar  */}
                <nav className="ml-12 hidden items-center gap-6 lg:flex">
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
                <div className="flex items-center gap-1">
                    {/* Search */}
                    <Button isIconOnly variant="ghost">
                        <Search className="w-5 h-5"/>
                    </Button>

                    {/* Alert */}
                    <Button isIconOnly variant="ghost" className={`hidden lg:flex`}>
                        <Bell className="w-5 h-5"/>
                    </Button>

                    {/* Account */}
                    <Button isIconOnly variant="ghost" className={`hidden lg:flex`}>
                        <User className="w-5 h-5"/>
                    </Button>

                    {/* Menu */}
                    <Drawer isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <Button isIconOnly variant="ghost" className={`lg:hidden`} onPress={()=>setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? 
                                <X className="w-5 h-5"/> : 
                                <Menu className="w-5 h-5"/>}
                        </Button>
                        <Drawer.Backdrop>
                            <Drawer.Content placement="left">
                                <Drawer.Dialog className="flex flex-col h-full max-w-xs w-full p-5">
                                    {/* Header */}
                                    <Drawer.Header className="pb-1 border-b-2">
                                        <Link href="/" className="flex flex-row items-center gap-2" onClick={()=>setIsMenuOpen(false)}>
                                            <Image src="/images/logo.png" alt="Edu3D" width={40} height={40} priority/>
                                            <div className="text-headline-md font-bold text-primary">
                                                Edu3D
                                            </div>
                                        </Link>
                                    </Drawer.Header>

                                    {/* Body Drawer */}
                                    <Drawer.Body className="p-0 pt-2">
                                        {/* Navigation Menu */}
                                        <nav className="flex flex-col gap-2 pb-2">
                                            <span className="text-xs font-semibold text-muted-foreground tracking-wider">
                                                ĐIỀU HƯỚNG
                                            </span>
                                            {navItems.map((item, key) => {
                                                const isActive = pathName === item.href;
                                                return (
                                                    <Button key={key} variant="ghost" 
                                                        className={`text-body-md w-full flex justify-start hover:text-primary rounded-sm py-5 ${
                                                            isActive
                                                                ? "bg-primary/10 text-primary"
                                                                : "text-on-surface"
                                                            }`}
                                                        onPress={() => {
                                                            router.push(item.href);
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        <item.icon className="w-5 h-5" />
                                                        {item.label}
                                                    </Button>

                                                );
                                            })}
                                        </nav>

                                        {/* Fast Actions */}
                                        <div className="flex flex-col gap-2 pt-4 border-t-2">
                                            <span className="text-xs font-semibold text-muted-foreground tracking-wider">
                                                CÁ NHÂN
                                            </span>
                                            {/* Alert */}
                                            <Button variant="ghost" className={`text-body-md w-full flex justify-start py-5 hover:text-primary rounded-sm`}
                                                onPress={() => {
                                                    router.push("/notifications");
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <Bell className="h-5 w-5" />
                                                <span>Thông báo</span>
                                            </Button>
                                            
                                            {/* Profile */}
                                            <Button variant="ghost" className={`text-body-md w-full flex justify-start py-5 hover:text-primary rounded-sm`}
                                                onPress={() => {
                                                    router.push("/profile");
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <User className="w-5 h-5" />
                                                <span>Tài khoản của tôi</span>
                                            </Button>
                                        </div>
                                    </Drawer.Body>

                                    {/* Footer Drawer */}
                                    <Drawer.Footer className="pt-4 border-t">
                                        <Button variant="secondary" className="w-full" onPress={() => setIsMenuOpen(false)}>
                                            Đóng
                                        </Button>
                                    </Drawer.Footer>
                                </Drawer.Dialog>
                            </Drawer.Content>
                        </Drawer.Backdrop>
                    </Drawer>
                </div>
            </div>
        </header>
    );
}