import { Component } from '@angular/core';

@Component({
  selector: 'home-main',
  templateUrl: 'home-main.component.html',
  styleUrls: ['home-main.component.css']
})
export class HomeMainComponent {

  youtubeEmbedBassUrl: string = "https://www.youtube.com/embed/";

  raidVideos = [
    {id:"skorpyron", bossName:"Skorpyron", youtubeUrl: `${this.youtubeEmbedBassUrl}ZfGTCLNTxIw`},
    {id:"chronomatic-anomaly",bossName:"Chronomatic Anomaly", youtubeUrl: `${this.youtubeEmbedBassUrl}xCRT1OmH3Io`},
    {id:"trilliax",bossName:"Trilliax", youtubeUrl: `${this.youtubeEmbedBassUrl}xbUDaWIj2Zw`},
    {id:"spellblade-aluriel",bossName:"Spellblade Aluriel", youtubeUrl: `${this.youtubeEmbedBassUrl}IEy1JBsh5-Y`},
    {id:"krosus",bossName:"Krosus", youtubeUrl: `${this.youtubeEmbedBassUrl}wbKBcQCpNio`},
    {id:"high-botanist-telarn",bossName:"High Botanist Tel'arn", youtubeUrl: `${this.youtubeEmbedBassUrl}UEwFsHxaNzM`},
    {id:"tichondrius",bossName:"Tichondrius", youtubeUrl: `${this.youtubeEmbedBassUrl}72H_dmJFi0g`},
  ]

  navigateToRaidVideo(id:string){
    window.location.hash = `#${id}`
  }

  navigateToTop(){
    window.location.hash = `#top`
  }

}
