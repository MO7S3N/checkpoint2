import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitcard',
  templateUrl: './visitcard.component.html',
  styleUrls: ['./visitcard.component.css']
})
export class VisitcardComponent implements OnInit {
  nom = 'mohsen';
  prenom ='khefacha';
  job = 'etudiant';
  image = '2.jpg';
  cita = 'la vie est belle ';
  descr = 'ingenieur dinforamtique';
  cles = 'web angular html css ';
  constructor() { }

  ngOnInit(): void {
  }

}
