import React from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";

export default function UserList(){
    const { users, loading, error } = useFetchUsers();

    if(loading) return <p>Cargando Usuarios</p>
    if(error) return <p>Error al cargar usuarios</p>

    return(
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.nombre} - {user.edad}</li>
            ))}
        </ul>
    );
}

