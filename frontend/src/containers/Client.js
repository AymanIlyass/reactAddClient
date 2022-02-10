import React, { Component } from 'react'
import clients from "../data/clients.json";
import Client from "../components/Client";

export default class Clients extends Component {
  state = {clients};
  render() {
    return (
      <div className="clientsContainer">
        {this.state.clients.map(
            (client) => {
              return (
                <Client key={client.id} name={client.name} genre={client.genre} year={client.year} img={client.img} />
              )
            }
        )}
      </div>
    )
  }
}
