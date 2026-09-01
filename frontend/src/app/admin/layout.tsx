import AdminSidebar from "@/components/layouts/AdminSidebar"

export default function AdminLayout({children}: {children: React.ReactNode}){
    return(
        <div className="">
            <AdminSidebar />
            <main>
                {children}
            </main>
        </div>
    );
}