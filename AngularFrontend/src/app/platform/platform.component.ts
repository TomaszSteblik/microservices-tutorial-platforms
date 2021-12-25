import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../platform.service';
import { PlatformReadDto } from '../models/PlatformReadDto';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.less']
})

export class PlatformComponent implements OnInit {

  constructor(private platformService : PlatformService) { }

  platforms: PlatformReadDto[] = [];

  ngOnInit(): void {
    this.getPlatforms();
  }

  private getPlatforms(){
    this.platformService.getPlatforms().subscribe(platforms => {
      this.platforms = platforms;
      console.log(this.platforms);

    })
  }

}
