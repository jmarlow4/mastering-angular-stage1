import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatIconRegistry, MatInputModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthModule } from './modules/auth/auth.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DexieService } from './services/dexie.service';
import { initDefaultUser } from './dexie-db.initializer';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AuthModule.forRoot()
  ],
  providers: [
    MatIconRegistry,
    DexieService,
    {
      provide: APP_INITIALIZER,
      useFactory: initDefaultUser,
      multi: true,
      deps: [DexieService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
