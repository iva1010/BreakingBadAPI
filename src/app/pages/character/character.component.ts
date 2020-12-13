import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../core/models/character';
import {CharacterApiService} from '../../core/servises/character.service';
import { Status } from '../../core/models/status';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  [x: string]: any;
  status: Status = 'allCharacters';
  characters: Observable<Character[]> = this.apiService.loadCharacters();
  name = '';
  seasonNumber = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  onSetStatus(status: Status): void {
    this.status = status;
  }

  onSetSeason(seasonNumber: number): void {
    this.seasonNumber = seasonNumber;
  }
  constructor(private apiService: CharacterApiService, private router: Router) {
  }
}
