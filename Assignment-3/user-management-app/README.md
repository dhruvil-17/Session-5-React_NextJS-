# User Management App

A Next.js application that replicates the functionality of the React Advanced Assignment, featuring user management with CRUD operations, state management, and API integration.

## Features

- **User Listing**: Displays users fetched from JSONPlaceholder API
- **Avatar Integration**: Uses DiceBear API for user avatars
- **Like System**: Toggle like/unlike for users with Redux state management
- **Edit Functionality**: Modal-based user editing with form validation
- **Delete Functionality**: Remove users from the list
- **State Management**: Redux Toolkit for managing user data and likes
- **Data Fetching**: TanStack Query for efficient API calls

## Tech Stack

- **Next.js 14** (App Router)
- **React** (JavaScript)
- **Redux Toolkit** for state management
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Endpoints

- **Users Data**: `https://jsonplaceholder.typicode.com/users`
- **Avatars**: `https://api.dicebear.com/9.x/personas/svg?seed={{username}}`

## Features Implementation

### State Management
- Redux store manages users list and liked users
- Actions for updating, deleting, and toggling likes
- All changes are frontend-only (no API calls for modifications)

### Components
- **UserCard**: Displays individual user information with action buttons
- **EditModal**: Modal form for editing user details
- **Main Page**: Grid layout showing all users with loading states

### Functionality
- **Like Button**: Toggles between liked/unliked states
- **Edit Button**: Opens modal with pre-filled user data
- **Delete Button**: Removes user from the list
- **Form Handling**: Updates user data in Redux store

The application maintains all state changes locally without making API calls for updates, as specified in the requirements.