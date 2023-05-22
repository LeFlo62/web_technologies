import { Injectable } from '@angular/core';
import { User } from "app/data/user";

@Injectable({providedIn: 'root'})
export class UserService {
    
    static getUsersData() : User[] {
        return [
            {"id": "1", "firstname": "Jack", "lastname":"Maxer","image":""},
            {"id": "2","firstname": "Julia", "lastname":"Tungsten", "image":""},
            {"id": "3","firstname": "Julia", "lastname":"Tungsten", "image":""},
            {"id": "4","firstname": "Bill", "lastname":"Tungsten","image":""},
            {"id": "5","firstname": "Fred", "lastname":"Tungsten", "image":""},
            {"id": "6","firstname": "Gontrand", "lastname":"Vessalius", "image":""},
            {"id": "7","firstname": "Aminatou", "lastname":"Ralotomalala", "image":""},
            {"id": "8","firstname": "Aymen", "lastname":"BenAli", "image":""},
            {"id": "9","firstname": "Louis", "lastname":"Ekobo", "image":""},
            {"id": "10","firstname": "Geoffroy", "lastname":"DelaForêt", "image":""},
            {"id": "11","firstname": "Charles", "lastname":"Malotru", "image":""},
            {"id": "12","firstname": "Richard", "lastname":"Monarc", "image":""},
            {"id": "13","firstname": "Pierre", "lastname":"DelaRiviere", "image":""},
            {"id": "14","firstname": "Benjamin", "lastname":"leChampion", "image":""},
            {"id": "15","firstname": "Olivier", "lastname":"Armstrong", "image":""},
            {"id": "16","firstname": "Jonathan", "lastname":"Nathan", "image":""},
            {"id": "17","firstname": "Fred", "lastname":"Mix", "image":""},
            {"id": "18","firstname": "Victoria", "lastname":"Vangard", "image":""},
            {"id": "19","firstname": "Jonathan", "lastname":"Joestar", "image":""},
            {"id": "20","firstname": "Jotaro", "lastname":"Joestar", "image":""},
            {"id": "21","firstname": "Introduction", "lastname":"Alia", "image":""},
            {"id": "22","firstname": "Pikachu", "lastname":"Hughes", "image":""},
            {"id": "23","firstname": "Marc", "lastname":"Panier", "image":""},
            ];
    }


}
