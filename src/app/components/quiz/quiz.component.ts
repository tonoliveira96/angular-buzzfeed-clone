import { Component, OnInit } from '@angular/core';
import quiz_question from "../../../assets/data/quizz-question.json";
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  title: string = "";

  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answersSelected: string = "";

  questionIndex = 0;
  questionMaxIndex = 0;

  finished: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (quiz_question) {
      this.finished = false;
      this.title = quiz_question.title;

      this.questions = quiz_question.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
      console.log(this.questionSelected);
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer = await this.checkResult(this.answers);
      this.finished = true;
      this.answersSelected = quiz_question.result[finalAnswer as keyof typeof quiz_question.result];
    }
  }

  async checkResult(anwsers: string[]) {
    const result = anwsers.reduce((prev, current, index, array) => {
      if (array.filter(item => item === prev).length > array.filter(item => item === current).length) {
        return prev;
      } else {
        return current;
      }
    });
    return result;
  }

}
