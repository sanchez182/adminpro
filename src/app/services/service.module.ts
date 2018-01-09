import { ModalUploadService } from './../components/modal-upload/modal-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { SettingsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard, 
    SubirArchivoService, HospitalService, MedicoService} from './services.index'; 


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SettingsService, SidebarService, 
    SharedService, SubirArchivoService,
  UsuarioService,
  LoginGuardGuard,
ModalUploadService,
HospitalService,
MedicoService],
  declarations: []
})
export class ServiceModule { }
