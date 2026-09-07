import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({children}: {children: React.ReactNode}){
    return(
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />

            <div className="min-h-screen lg:pl-72">
                <AdminHeader />
                { children }
            </div>
        </div>
    );
}