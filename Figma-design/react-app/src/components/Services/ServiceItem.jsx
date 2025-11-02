import React from 'react'
export default function ServiceItem({ title, text, imgSrc, flip }) {
  return (
    <div
      className={`flex flex-col justify-center gap-24 sm:flex-row ${flip ? 'sm:flex-row-reverse sm:items-end sm:text-left ' : 'sm:text-right sm:items-start'
        }`}
    >

      <div className="w-full sm:w-1/3  z-20">
        <h4 className="text-3xl font-semibold">{title}</h4>
        <p className="mt-2 text-gray-600 text-sm">{text}</p>
      </div>
      <div className="w-full sm:w-1/3 flex justify-center">
        <div className="w-80 h-60  overflow-hidden transform transition hover:scale-105">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}