import NavBar from "../ui/components/nav-bar"; 
import "@/app/globals.css";
export default function Layout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
        return (
            <div className="flex h-screen flex-col md:flex-row   bg-white">
                <div className="w-full  flex-initial md:w-64 h-40 ">
                    <NavBar />
                </div>
                <div>
                    <main className="flex-grow  p-6 md:overflow-y-auto md:p-12">{children}</main>
                </div>
            </div>
        // <>
        //     <NavBar />
        //     {children}
        // </>
        );
    }