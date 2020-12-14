import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../core/models/character';
import {CharacterApiService} from '../../core/servises/character.service';
import { Status } from '../../core/models/status';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  [x: string]: any;
  status: Status = 'allCharacters';
  characters: Observable<Character[]> = this.apiService.loadCharacters();
  name = '';
  seasonNumber = 0;
  page: number;
  pageSize: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: CharacterApiService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.page = +this.route.snapshot.queryParams['page'] -1 || 0;
    this.pageSize = +this.route.snapshot.queryParams['pageSize'] || 10;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: (this.page + 1),
        pageSize: this.pageSize
      },
      queryParamsHandling: 'merge'});
  }

  onSetStatus(status: Status): void {
    this.status = status;
  }

  onSetSeason(seasonNumber: number): void {
    this.seasonNumber = seasonNumber;
  }

  changePage(pageEvent: PageEvent): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: pageEvent.pageIndex + 1,
        pageSize: pageEvent.pageSize
      },
      queryParamsHandling: 'merge'
    });
    this.page = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }

}
