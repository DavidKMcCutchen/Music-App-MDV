import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from "@ngrx/store";
import { CoreDataModule } from '@music-app/core-data';
import { reducers } from '.';
import { SongsEffects } from './songs/songs.effects';

const store_name = 'Songs Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([SongsEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})
export class CoreStateModule {}
