import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  // ---------- PUBLIC MEMBERS ---------- //

  public url: string = '';

  constructor(
    private router: Router
  ) { }

  // ---------- LIFECYCLE HOOKS ---------- //

  ngOnInit(): void {
    this.createRouteListener();
  }

  // ---------- PUBLIC METHODS ---------- //

  public createRouteListener(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

}
