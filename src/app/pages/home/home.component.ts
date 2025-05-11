import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.slide-text');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          console.log('Observed:', entry.target);
          if (entry.isIntersecting) {
            console.log('Visible:', entry.target);
            (entry.target as HTMLElement).classList.add('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -150px 0px',  // 👈 shrink bottom detection zone
        threshold: 0.1
      }
    );
  
    elements.forEach(el => observer.observe(el));
  }  
}
