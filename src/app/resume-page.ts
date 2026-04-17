import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.html',
  styleUrls: ['./resume-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class ResumePageComponent {
  constructor(title: Title) {
    title.setTitle("Gemini S. Powell's Resume");
  }
}
