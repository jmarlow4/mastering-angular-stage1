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
      useFactory: onAppInit1,
      multi: true,
      deps: [DexieService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function onAppInit1(_dexieService: DexieService): () => Promise<any> {
  let dbUsers = _dexieService.table('users');
  dbUsers.put({email: 'dderp1', password: 'hherp1', uuid: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462'})
    .then((id) => {
      console.log(id);
    });
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log(`${new Date()} onAppInit1:: inside promise`);

      setTimeout(() => {
        console.log(`${new Date()} onAppInit1:: inside setTimeout`);
        // doing something
        // ...
        resolve();
      }, 3000);
    });
  };
}
