import React, { useRef } from "react";
import { Customer } from "../types";
import { ScrollArea } from "../components/ui/scroll-area";
import { useVirtualizer } from "@tanstack/react-virtual";
import CustomerCard from "./CustomerCard";

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomerId,
  onSelectCustomer,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: customers.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 10,
  });

  return (
    <ScrollArea className="h-[calc(100vh-5rem)]" ref={parentRef}>
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const customer = customers[virtualItem.index];
          return (
            <div
              key={customer.id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <CustomerCard
                customer={customer}
                isSelected={customer.id === selectedCustomerId}
                onSelect={onSelectCustomer}
              />
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default CustomerList;
