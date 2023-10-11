import { Component } from '@angular/core';

@Component({
  selector: 'app-auditions',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  currentPhotoIndex = 0;
  photos = [
    'assets/tritone project/1.png',
    'assets/tritone project/2.png',
    'assets/tritone project/3.png',
    'assets/tritone project/4.png',
    'assets/tritone project/5.png',
  ];

  scrollToSection(sectionId: string): void {
    // remove active class from all tabs
    document.querySelectorAll('.tab-option').forEach(tab => {
      tab.classList.remove('active');
    });
  
    // add active class to the clicked tab
    document.querySelector(`.tab-option[click*="${sectionId}"]`)?.classList.add('active');

    const element = document.querySelector('#' + sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 0;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

  private updatePhotoSrc(): void {
    const imgElement = document.querySelector('#photo') as HTMLImageElement;
    if (imgElement) {
      imgElement.src = this.photos[this.currentPhotoIndex];
    }
  }

  ngOnInit(): void {
    this.updatePhotoSrc();
  }

  getNextPhoto(): void {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
    this.updatePhotoSrc();
  }

  getPrevPhoto(): void {
    this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.photos.length) % this.photos.length;
    this.updatePhotoSrc();
  }
  
}

