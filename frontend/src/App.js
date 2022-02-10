import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Clients from './containers/Client';
import AddClient from './components/AddClient';

export default function App() {
  return (
    <div>
      <Header />
      <Clients />
      <AddClient />
      <Footer />
    </div>
  )
}
