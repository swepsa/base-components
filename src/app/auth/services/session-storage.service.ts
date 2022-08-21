import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private key = "myKey";
  constructor() { }

  setToken(token: string): void {
    sessionStorage.setItem(this.key, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.key);
  }

  deleteToken(): void {
    sessionStorage.removeItem(this.key);
  }
}
