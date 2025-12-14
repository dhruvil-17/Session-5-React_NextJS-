import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/store/userSlice';
import { User, AtSign, Mail, Phone, Globe, Building, MapPin, Home, X, Save } from 'lucide-react';

export default function EditModal({ user, isOpen, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    company: { name: '' },
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    }
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Edit User</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <User className="w-4 h-4 mr-2 text-gray-700" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <AtSign className="w-4 h-4 mr-2 text-gray-700" />
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <Mail className="w-4 h-4 mr-2 text-gray-700" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <Phone className="w-4 h-4 mr-2 text-gray-700" />
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <Globe className="w-4 h-4 mr-2 text-gray-700" />
              Website
            </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <Building className="w-4 h-4 mr-2 text-gray-700" />
              Company
            </label>
            <input
              type="text"
              name="company.name"
              value={formData.company.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <Home className="w-4 h-4 mr-2 text-gray-700" />
              Street
            </label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <Home className="w-4 h-4 mr-2 text-gray-700" />
              Suite
            </label>
            <input
              type="text"
              name="address.suite"
              value={formData.address.suite}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <MapPin className="w-4 h-4 mr-2 text-gray-700" />
              City
            </label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-900 mb-1">
              <MapPin className="w-4 h-4 mr-2 text-gray-700" />
              Zipcode
            </label>
            <input
              type="text"
              name="address.zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors font-semibold"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-semibold"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}