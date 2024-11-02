import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  title: string = "";

  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answersSelected: string = "";

  questionIndex = 0;
  questionMaxIndex = 0;

  finished: boolean = false
}
