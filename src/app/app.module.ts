import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHighlightDirective } from './app-highlight.directive';
import { AppNotDirective } from './app-not.directive';
import { DefaultPipe } from './default.pipe';
import { MyPipePipe } from './my-pipe.pipe';
import { NgLoopDirective } from './ng-loop.directive';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    AppNotDirective,
    DefaultPipe,
    MyPipePipe,
    NgLoopDirective,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
