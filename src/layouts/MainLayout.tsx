import SideBar from "../components/SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full justify-between">
      <div className="lg:w-1/4">
        <SideBar />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
