import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private jsonConfig: any = {
    title: '',
    text: '',
    icon: '',
    confirmButtonText: 'Aceptar'
  }
  constructor() { }
  success(msj: string, title: string) {
    this.jsonConfig.text = msj;
    this.jsonConfig.title = title;
    this.jsonConfig.icon = 'success';
    Swal.fire(this.jsonConfig);
  }
  error(msj: string, title: string) {
    this.jsonConfig.text = msj;
    this.jsonConfig.title = title;
    this.jsonConfig.icon = 'error';
    Swal.fire(this.jsonConfig);
  }
  messagefin() {
    Swal.close();
  }
  loading() {
    Swal.fire({
      title: 'Cargando...',
      imageUrl: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif',
      imageAlt: 'Custom image',
      showConfirmButton: false,
      animation: false
    });
  }


}
