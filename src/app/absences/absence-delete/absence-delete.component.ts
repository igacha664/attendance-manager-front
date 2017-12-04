import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';
import {AbsenceService} from '../../shared/service/absence.service';
import {Absence} from '../../shared/domain/absence';

@Component({
  selector: 'app-absence-delete',
  templateUrl: './absence-delete.component.html',
  styleUrls: ['./absence-delete.component.css']
})
export class AbsenceDeleteComponent implements OnInit {

  constructor(private absenceService:AbsenceService) { }

  @Input() absence:Absence;
  @Output() closeModal:EventEmitter<string> = new EventEmitter();
  //@Output() updateListAbsence:EventEmitter<Absence> = new EventEmitter();
  
  ngOnInit() {

  }


<<<<<<< HEAD
  delete(absence: Absence){
    var matricule = localStorage.getItem('matricule');// le matricule est normalement stocké dans le locale storage après cnx
    matricule = "MAT01" //#####################################################################################################

    this.absenceService.absenceDelete(matricule, absence);
=======
  delete(){
    //this.updateListAbsence.emit(this.absence)
    var matricule = localStorage.getItem('matricule');// le matricule est normalement stocké dans le locale storage après cnx
    matricule = "MAT01" //#####################################################################################################

    this.absenceService.absenceDelete(matricule,this.absence).subscribe()
    
>>>>>>> 3a2490ef7309b23870f2e86a224dad230b6e859a
    this.closeModal.emit('bye')
    
  }

  cancel(){
    this.closeModal.emit('bye')
  }

  

}
