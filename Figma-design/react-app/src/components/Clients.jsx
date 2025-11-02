import React from "react";
import Client1 from '../assets/clients-img/client-1.png'
import Client2 from '../assets/clients-img/client-2.png'
import Client3 from '../assets/clients-img/client-3.png'
import Client4 from '../assets/clients-img/client-4.png'
import Client5 from '../assets/clients-img/client-5.png'
import Client6 from '../assets/clients-img/client-6.png'
import Client7 from '../assets/clients-img/client-7.png'
import Client8 from '../assets/clients-img/client-8.png'
import Client9 from '../assets/clients-img/client-9.png'
import Left from '../assets/clients-img/left.png'
import Underline from '../assets/clients-img/unederline.png'

export default function ClientLogos() {
  const clients = [
    { id: 1, name: "Client 1", img: Client1 },
    { id: 2, name: "Client 2", img: Client2 },
    { id: 3, name: "Client 3", img: Client3 },
    { id: 4, name: "Client 4", img: Client4 },
    { id: 5, name: "Client 5", img: Client5 },
    { id: 6, name: "Client 6", img: Client6 },
    { id: 7, name: "Client 7", img: Client7 },
    { id: 8, name: "Client 8", img: Client8 },
    { id: 9, name: "Client 9", img: Client9 },
  ];

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20 relative">
      <img src={Left} alt="" className="absolute left-0 top-0 h-3/4 "/>
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid justify-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ">
            Our Clients
          </h2>
          <img src={Underline} alt="" className="w-47"/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center justify-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-32 h-20 md:w-36 md:h-24 flex items-center z-20 justify-center  hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-h-full max-w-full object-contain hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
