import React from "react";
import { Customer } from "../types";
import PhotoGrid from "./Photogrid";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2">{customer.name}</h2>
      <p className="text-xl text-muted-foreground mb-4">{customer.title}</p>
      <p className="text-muted-foreground mb-8">{customer.address}</p>
      <PhotoGrid customerId={customer.id} />
      <p className="mt-4 text-sm text-muted-foreground">
        Photos provided by{" "}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Pexels
        </a>
      </p>
    </div>
  );
};

export default CustomerDetails;
