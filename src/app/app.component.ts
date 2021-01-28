import { Component } from '@angular/core';
import { GitHubService } from './github.service'; // IMPORT service


@Component({
  selector: 'app-root',
  template: ``,
  providers: [GitHubService] // we register the service so the injector knows where to find it ? 

})
export class AppComponent {                             // add a consttuctor and INJECT the service into the constructor.
  constructor(private _githubService: GitHubService) {  // injection is here. 
    this._githubService.getGitHubData('greg')           // we then call the getGHD method with a parameter in the _githubS instance and...
      .subscribe(data => console.log(data));            // SUBSCRIBE TO IT. 
  }

}
