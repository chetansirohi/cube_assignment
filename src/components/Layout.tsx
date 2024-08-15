import React, { useState } from "react";
import { useCustomers } from "../hooks/useCustomers";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Layout: React.FC = () => {
  const { data: customers, isLoading, error } = useCustomers();
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading customers</div>;

  const selectedCustomer = customers?.find((c) => c.id === selectedCustomerId);

  return (
    <div className="flex flex-col h-screen font-inter">
      <header className="flex justify-between items-center p-4 bg-background shadow-md">
        <div className="flex items-center space-x-4 flex-grow justify-center">
          <img src="/cubeimage.png" alt="CubeAI logo" className="w-auto h-12" />
          <h1 className="text-3xl font-bold text-center flex-grow">Cube</h1>
        </div>
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
      <div className="flex flex-1 overflow-hidden relative">
        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        <aside
          className={`w-full md:w-1/5 bg-muted p-4 overflow-y-auto absolute md:relative z-20 transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <CustomerList
            customers={customers || []}
            selectedCustomerId={selectedCustomerId}
            onSelectCustomer={(id) => {
              setSelectedCustomerId(id);
              setIsSidebarOpen(false);
            }}
          />
        </aside>
        <main className="flex-1 p-4 overflow-y-auto">
          {selectedCustomer ? (
            <CustomerDetails customer={selectedCustomer} />
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
