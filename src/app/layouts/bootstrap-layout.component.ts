import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './bootstrap-layout.component.html'
})
export class BootstrapLayoutComponent implements OnInit {
  constructor(private router: Router) {
    
  }
  ngOnInit(): void { }
}
