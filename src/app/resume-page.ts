import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.html',
  styleUrls: ['./resume-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumePageComponent {
  protected readonly showResume = signal(false);

  constructor(title: Title) {
    title.setTitle("Gemini S. Powell's Resume");
  }

  protected revealResume(): void {
    this.showResume.set(true);
  }
}
