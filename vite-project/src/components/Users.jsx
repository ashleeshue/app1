import React, { useState, useEffect } from "react";
import User from "./components/User";
export default function Users() {
    
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
            console.log(data);
        }
        fetchData(); // Call the fetchData function to make the API call
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);

    return (
        <> 
            {users.map((user) => (
               <User key={user.id} > {user.firstName} </User>
            ))}
        </>
    );
}
