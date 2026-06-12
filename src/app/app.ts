import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLinkWithHref, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLinkWithHref
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private router = inject(Router)
  ngOnInit(): void {
    
    const last_route = localStorage.getItem(LOCALSTORAGE_LAST_VISIT_ROUTE_KEY)

    //Si existe alguna ruta previa guardada y no es la principal ir a esa ruta
    if(last_route && last_route !== '/'){
      this.router.navigateByUrl(last_route)
    }

    this.router.events.pipe(
      filter(
        (event): event is NavigationEnd =>  event instanceof NavigationEnd
      )
    )
    .subscribe(
      (event: NavigationEnd) => {
        //La ultima direccion la guardamos en localstorage
        localStorage.setItem(LOCALSTORAGE_LAST_VISIT_ROUTE_KEY, event.urlAfterRedirects)
      }
    )
  }
}

const LOCALSTORAGE_LAST_VISIT_ROUTE_KEY = 'lastVisitedRoute'