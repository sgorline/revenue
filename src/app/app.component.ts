import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy, OnInit {

  // ---------- PUBLIC MEMBERS ---------- //

  public url: string = '';

  // ---------- PRIVATE MEMBERS ---------- //

  private routerSubscription: Subscription | undefined;

  constructor(
    private router: Router
  ) {

  }

  // ---------- LIFECYCLE HOOKS ---------- //

  ngOnInit(): void {
    this.createRouteListener();
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  // ---------- PUBLIC METHODS ---------- //



  // ---------- PRIVATE METHODS ---------- //

  private createRouteListener(): void {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

}
