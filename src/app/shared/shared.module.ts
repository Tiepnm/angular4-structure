import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./layout/header/header.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ArticleComponent, HeaderComponent],
  exports:[ArticleComponent, HeaderComponent]
})
export class SharedModule { }
