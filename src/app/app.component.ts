import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IntroductionComponent } from './components/directive/introduction/introduction.component';
import { LifecycleHooksComponent } from './components/directive/lifecycle-hooks/lifecycle-hooks.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    NavbarComponent,
    SidebarComponent,
    DirectiveComponent,
    IntroductionComponent,
    LifecycleHooksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular17trial';
}
