import { PortFolio } from './port-folio';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getLoginApiUrl = "http://localhost:3000/user?username=";


  getPortFolioApiUrl = "http://localhost:3000/portfolioItems";
  getPorFolioById = "http://localhost:3000/portfolioItems/";
  AddPortFolioApiUrl = "http://localhost:3000/portfolioItems";
  updatePortFolioApiUrl = "http://localhost:3000/portfolioItems/";
  deletePortFolioApiUrl = "http://localhost:3000/portfolioItems/"

  getContactApiUrl = "http://localhost:3000/contacts";
  getContactByIdApiUrl = "http://localhost:3000/contacts/"
  addContactApiUrl = "http://localhost:3000/contacts";
  updateContactApiUrl = "http://localhost:3000/contacts/"
  DeleteContactApiUrl = "http://localhost:3000/contacts/"

  loginUser(email: string, password: string): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.getLoginApiUrl}?email=${email}&password=${password}`);
  }

  // Store the current user in local storage
  setCurrentUser(user: Users): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Retrieve the current user from local storage
  getCurrentUser(): Users | null {
    const jsonUser = localStorage.getItem('currentUser');
    return jsonUser ? JSON.parse(jsonUser) : null;
  }

  // Clear the current user from local storage
  clearCurrentUser(): void {
    localStorage.removeItem('currentUser');
  }

  // Logout method
  logout(): void {
    this.clearCurrentUser();
  }

  getPortFolioDetails(): Observable<PortFolio[]>{
   return this.http.get<PortFolio[]>(this.getPortFolioApiUrl);
  }

  getPortFolioById(id:string): Observable<PortFolio>{
    return this.http.get<PortFolio>(this.getPorFolioById + id)

  }

  AddPortFolio(data:PortFolio): Observable<PortFolio>{
    return this.http.post<PortFolio>(this.AddPortFolioApiUrl,data);
  }

  updatePortFolioItem(folioData:PortFolio):Observable<PortFolio>{
   return  this.http.put<PortFolio>(this.updatePortFolioApiUrl+folioData.id, folioData)
  }

  deletePortFolioItem(id:string | undefined):Observable<void>{
    return this.http.delete<void>(this.deletePortFolioApiUrl+id)

  }

  getContactDetails():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.getContactApiUrl)

  }

  addContactDetails(contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.addContactApiUrl,contact)

  }
  getContactById(id:string): Observable<Contact>{
    return this.http.get<Contact>(this.getContactByIdApiUrl + id)

  }

  updateContactDetails(contact:Contact):Observable<Contact>{
    return this.http.put<Contact>(this.updateContactApiUrl+contact.id, contact)
  }

  deleteContactDetails(id:string | undefined):Observable<void>{
    return this.http.delete<void>(this.DeleteContactApiUrl+id)

  }


}
