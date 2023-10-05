import { Component } from '@angular/core';

import { ActivityService } from './../activity.service';

@Component({
  selector: './app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})

export class ActivitiesListComponent {
  activities = [];

  constructor(private activityService: ActivityService){ }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.activityService.listByUser()
      .then(result => {
        this.activities = result;
      });
  }

}
