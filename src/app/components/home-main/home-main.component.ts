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
      youtubeUrl: `${this.youtubeEmbedBassUrl}tojekfRoRZo`,
      wowheadLink: `${this.wowheadLinkBaseUrl}goroth-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "demonic-inquisition",
      bossName: "Demonic Inquisition",
      youtubeUrl: `${this.youtubeEmbedBassUrl}VlReQe6usE4`,
      wowheadLink: `${this.wowheadLinkBaseUrl}demonic-inquisition-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "harjatan",
      bossName: "Harjatan",
      youtubeUrl: `${this.youtubeEmbedBassUrl}YWh8Ehreyw4`,
      wowheadLink: `${this.wowheadLinkBaseUrl}harjatan-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "mistress-sasszine",
      bossName: "Mistress Sassz'ine",
      youtubeUrl: `${this.youtubeEmbedBassUrl}tZHqoHb5FUc`,
      wowheadLink: `${this.wowheadLinkBaseUrl}mistress-sasszine-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "sisters-of-the-moon",
      bossName: "Sisters of the Moon",
      youtubeUrl: `${this.youtubeEmbedBassUrl}MDOltN4C6JI`,
      wowheadLink: `${this.wowheadLinkBaseUrl}sisters-of-the-moon-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "the-desolate-host",
      bossName: "The Desolate Host",
      youtubeUrl: `${this.youtubeEmbedBassUrl}8kytyL11Yb4`,
      wowheadLink: `${this.wowheadLinkBaseUrl}the-desolate-host-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "maiden-of-vigilance",
      bossName: "Maiden of Vigilance",
      youtubeUrl: `${this.youtubeEmbedBassUrl}ReMMpkeSF9g`,
      wowheadLink: `${this.wowheadLinkBaseUrl}maiden-of-vigilance-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "fallen-avatar",
      bossName: "Fallen Avatar",
      youtubeUrl: `${this.youtubeEmbedBassUrl}dKxly3cyrTs`,
      wowheadLink: `${this.wowheadLinkBaseUrl}fallen-avatar-tomb-of-sargeras-raid-strategy-guide`,
    },
    {
      id: "kiljaeden",
      bossName: "Kil'Jaeden",
      youtubeUrl: `${this.youtubeEmbedBassUrl}Gr1pkCpIiYI`,
      wowheadLink: `${this.wowheadLinkBaseUrl}kiljaeden-tomb-of-sargeras-raid-strategy-guide`,
    },
  ]

  navigateToRaidVideo(id: string) {
    window.location.hash = `#${id}`
  }

  navigateToTop() {
    window.location.hash = `#top`
  }

}
