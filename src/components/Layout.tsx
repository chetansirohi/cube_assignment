import React, { useState } from "react";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRandomUsers } from "../hooks/useRandomUsers";
import { Skeleton } from "./ui/skeleton";

const Layout: React.FC = () => {
  const { users, loading, error } = useRandomUsers(1000);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderSkeleton = () => (
    <div className="space-y-2">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col h-screen font-inter">
      <header className="flex justify-between items-center p-4 bg-background shadow-md">
        <img src="/cubeimage.png" alt="CubeAI logo" className="w-auto h-12" />
        <h1 className="text-3xl font-bold absolute left-1/2 transform -translate-x-1/2">
          Cube
        </h1>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu />
          </Button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`w-full md:w-1/4 lg:w-1/5 bg-muted p-4 overflow-y-auto fixed md:static h-full z-40 transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          {loading ? (
            renderSkeleton()
          ) : (
            <CustomerList
              users={users}
              selectedCustomerId={selectedCustomerId}
              onSelectCustomer={(id) => {
                setSelectedCustomerId(id);
                setIsSidebarOpen(false);
              }}
            />
          )}
        </aside>
        <main className="flex-1 p-4 overflow-y-auto w-full md:w-3/4 lg:w-4/5">
          {error ? (
            <div>Error loading customers</div>
          ) : selectedCustomerId !== null && users[selectedCustomerId] ? (
            <CustomerDetails customer={users[selectedCustomerId]} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-muted-foreground font-poppins">
                Select a customer to view details
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
