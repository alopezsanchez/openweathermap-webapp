import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ow-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  canGoBack(): boolean {
    // For simplicity, only show back button when we are in a city detail route
    const re = /cities\/\d/;
    return re.test(this.location.path());
  }
}
