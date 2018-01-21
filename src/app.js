import {DialogService} from 'aurelia-dialog';
import {Prompt} from './prompt';

export class App {
  static inject = [DialogService];

  message = "Launch Dialog";

  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  
  submit(){
    let model = {
      header: "Confirm Delete",
      prompt: `Are you sure you want to delete this record?`
    };
    this.dialogService.open({
      viewModel: Prompt, model: model, lock: false
      // viewModel: Prompt, model: model
    }).whenClosed(response => {
      if (!response.wasCancelled) {
        console.log('perform delete');
      } else {
        console.log('delete cancelled');
      }
    });         
  }
}
