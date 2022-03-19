import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InvitationService {
  url = 'https://json.extendsclass.com/bin/';

  constructor(private http: HttpClient) {}

  sendInvitation(invite: Object) {
    return this.http.post<any>(this.url, invite);
  }

  getInvitation(id: string) {
    return this.http.get<any>(`this.url/${id}`);
  }

  updateInvitation(invite: Object) {
    return this.http.post<any>(this.url, invite);
  }

  deleteInvitation(id: string) {
    return this.http.delete<any>(`this.url/${id}`);
  }
}
