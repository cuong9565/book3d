import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}