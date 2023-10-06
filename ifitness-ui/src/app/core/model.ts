import * as moment from 'moment';

export class User {
  id!: number;

  constructor(){
    this.id = 1;
  }
}

export class Activity {
  id!: number;
  type!: 'CAMINHADA';
  data!: Date;
  distance!: number;
  duration!: number;
  user = new User();

  static toJson(activity: Activity): any {
    return {
      id: activity.id,
      type: activity.type,
      data: moment(activity.data).format('DD/MM/YYYY'),
      distance: activity.distance,
      duration: activity.duration,
      user: activity.user
    }
  }
}
