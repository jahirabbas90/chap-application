import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { EnDataService } from '../../services/en-data.service';
import { forkJoin } from 'rxjs';

import { MyConnecterService } from '../../services/my-connecter.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentialForm: FormGroup;
  submitted: boolean = false;
  company: string;
  btnHide: boolean = false;
  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private chatService: EnDataService,

    private _connecter: MyConnecterService,
    public datepipe: DatePipe
  ) {
    this.actRoute.paramMap.subscribe(params => {
      this.company = params.get('company')
    });
  }
 
  ngOnInit() {
    // this.credentialForm = this.fb.group({
    //   email: ['ankit@webmaddy.com', [Validators.required, Validators.email]],
    //   password: ['123456', [Validators.required, Validators.minLength(6)]],
    //   uid: ['4']
    // });

    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nickname: ['', [Validators.required, Validators.minLength(2)]],
      company: [this.company]
    });
    
  }
   
  async signUp() {
    // console.log(this.credentialForm.value)
    // return;
    if(this.credentialForm.invalid) {
      return;
    }

    let obs = this.chatService.findUser(this.credentialForm.value.email);
    let exsist = 0;
    forkJoin(obs).subscribe(res => {
      for (let data of res) {
        if (data.length > 0) {
          
          alert('Email already exsist')

          exsist = 1;
        }
      }
      if(exsist == 0){
        this.btnHide = true;        
        this.chatService
        .signup(this.credentialForm.value)
        .then(
          
          async (user) => {
            this.btnHide = false;
            //this.router.navigateByUrl('/chat', { replaceUrl: true });
            const alert = await this.alertController.create({
              header: 'Sign up success',
              message: 'User created ',
              buttons: ['OK'],
            });
  
            await alert.present();

          },
          async (err) => {
            this.btnHide = false;
            const alert = await this.alertController.create({
              header: 'Sign up failed',
              message: err.message,
              buttons: ['OK'],
            });
  
            await alert.present();
          }
        );

      }
      
    });
    
  }

  get email() {
    return this.credentialForm.get('email');
  }
  
  get password() {
    return this.credentialForm.get('password');
  }

  get nickname() {
    return this.credentialForm.get('nickname');
  }

  createdUser() {
    if(!this.credentialForm.valid) {
      this._connecter.presentToast('Invalid form value')
      return;
    }

    let time = new Date();
    var _id = time.getTime()+Math.floor(Math.random());

    var ar = {
      name: this.credentialForm.value.nickname,
      email:  this.credentialForm.value.email,
      password: this.credentialForm.value.password,
      personal_chats: [
        {
          chat_id: null,
          uid: _id
        }
      ],
      uid: _id
    };
    // console.log(ar)
    this._connecter.createNewUser(ar, this.credentialForm.value.email);
    
  }

}
