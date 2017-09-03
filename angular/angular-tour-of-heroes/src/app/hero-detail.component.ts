import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))) // '+' converts string id to int id
      .subscribe(hero => this.hero = hero);
  }

  // In the real app should us CanDeactivate to not go too far, i.e. out of the app
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
