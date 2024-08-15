import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';
import { Customer, Photo } from '../types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

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

export const fetchPhotos = async (): Promise<Photo[]> => {
  const response = await axios.get(`${API_BASE_URL}/photos?_limit=9`);
  return response.data;
};