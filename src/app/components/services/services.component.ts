import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getDataServices().subscribe((response) => {
      this.services = response.sort((a, b) => a.id - b.id);
    });
  }

  goToContact(serviceId: number): void {
    this.router.navigate(['/contact'], { queryParams: { service: serviceId } });
  }
  
}