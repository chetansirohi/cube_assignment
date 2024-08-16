import React from "react";
import PhotoGrid from "./Photogrid";

interface CustomerDetailsProps {
  customer: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: string;
    };
  };
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{`${customer.name.first} ${customer.name.last} - Details`}</h2>
      <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4">
        {customer.email}
      </p>
      <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8">{`${customer.location.street.number} ${customer.location.street.name}, ${customer.location.city}, ${customer.location.state}, ${customer.location.country}, ${customer.location.postcode}`}</p>
      <PhotoGrid
        customerId={customer.name.first.length + customer.name.last.length}
      />
      <p className="mt-8 text-sm sm:text-base lg:text-lg text-muted-foreground">
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
