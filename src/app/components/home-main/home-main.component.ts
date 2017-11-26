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
      id: "garothi-worldbreaker",
      bossName: "Garothi Worldbreaker",
      youtubeUrl: `${this.youtubeEmbedBassUrl}_p_J8TwJtAw`,
      wowheadLink: `${this.wowheadLinkBaseUrl}garothi-worldbreaker-antorus-the-burning-throne-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "felhounds-of-sargeras",
      bossName: "Felhounds of Sargeras",
      youtubeUrl: `${this.youtubeEmbedBassUrl}DejkuitW6UI`,
      wowheadLink: `${this.wowheadLinkBaseUrl}felhounds-of-sargeras-antorus-the-burning-throne-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "antoran-high-command",
      bossName: "Antoran High Command",
      youtubeUrl: `${this.youtubeEmbedBassUrl}2i_nKvR7878`,
      wowheadLink: `${this.wowheadLinkBaseUrl}antoran-high-command-antorus-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "portal-keeper-hasabel",
      bossName: "Portal Keeper Hasabel",
      youtubeUrl: `${this.youtubeEmbedBassUrl}rrKgZXSIUo0`,
      ptr:true
    },
    {
      id: "eonar-the-life-binder",
      bossName: "Eonar the Life-Binder",
      youtubeUrl: `${this.youtubeEmbedBassUrl}TQ4o9kHEess`,
      ptr:true
    },
    {
      id: "imonar-the-soulhunter",
      bossName: "Imonar the Soulhunter",
      youtubeUrl: `${this.youtubeEmbedBassUrl}DfSqXOVs0mY`,
      ptr:true
    },
    {
      id: "kingaroth",
      bossName: "Kin'garoth",
      youtubeUrl: `${this.youtubeEmbedBassUrl}CiznHWgehbA`,
      ptr:true
    },
    {
      id: "varimathras",
      bossName: "Varimathras",
      youtubeUrl: `${this.youtubeEmbedBassUrl}UsL_vUIVTv8`,
      wowheadLink: `${this.wowheadLinkBaseUrl}varimathras-antorus-the-burning-throne-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "the-coven-of-shivarra",
      bossName: "The Coven of Shivarra",
      youtubeUrl: `${this.youtubeEmbedBassUrl}ncpVUaFNYJE`,
      wowheadLink: `${this.wowheadLinkBaseUrl}coven-of-shivarra-antorus-the-burning-throne-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "aggramar",
      bossName: "aggramar",
      youtubeUrl: `${this.youtubeEmbedBassUrl}ii02D6XkLeM`,
      wowheadLink: `${this.wowheadLinkBaseUrl}aggramar-antorus-the-burning-throne-raid-strategy-guide`,
      ptr:true
    },
    {
      id: "argus-the-unmaker",
      bossName: "Argus the Unmaker",
      youtubeUrl: `${this.youtubeEmbedBassUrl}H0lEq7RPVx4`,
      wowheadLink: `${this.wowheadLinkBaseUrl}argus-the-unmaker-antorus-the-burning-throne-raid-strategy-guide`,
      ptr:true
    }
  ];

  navigateToRaidVideo(id: string) {
    window.location.hash = `#${id}`
  }

  navigateToTop() {
    window.location.hash = `#top`
  }

}
