export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  [key: string]: string;
}

export class AppComponent {
  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
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
