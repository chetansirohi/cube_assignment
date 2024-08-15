import React from "react";
import { Customer } from "../types";
import PhotoGrid from "./Photogrid";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{customer.name} - Details</h2>
        <p className="text-xl text-muted-foreground">{customer.title}</p>
        <p className="text-muted-foreground">{customer.address}</p>
      </div>
      <PhotoGrid customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
