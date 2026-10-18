export class UserService {
  constructor() {
    this.users = [];
  }

  getUser(id) {
    console.log(`Fetching user with ID: ${id}`);
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new Error('User not found');
    return user;
  }
}
