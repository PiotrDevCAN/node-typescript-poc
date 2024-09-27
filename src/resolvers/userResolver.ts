interface User {
    id: string;
    name: string;
    email: string;
  }
  
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
  ];
  
  export const userResolver = {
    getUser: ({ id }: { id: string }): User | undefined => users.find(user => user.id === id),
  };
  