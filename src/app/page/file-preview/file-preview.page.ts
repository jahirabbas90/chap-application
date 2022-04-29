import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.page.html',
  styleUrls: ['./file-preview.page.scss'],
})
export class FilePreviewPage implements OnInit {
  previews=[];

  constructor(public popovercontroller:PopoverController) {
    this.previews=JSON.parse(sessionStorage.getItem("previews"));
   }

  ngOnInit() {
  }

  byteToSize(bytes){
    var sizes=['Bytes','KB','MB','GB','TB'];
    for(var i=0;i<sizes.length;i++){
      if (bytes<=1024) {
        return bytes+ ''+sizes[i];
      }else{
        bytes=parseFloat(String(bytes/1024)).toFixed(2);
      }
    }
  }

  send(){
    sessionStorage.setItem("send","true");
    this.popovercontroller.dismiss();
  }

  getIcon(type:string){
    if (type.startsWith("image")) {
      return "image-outline";
    } else if (type.startsWith("video")) {
      return "videocam-outline";
    } else if (type.startsWith("audio")) {
      return "musical-note-outline";
    } else {
      return "document-outline";
    }
  }

  getIconColor(type:string){
    if (type.startsWith("image")) {
      return "primary";
    } else if (type.startsWith("video")) {
      return "success";
    } else if (type.startsWith("audio")) {
      return "danger";
    } else {
      return "warning";
    }
  }

}
