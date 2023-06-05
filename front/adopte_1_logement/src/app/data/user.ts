export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  role: string;
  [key: string]: string;
}

export class AppComponent {
  user: User = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    role: '',
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
