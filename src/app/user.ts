export class User {
  name: string;
  roles: string[];

  constructor(name: string, roles: string[]) {
    this.name = name;
    this.roles = roles;
  }

  isAdmin(): boolean {
    return this.roles.indexOf('admin') >= 0;
  }
}
