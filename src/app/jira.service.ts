import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JiraService {

  //private apiUri = 'https://kodgemisi.atlassian.net/rest/api/2/search?jql=project=%22BASVURU%22%20AND%20issuetype=%22Epic%22%20AND%20statusCategory=%22To%20Do%22+order+by+duedate&fields=id,key,summary,customfield_10008';
  private apiUri = './../../assets/mock/response.json';

  constructor(private http: Http) {
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map((response) => response.json())
      .subscribe((data) => console.log(data));
  }

  public getAll = (): Observable<Object[]> => {
    return this.http.get(this.apiUri)
      .map((response) => <Object[]>response.json());
  }

}
