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
      id: "goroth",
      bossName: "Goroth",
      youtubeUrl: `${this.youtubeEmbedBassUrl}w04v2V8V7Y8`,
      wowheadLink: `${this.wowheadLinkBaseUrl}goroth-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "demonic-inquisition",
      bossName: "Demonic Inquisition",
      youtubeUrl: `${this.youtubeEmbedBassUrl}7GB071_cQlA`,
      wowheadLink: `${this.wowheadLinkBaseUrl}demonic-inquisition-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "harjatan",
      bossName: "Harjatan",
      youtubeUrl: `${this.youtubeEmbedBassUrl}unJeZoac0mw`,
      wowheadLink: `${this.wowheadLinkBaseUrl}harjatan-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "mistress-sasszine",
      bossName: "Mistress Sassz'ine",
      youtubeUrl: `${this.youtubeEmbedBassUrl}r31-jWqLOPw`,
      wowheadLink: `${this.wowheadLinkBaseUrl}mistress-sasszine-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "sisters-of-the-moon",
      bossName: "Sisters of the Moon",
      wowheadLink: `${this.wowheadLinkBaseUrl}sisters-of-the-moon-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "maiden-of-vigilance",
      bossName: "Maiden of Vigilance",
      youtubeUrl: `${this.youtubeEmbedBassUrl}f2va3KPFZHs`,
      wowheadLink: `${this.wowheadLinkBaseUrl}maiden-of-vigilance-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "fallen-avatar",
      bossName: "Fallen Avatar",
      youtubeUrl: `${this.youtubeEmbedBassUrl}_h9jW41xeHw`,
      wowheadLink: `${this.wowheadLinkBaseUrl}fallen-avatar-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "kiljaeden",
      bossName: "Kil'Jaeden",
      youtubeUrl: `${this.youtubeEmbedBassUrl}GKL-wDCKwCk`,
      wowheadLink: `${this.wowheadLinkBaseUrl}kiljaeden-tomb-of-sargeras-raid-strategy-guide`,
      ptr:true
    },
  ]

  navigateToRaidVideo(id: string) {
    window.location.hash = `#${id}`
  }

  navigateToTop() {
    window.location.hash = `#top`
  }

}
