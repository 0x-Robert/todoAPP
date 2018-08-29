import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import todos from '../../data/todos';


/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage implements OnInit {

  todo:{
     id:number,
     title:string,
     description: string,
     complete:boolean
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
    //아이온제공
  }


  ngOnInit(){
    
    this.todo =Object.assign({},  this.getTodo(
      this.navParams.get('id')));

    //console.log(this.navParams.get('id')); 디버깅용
    //앵귤러제공
    //취향차이로 초기에 시작되는 함수 

  }

  getTodo(todoId){
      for(let todo of todos){
        if( todo.id == todoId){
          return todo;

        }
      }
      return undefined;
  }

  updateTodo(){
    todos[this.todo.id-1]=this.todo;
    this.navCtrl.popToRoot();
    
  }

}
