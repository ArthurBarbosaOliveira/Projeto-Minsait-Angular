import {Injectable} from '@angular/core';
import {environment} from "../../app/environment/environment";
import {HttpClient} from "@angular/common/http";
import {IClient} from "../interface/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  endpoint = 'clientes';
  api = environment.api;

  constructor(private http: HttpClient) {
  }

  getAllClients() {
    return this.http.get<IClient[]>(this.api + this.endpoint);
  }

  getClientByCpf(cpf: string) {
    return this.http.get<IClient>(this.api + this.endpoint + '/' + cpf);
  }

  createClient(client: IClient) {
    return this.http.post<IClient>(this.api + this.endpoint, client);
  }

  updateClient(client: IClient, cpf: string) {
    return this.http.put<IClient>(this.api + this.endpoint + '/' + cpf, client);
  }

  deleteClient(cpf: string) {
    return this.http.delete(this.api + this.endpoint + '/' + cpf);
  }
}
