import {Component} from "@angular/core";
@Component({
  selector: 'home-main',
  templateUrl: 'home-main.component.html',
  styleUrls: ['home-main.component.css']
})
export class HomeMainComponent {

  youtubeEmbedBassUrl: string = "https://www.youtube.com/embed/";
  wowheadLinkBaseUrl: string = "http://www.wowhead.com/";

  raidVideos = [
    {
      id: "taloc",
      bossName: "Taloc",
      youtubeUrl: `${this.youtubeEmbedBassUrl}CRR9glyQYUg`,
    },
    {
      id: "mother",
      bossName: "MOTHER",
      youtubeUrl: `${this.youtubeEmbedBassUrl}d3Et9e8OYMI`,
    },
    {
      id: "fetid-devourer",
      bossName: "Fetid Devourer",
      youtubeUrl: `${this.youtubeEmbedBassUrl}H-8LizAiKbw`,
    },
    {
      id: "vectis",
      bossName: "vectis",
      youtubeUrl: `${this.youtubeEmbedBassUrl}oJK7an7qlmA`,
    },
    {
      id: "zekvoz",
      bossName: "Zek'voz",
      youtubeUrl: `${this.youtubeEmbedBassUrl}8uPeKRXuiTQ`,
    },
    {
      id: "zul-reborn",
      bossName: "Zul Reborn",
      youtubeUrl: `${this.youtubeEmbedBassUrl}VpeAfPT51oQ`,
    },
    {
      id: "mythrax",
      bossName: "Mythrax",
      youtubeUrl: `${this.youtubeEmbedBassUrl}OKz4tnYNvs8`,
    },
    {
      id: "ghuun",
      bossName: "G'huun",
      youtubeUrl: `${this.youtubeEmbedBassUrl}fxMamsFlplk`,
    }
  ];

  navigateToRaidVideo(id: string) {
    window.location.hash = `#${id}`
  }

  navigateToTop() {
    window.location.hash = `#top`
  }

}
