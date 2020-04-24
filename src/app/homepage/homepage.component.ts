import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

declare let gtag;
@Component({
  selector: 'tac-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private metaTagService: Meta, public router: Router) {
    router.events.subscribe((y: NavigationEnd) => {
      if (y instanceof NavigationEnd) {
        gtag('config', 'UA-122223071-3', { 'page_path': y.url });
      }
    })
  }


  ngOnInit(): void {
    this.metaTagService.addTags([
      { property: 'name:description', content: 'An NGO Obliged to bringing together Law Enforcement Agents, Academia and Subject Matter Experts to curb technology aided crime ' },
      //Facebook Meta Tags
      { property: 'og:url', content: 'https://summit.tacafrica.org/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Technology Against Crime' },
      { property: 'og:description', content: 'An NGO Obliged to bringing together Law Enforcement Agents, Academia and Subject Matter Experts to curb technology aided crime ' },
      { property: 'og:image', content: "https://res.cloudinary.com/silva/image/upload/v1587214049/tac-big.png" },

      //Twitter Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'TAC Africa Drone Summit' },
      { name: 'twitter:description', content: 'An NGO Obliged to bringing together Law Enforcement Agents, Academia and Subject Matter Experts to curb technology aided crime ' },
      { name: 'twitter:image', content: "https://res.cloudinary.com/silva/image/upload/v1587214049/tac-big.png" },

      //Google / Search Engine Tags
      { property: 'itemprop:name', content: 'TAC Africa Drone Summit' },
      { property: 'itemprop:description', content: 'An NGO Obliged to bringing together Law Enforcement Agents, Academia and Subject Matter Experts to curb technology aided crime ' },
      { property: 'itemprop:image', content: "https://res.cloudinary.com/silva/image/upload/v1587214049/tac-big.png" },
    ], true);
  }
}