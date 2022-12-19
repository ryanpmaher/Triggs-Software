import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/shared/services/config.service";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.css"],
})
export class ContactPageComponent implements OnInit {
  // intro: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];
  intro$: Observable<any> = new Observable();
  features$: Observable<any> = new Observable();

  // features: {
  //   id: number;
  //   icon: string;
  //   title: string;
  //   description: string;
  // }[];

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.getPageData("pages", 1);
    this.getBlockData("features");
  }

  getPageData(database: string, id?: number): void {
    this.intro$ = this.config.getSettings(database, id);
  }

  getBlockData(database: string) {
    // this.config.getSettings(database).subscribe((data) => {
    //   this.features = data;
    //   console.log("features: ", this.features);
    // });
    this.features$ = this.config.getSettings(database);
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
