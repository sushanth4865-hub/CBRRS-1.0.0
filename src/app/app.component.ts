import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'cbrrs-frontend';

  ngAfterViewInit(): void {
    const header = document.getElementById('main-header');
    const content = document.getElementById('page-content');

    if(header && content)
    {
      const headerHeight = header.offsetHeight;
      content.style.marginTop = '${}px';
    }
  }
}
