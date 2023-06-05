export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class AppComponent {
  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };



  onSubmitted(user: User) {
    this.user = user;
  }
}

export interface Review {
  author: string;
  date: string;
  content: string;
  useful: number;
  useless: number;
};
