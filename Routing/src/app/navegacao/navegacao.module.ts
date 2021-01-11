import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        MenuItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        HomeComponent,
        FooterComponent
    ],
})
export class NavegacaoModule {}