export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

export const getAvatarUrl = (username) => {
  return `https://api.dicebear.com/9.x/personas/svg?seed=${username}`;
};