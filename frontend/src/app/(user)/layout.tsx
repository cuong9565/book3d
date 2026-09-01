import UserSidebar from "@/components/layouts/UserSidebar"

export default function UserLayout({children}: {children: React.ReactNode}){
    return (
        <div className="">
            <UserSidebar />
            <main>
                {children}
            </main>
        </div>
    );
}