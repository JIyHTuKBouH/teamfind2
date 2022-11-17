import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

  constructor() { }

  csgo = [ { nickname: "Vol4ok", kd: 1.25, dr: 98,  rank: "./assets/berkut.jpg"  }, { nickname: "Mimik", kd: 2, dr: 150,  rank: "./assets/berkut.jpg"  },  { nickname: "Liphi", kd: 0.2, dr: 3,  rank: "./assets/berkut.jpg"   } ]

  dota_2 = [ { nickname: "Vol4ok", kd: 1, mmr: 1026,  rank: "./assets/strag.png"  }, { nickname: "Mimik", kd: 3, mmr: 4253,  rank: "./assets/140px-SeasonalRank6-4.png"  },  { nickname: "Liphi", kd: 5, mmr:2444 ,  rank: "./assets/geroi.png"   } ]

  Team_Fortres_2 = [ { nickname: "Vol4ok", kd: 1.8, Main_class: "Pyro",  rank: "./assets/assassin2.png"  }, { nickname: "Mimik", kd: 1.0, Main_class: "Engineer",  rank: "./assets/exe3.png"  },  { nickname: "Liphi",  kd: 5.0, Main_class: "Solder",  rank: "./assets/assassin2.png"   } ]

  ngOnInit(): void {
  }

}
