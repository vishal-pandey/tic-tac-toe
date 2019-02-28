import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  game = []
  thegame = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
  m = 'X';
  message = "";
  state = 0;

  play(i){
  	if (this.state) {
  		return
  	}
  	if (this.game[i] == 'X' || this.game[i] == 'O') {
  		return
  	}
  	this.game[i] = this.m;
  	this.m = this.m=='X'?'O':'X';
  	if (this.game[i] == 'X') {
  		this.thegame[i] = 1;
  	}else if(this.game[i] == 'O'){
  		this.thegame[i] = 0;
  	}
  	console.log(this.game);
  	console.log(this.thegame);
  	this.checkGame()
  }

  reset(){
  	this.game = [];
  	this.thegame = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
  	this.state = 0;
  	this.message = "";
  	this.m = 'X';
  }

  checkGame(){
  	if ((this.thegame[0] != -1) && (this.thegame[0] == this.thegame[1]) && (this.thegame[1] == this.thegame[2])) {
  		// alert(this.game[0]+"Won")
  		this.message = this.game[0] + " Won";
  		this.state = 1;
  		return
  	}
  	if ((this.thegame[3] != -1) && (this.thegame[3] == this.thegame[4]) && (this.thegame[4] == this.thegame[5])) {
  		// alert(this.game[3]+"Won")
  		this.message = this.game[3] + " Won";
  		this.state = 1;
  		return
  	}
  	if ((this.thegame[6] != -1) && (this.thegame[6] == this.thegame[7]) && (this.thegame[7] == this.thegame[8])) {
  		// alert(this.game[6]+"Won")
  		this.message = this.game[6] + " Won";
  		this.state = 1;
  		return
  	}
  	if ((this.thegame[0] != -1) && (this.thegame[0] == this.thegame[3]) && (this.thegame[3] == this.thegame[6])) {
  		// alert(this.game[0]+"Won")
  		this.message = this.game[0] + " Won";
  		this.state = 1;
  		return
  	}
  	if ((this.thegame[1] != -1) && (this.thegame[1] == this.thegame[4]) && (this.thegame[4] == this.thegame[7])) {
  		// alert(this.game[1]+"Won")
  		this.message = this.game[1] + " Won";
  		this.state = 1;
  		return
  	}
  	if ((this.thegame[2] != -1) && (this.thegame[2] == this.thegame[5]) && (this.thegame[5] == this.thegame[8])) {
  		// alert(this.game[2]+"Won")
  		this.message = this.game[2] + " Won";
  		this.state = 1;
  		return
  	}
  	if ((this.thegame[0] != -1) && (this.thegame[0] == this.thegame[4]) && (this.thegame[4] == this.thegame[8])) {
  		// alert(this.game[0]+"Won")
  		this.message = this.game[0] + " Won";
  		this.state = 1;
  		return
  	}
  	if ((this.thegame[2] != -1) && (this.thegame[2] == this.thegame[4]) && (this.thegame[4] == this.thegame[6])) {
  		// alert(this.game[2]+"Won")
  		this.message = this.game[2] + " Won";
  		this.state = 1;
  		return
  	}

  	for(var x of this.thegame){
	  	console.log(x);
  		if (x === -1) {
  			return
  		}
  	}
  	this.message = "Draw";
  }

}
