import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Customer } from '../types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchCustomers = async (): Promise<Customer[]> => {
  // In a real scenario, we'd fetch this from an API
  // For this example, we'll generate mock data
  const customers: Customer[] = [];
  for (let i = 1; i <= 1000; i++) {
    customers.push({
      id: i,
      name: `Customer ${i}`,
      title: `Title ${i}`,
      address: `${i} Main St, City ${i}, Country`
    });
  }
  return customers;
};