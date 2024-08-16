import { useState, useEffect } from 'react';

interface RandomUser {
    name: {
        title: string;
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
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export const useRandomUsers = (count: number) => {
    const [users, setUsers] = useState<RandomUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://randomuser.me/api/?results=${count}`);
                const data = await response.json();
                setUsers(data.results);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, [count]);

    return { users, loading, error };
};