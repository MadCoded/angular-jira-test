import {Component, ViewEncapsulation} from '@angular/core';
import {JiraService} from './jira.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private jiraService: JiraService) {
  }

  ngOnInit() {

  }
}
