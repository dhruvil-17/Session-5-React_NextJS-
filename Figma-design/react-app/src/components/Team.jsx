import React from 'react'
import Jessica from '../assets/Team/member-1.png'
import Johny from '../assets/Team/member-2.png'
import Sanya from '../assets/Team/member-3.png'
import Underline from '../assets/Team/underline.png'
import BlueLeft from '../assets/Team/blue-left.png'
import PurpleRight from '../assets/Team/Purple-right.png'
export default function Team() {
  const members = [
    { name: 'Jessica D\'suza', img:  Jessica  },
    { name: 'Johny Williams', img: Johny  },
    { name: 'Sanya R.', img:  Sanya  }
  ]
  return (
    <section className="bg-white relative">
      <img src={BlueLeft} alt="" className="absolute left-0 -top-20 w-1/5 h-1/2 sm:h-full " />
      <img src={PurpleRight} alt="" className="absolute right-0 w-1/7 bottom-0 sm:-bottom-1/2 h-1/2 sm:h-full " />
       
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h3 className="text-4xl font-bold">OUR TEAM</h3>
        <img src={Underline} alt="" className='w-46 mx-auto' />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          {members.map((p) => (
            <div key={p.name} className="flex flex-col items-center">
              <div className=" h-36  mb-4 transform transition hover:scale-105 ">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-sm text-black">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
