// src/userService.js
export class UserService {
  constructor() {
    this.users = [];
    this.roles = ['admin', 'editor', 'viewer'];
  }

  getUser(id) {
    const user = this.users.find((u) => u.id === id);
    return { ...user, role: user?.role || 'viewer' };
  }
}
