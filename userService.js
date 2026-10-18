// src/userService.js
export class UserService {
  constructor() {
    this.users = [];
  }

  getUser(id) {
    return this.users.find((u) => u.id === id);
  }
}
