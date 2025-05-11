import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-academics',
  imports: [],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.scss'
})
export class AcademicsComponent implements AfterViewInit{
  activeSection: string = '';

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '-50% 0px -40% 0px',
      threshold: 0, // Trigger when 60% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    const sections = document.querySelectorAll('.academics-content-section');
    sections.forEach(section => observer.observe(section));
  }
}
