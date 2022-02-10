import React from 'react';
import "../style/addClient.css";

export default function AddClient() {
  return (
    <div className="addClient">
        <form onSubmit={ () => alert('Client Added!') }>
            <label>Nom</label>
            <input type="text" required />
            <label>Prénom</label>
            <input type="text" required />
            <label>Age</label>
            <input type="text" placeholder="(optional)" />

            <button type="submit"></button>
        </form>
    </div>
  )
}
