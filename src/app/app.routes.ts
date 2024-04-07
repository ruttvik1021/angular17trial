import { Routes } from '@angular/router';
import { IntroductionComponent } from './components/directive/introduction/introduction.component';
import { Angular17Component } from './components/directive/introduction/angular17/angular17.component';
import { LifecycleHooksComponent } from './components/directive/lifecycle-hooks/lifecycle-hooks.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { RoutingComponent } from './components/routing/routing.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { PipeComponent } from './components/pipes/pipes.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
    children: [{ path: 'angular17', component: Angular17Component }],
  },

  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'lifecyclehooks', component: LifecycleHooksComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'service', component: CommunicationComponent },
  { path: 'pipes', component: PipeComponent },
  { path: 'game', component: GameComponent },
  // {path: "subject", component: SubjectComponent},
  // {path: "form", component: FormComponent},
  // {path: "form2", component: Form2Component}
];
