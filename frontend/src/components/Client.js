import React from 'react';

const Client = (props) => {
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.nom}</td>
            <td>{props.prenom}</td>
            <td>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Client;