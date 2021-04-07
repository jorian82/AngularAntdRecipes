import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AntdDecoratorsModule } from './app-antd.module';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { AppHeaderComponent } from './components/navigation/app-header/app-header.component';
import { AppFooterComponent } from './components/navigation/app-footer/app-footer.component';
import { PageNotFoundComponent } from './components/navigation/page-not-found/page-not-found.component';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecipesBookComponent } from './components/recipes-book/recipes-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesListComponent } from './components/recipes-book/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/recipes-book/recipes-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipes-book/recipe-details/recipe-details.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeStartComponent } from './components/recipes-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes-book/recipe-edit/recipe-edit.component';
import { IngredientsListComponent } from './components/shared/ingredients-list/ingredients-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    WelcomeComponent,
    RecipesBookComponent,
    ShoppingListComponent,
    PageNotFoundComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    IngredientsListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntdDecoratorsModule,
    AppRoutingModule
  ],
  providers: [ ShoppingListService, { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
