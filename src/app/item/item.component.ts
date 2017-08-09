import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {JiraService} from './../jira.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ItemComponent implements OnInit {

  public items;
  public counter: number;

  private alive: boolean;
  private display: boolean;
  private timer: Observable<number>;
  private interval: number;

  constructor(private jiraService: JiraService) {
    this.alive = true;
    this.display = false;
    this.interval = 4000;
    this.timer = Observable.timer(0, this.interval);
  }

  ngOnInit() {
    this.timer
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.jiraService.getAll()
          .subscribe((data) => {
            this.items = data,
              console.log(this.items),
              error => console.log(error),
              () => console.log(data);

          });
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
