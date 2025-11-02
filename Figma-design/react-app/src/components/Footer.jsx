import React from 'react'
export default function Footer() {
  return (
    <>
    <footer className="bg-blue-200 mx-20 my-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold">Social</h4>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Google+</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Explore</h4>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>Services</li>
            <li>Team</li>
            <li>Clients</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p className="mt-3 text-sm text-gray-600">Lorem ipsum dummy address<br />+91 1234 567890</p>
        </div>
        <div>
          <h4 className="font-bold">Email</h4>
          <p className="mt-3 text-sm text-gray-600">mendleson.communication@email.com</p>
        </div>
      </div>
      
    </footer>
    <div className="text-center text-sm text-gray-500 mb-10">© Copyright 2025 Mendleson Communication Pty Ltd</div>
    </>
  )
}
