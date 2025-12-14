import { useDispatch, useSelector } from 'react-redux';
import { toggleLike, deleteUser } from '@/store/userSlice';
import { getAvatarUrl } from '@/services/userService';
import { Heart, Edit, Trash2, Mail, Phone, Globe, Building, MapPin } from 'lucide-react';

export default function UserCard({ user, onEdit }) {
  const dispatch = useDispatch();
  const likedUsers = useSelector(state => state.users.likedUsers);
  const isLiked = likedUsers.includes(user.id);

  const handleLike = () => {
    dispatch(toggleLike(user.id));
  };

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3">
        <img 
          src={getAvatarUrl(user.username)} 
          alt={user.name}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-800 truncate">{user.name}</h3>
          <p className="text-sm text-gray-600 truncate">@{user.username}</p>
        </div>
      </div>
      
      <div className="space-y-1.5 mb-4">
        <div className="flex items-center text-xs text-gray-600">
          <Mail className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <Phone className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
          <span className="truncate">{user.phone}</span>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <Globe className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
          <span className="truncate">{user.website}</span>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <Building className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
          <span className="truncate">{user.company.name}</span>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <MapPin className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
          <span className="truncate">{user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}</span>
        </div>
      </div>

      <div className="flex justify-around items-center space-x-2">
        <button
          onClick={handleLike}
          className={`flex items-center justify-center px-3 py-2 rounded-md transition-colors flex-1 ${
            isLiked 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          title={isLiked ? 'Unlike' : 'Like'}
        >
          <Heart 
            className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} 
          />
        </button>
        
        <button
          onClick={() => onEdit(user)}
          className="flex items-center justify-center px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex-1"
          title="Edit User"
        >
          <Edit className="w-4 h-4" />
        </button>
        
        <button
          onClick={handleDelete}
          className="flex items-center justify-center px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex-1"
          title="Delete User"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}