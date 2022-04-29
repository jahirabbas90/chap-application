import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { EnDataService } from '../../services/en-data.service';
import { MyConnecterService } from '../../services/my-connecter.service';
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';


@Component({
  selector: 'app-en-login',
  templateUrl: './en-login.page.html',
  styleUrls: ['./en-login.page.scss'],
})
export class EnLoginPage implements OnInit {

  credentialForm: FormGroup;
  _authUsr: any;
  hasPermission: any;
  token: string;
 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private chatService: EnDataService, 
    private _connecter: MyConnecterService,
    private fcm: FCM, 
    public platform: Platform  ) {

      this.platform.ready()
      .then(() => {
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
            // alert("Received in background");
          } else {
            console.log("Received in foreground");
            // alert("Received in foreground");
          };
        });

        this.getToken();

        this.fcm.onTokenRefresh().subscribe(token => {
          // alert("refresh_token :"+token);
          localStorage.setItem("user_fcm_token",""+token);      

        });
      })
      this.pushSetup();

    _connecter.authUser$.subscribe(data => {
      this._authUsr = data;
      console.log(this._authUsr)
      localStorage.setItem("user_id",""+this._authUsr.id);
      if(Object.keys(this._authUsr).length === 0) {}
      else{
        this.router.navigate(['/en-all-rooms']);
      }
    });
  }
 
  ngOnInit() {    
    //Get User FCM Token
    // this.subscribeToTopic();
    // this.getToken();

    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async signUp() {
    return;
    const loading = await this.loadingController.create();
    await loading.present();
    this.chatService
      .signup(this.credentialForm.value)
      .then(
        async (user) => {
          loading.dismiss();
          //this.router.navigateByUrl('/chat', { replaceUrl: true });

          const alert = await this.alertController.create({
            header: 'Sign up success',
            message: 'User created ',
            buttons: ['OK'],
          });
 
          await alert.present();

        },
        async (err) => {
          loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Sign up failed',
            message: err.message,
            buttons: ['OK'],
          });
 
          await alert.present();
        }
      );
  }
  
  async signIn() {
    if(this.credentialForm.invalid) return;
    
    const loading = await this.loadingController.create();
    await loading.present(); 


    this.chatService.signIn(this.credentialForm.value).then((res) => {
      console.log(res['user']['uid']);
      localStorage.setItem('currentUser', res['user']['uid']);
      loading.dismiss();
      this.router.navigateByUrl('/en-all-rooms');
      // this.router.navigateByUrl('/en-new-individual-chat');
    }, async (err) => {
      loading.dismiss();
      let alert = await this.alertController.create({
        header: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      await alert.present();
    })
  }
 
  // Easy access for form fields
  get email() {
    return this.credentialForm.get('email');
  }
  
  get password() {
    return this.credentialForm.get('password');
  }
  async openReset() {
    let inputAlert = await this.alertController.create({
      header: 'Reset Password',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Reset',
          handler: data => {
            this.resetPw(data.email);
          }
        }
      ]
    });
    inputAlert.present();
  }

  resetPw(email) {
    // this.chatService.resetPw(email).then(async (res) => {
    //   let toast = await this.toastCtrl.create({
    //     duration: 3000,
    //     message: 'Success! Check your Emails for more information.'
    //   });
    //   toast.present();
    // }, async (err) => {
    //   let alert = await this.alertController.create({
    //     header: 'Error',
    //     message: err.message,
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // });
  }
  
  async confirmPasscode() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Unauthorized!',
      inputs: [
        {
          name: 'passcode',
          type: 'text',
          placeholder: 'Enter your passcode'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            // console.log(data.passcode);
            if(data.passcode == 'new') {
              this.router.navigateByUrl('/en-register');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  checkLogin() {
    if(!this.credentialForm.valid) {
      this._connecter.presentToast('Invalid form value!');
      return;
    }
    this._connecter.userLogin(this.credentialForm.value.email, this.credentialForm.value.password);
  }


  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    // alert(1)
    this.fcm.getToken().then(token => {
      // alert(JSON.stringify(token));
      // alert(1)
      localStorage.setItem("user_fcm_token",""+token);      
      // localStorage.setItem("user_fcm_token","1234567890");      

    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }

  private async pushSetup() {
    await this.platform.ready();

    console.log('FCM SETUP INIT');
    if (!this.platform.is('cordova')) {
      return;
    }

    console.log('IN CORDOVA');

    this.hasPermission = await this.fcm.requestPushPermission();
    console.log('CHECK hasPermission:', this.hasPermission);

    this.token = await this.fcm.getToken();
    // alert('CHECK getToken: ' + this.token);
    localStorage.setItem("user_fcm_token",""+this.token);

    /* console.log('ON NOTIFICATION SUBSCRIBE');
    this.fcm
      .onTokenRefresh()
      .subscribe((newToken) => console.log('NEW TOKEN:', newToken));
    this.fcm
      .onNotification()
      .subscribe((payload: object) => console.log('ON NOTIFICATION:', payload)); */
  }

}


/* this.platform.ready().then(() => {
      this.fcm.getToken().then(token => {
        localStorage.setItem("user_fcm_token",""+token);      
        console.log(token);
        alert(token);
        this.fcm.onNotification().subscribe(data => {
          console.log(data);
          if (data.wasTapped) {
            console.log('Received in background');
          } else {
            console.log('Received in foreground');
          }
        });      
    
        // refresh the FCM token
        this.fcm.onTokenRefresh().subscribe(token => {
          console.log(token);
        });
      });
    }); */