import { Component } from '@angular/core';
import { Api } from "../../service/api/api";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  users: any = [];

  constructor(private userService: Api) {}

  async ngOnInit() {
    await this.userService.getUsers().then(data => {
      let temp: any = data;
      this.users = temp[0]
    })

    console.log(this.users)
  }

}
