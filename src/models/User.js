import { WEEKDAY } from "../constants/weekday";

export class User {
  constructor(data) {
    this.fullName = `${data.name.title} ${data.name.first} ${data.name.last}`;
    this.avatar = data.picture.thumbnail;
    this.largeAvatar = data.picture.large;
    this.birthday = this.getFormattedDate(data.dob);
    this.location = data.location;
    this.phone = data.phone;
    this.email = data.email;
    this.gender = data.gender;
    this.nationality = data.nat;
  }

  getFormattedDate(data) {
    const [d, t] = data.date.split("T");
    const [time] = t.split(".");
    const dayOfWeek = new Date(data.date).getDay();

    const date = d.split("-").reverse().join("/");
    const birth = `${WEEKDAY[dayOfWeek]}, ${date}, ${time}`;
    const age = `${data.age} years`;

    return { birth, age };
  }
}
