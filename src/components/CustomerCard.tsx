import React from "react";
import { Customer } from "../types";
import { Card, CardContent } from "./ui/card";

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  isSelected,
  onSelect,
}) => {
  return (
    <Card
      className={`cursor-pointer transition-colors mb-2 fade-in ${
        isSelected ? "bg-primary text-primary-foreground" : ""
      }`}
      onClick={() => onSelect(customer.id)}
    >
      <CardContent className="p-4">
        <h3 className="font-semibold break-words">{customer.name}</h3>
        <p className="text-sm text-muted-foreground break-words">
          {customer.title}
        </p>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;
