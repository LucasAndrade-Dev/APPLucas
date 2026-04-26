import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Tarefa } from "../tarefa";

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
emEdicao = false;
@Input() tarefa: Tarefa = new Tarefa("", false);
@Output() remover = new EventEmitter();
@Output() modificaTarefa = new EventEmitter();


}
