import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = [
    {
      id: "5411d",
      name: "Ritwik",
      team: "ETA2",
      skills: [
        'C++', 'Javascript', 'java'
      ],
      challanges: 2
    },
    {
      id: "5411d",
      name: "Aditiya",
      team: "ETA3",
      skills: [
        'Eclipse', 'Javascript', 'java'
      ],
      challanges: 2
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
