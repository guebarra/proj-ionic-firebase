//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  private username: String;
  private password: String;

  constructor() {

  }

  createUser(name: String, user: String, pass: String){
    //comunicação com o servidor
  }
}
