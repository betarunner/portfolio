import { Component } from '@angular/core';

@Component({
  selector: 'app-auditions',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  scrollToSection(sectionId: string): void {
    // remove active class from all tabs
    document.querySelectorAll('.tab-option').forEach(tab => {
      tab.classList.remove('active');
    });
  
    // add active class to the clicked tab
    document.querySelector(`.tab-option[click*="${sectionId}"]`)?.classList.add('active');

    const element = document.querySelector('#' + sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 200; // Adjust 200 to the desired offset
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}
  
}

