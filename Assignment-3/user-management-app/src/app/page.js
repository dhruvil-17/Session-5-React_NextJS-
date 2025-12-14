'use client';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers } from '@/services/userService';
import { setUsers } from '@/store/userSlice';
import UserCard from '@/components/UserCard';
import EditModal from '@/components/EditModal';

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Error loading users: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          User Management App
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {users.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onEdit={handleEdit}
            />
          ))}
        </div>

        <EditModal 
          user={editingUser}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}