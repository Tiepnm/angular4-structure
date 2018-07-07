export class MandrillService {
  user: string;

  setUser(newUser) {
    this.user = newUser;

  }

  getUser(): any {
    return this.user;
  }
}
