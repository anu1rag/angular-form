import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
//import {BlueClickDirective} from './form.directive';
import * as interfaces from "./dropdown_interface"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public contactForm: FormGroup
  public subReasonForContact: any[] = [];
  public subReasonForContactBool: boolean = false;
  public index =0;
  public missedTimeFromWorkVal = interfaces.MissedTimefromWork
  public addressTypeVal = interfaces.AddressType
  public USStates = interfaces.USStates
  public workDescription = interfaces.DescriptionOfWork;
  public employmentScheduleVal = interfaces.EmploymentSchedule;
  public returnToWOrkDateVal = interfaces.WorkType
  public admissionTypeVal = interfaces.AdmissionType
  public specialityVal = interfaces.Speciality
  @ViewChild('appDirective') el: ElementRef
  

  constructor(private fb:FormBuilder, private renderer: Renderer2) {
    // console.log(this.missedTimeFromWorkVal);
  }

  ngOnInit() {
    this.initializeForm();
   
  }


  transition() {
//      console.log('somebody licked');
//      console.log(this.el.nativeElement.children[0]);
//      if(this.index!=0) {
//       for (let child of this.el.nativeElement.children) {
//         if(child.classList.length && child.classList.contains('active')) {
//           console.log("I am working")
//           this.renderer.removeClass(child,'pt-page-rotateCubeLeftIn');
           //this.renderer.removeClass(child,'pt-page-ontop');
//           this.renderer.removeClass(child,'active');
//           this.renderer.addClass(child,'pt-page-rotateCubeLeftOut');
//           // this.renderer.addClass(child,'pt-page-ontop');
//           if(child.nextSibling){
//             console.log("Next sbi")
//             this.renderer.addClass(child.nextSibling,'pt-page-ontop');
//             this.renderer.setStyle(child.nextSibling, 'visibility', 'visible');
//             this.renderer.addClass(child.nextSibling,'pt-page-rotateCubeLeftIn');
//             this.renderer.addClass(child.nextSibling,'active');
//             console.log(child.nextSibling)
  
//           }
//         }
//      } 
// } else {
//     this.renderer.addClass(this.el.nativeElement.children[0],'pt-page-rotateCubeLeftOut');
//     this.renderer.addClass(this.el.nativeElement.children[0],'pt-page-ontop');
//     this.renderer.setStyle(this.el.nativeElement.children[1], 'visibility', 'visible');
//     this.renderer.addClass(this.el.nativeElement.children[1],'pt-page-rotateCubeLeftIn');
//     this.renderer.addClass(this.el.nativeElement.children[1],'active');
//     this.index+=1;
// }
this.renderer.removeClass(this.el.nativeElement.children[this.index],'pt-page-rotateCubeLeftIn');
// this.renderer.removeClass(this.el.nativeElement.children[this.index],'pt-page-ontop');
this.renderer.addClass(this.el.nativeElement.children[this.index],'pt-page-rotateCubeLeftOut');
//this.renderer.addClass(this.el.nativeElement.children[this.index],'pt-page-ontop');
this.renderer.setStyle(this.el.nativeElement.children[this.index+1], 'visibility', 'visible');
this.renderer.addClass(this.el.nativeElement.children[this.index+1],'pt-page-rotateCubeLeftIn');
this.renderer.addClass(this.el.nativeElement.children[this.index+1],'active');
this.index+=1;

   }

  a() {
    console.log(this.contactForm.controls['workForOtherEmployeeStatus']['value'] == 'Yes');
    console.log(this.contactForm)

  }

  selectContactReason() {
    console.log(this.contactForm.controls)
    console.log(this.contactForm.controls['bestReasonForContact']['value'])
    if(this.contactForm.controls['bestReasonForContact']['value']['contactOption'] == 'Myself'){
       this.subReasonForContact = interfaces.Reason_for_contact_myself;
       this.subReasonForContactBool = true;
       console.log("I worked");
    }
    else if(this.contactForm.controls['bestReasonForContact']['value']['contactOption'] == 'Spouse'){
      this.subReasonForContact = interfaces.Reason_for_contact_spouse;
      this.subReasonForContactBool = true;
   } else  if(this.contactForm.controls['bestReasonForContact']['value']['contactOption'] == 'Child'){
    this.subReasonForContact = interfaces.Reason_for_child;
    this.subReasonForContactBool = true;
 }
  }

  


  initializeForm() {
      this.contactForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        dob:['', Validators.required],
        employeeId: ['', Validators.required],
        taxId: ['', Validators.required],
        bestReasonForContact: this.fb.group({
          contactOption: ['', Validators.required],
          reason: ['', Validators.required],
        }),
        missedTimeFromWork:['', Validators.required],
        claimantDetails: this.fb.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          EmpID:['', Validators.required],
          DOB: ['', Validators.required],
          SSN: ['', Validators.required],
          preferredLang: ['', Validators.required],
          email : ['', Validators.required],
          primaryPhone :['', Validators.required],
          maritalStatus: ['', Validators.required],
          registerForIservices: ['', Validators.required],
          cellPhoneNumber: ['', Validators.required],
          registerForTaxAlerts: ['', Validators.required]
        }),
        addressDetails: this.fb.group({
          addressType: ['', Validators.required],
          moreDetails : this.fb.group({
            addr1: ['', Validators.required],
            addr2: [''],
            city: ['', Validators.required],
            country: ['', Validators.required],
            state: ['', Validators.required],
            zip : ['', Validators.required],
          })
        }),
        jobTitle: ['', Validators.required],
        descriptionOfWork: ['', Validators.required],
        employmentSchedule: ['', Validators.required],
        workForOtherEmployeeStatus: ['', Validators.required],
        workForOtherEmployee: this.fb.group({
          employerName: ['', Validators.required],
          contactName: ['', Validators.required],
          contactNumber : ['', Validators.required],
          jobTitle : ['', Validators.required], 
        }),
        workLiveInSameState: ['', Validators.required],
        accidentWorkRelated: ['', Validators.required],
        claimFilled: ['', Validators.required],
        lastDateWorked: ['', Validators.required],
        leaveStartDate: ['', Validators.required],
        returnToWorkDateStatus: ['', Validators.required],
        returnToWorkDate : ['', Validators.required],
        // lastDayWorked: ['', Validators.required],
        residentStateOnDisabilityDate: ['', Validators.required],
        visitToHospital: ['', Validators.required],
        visitToHospitalDetails: this.fb.group({
            admissionType: ['', Validators.required],
            admissionDate: ['', Validators.required],
            hospitalName: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            tel: ['', Validators.required],
            dischargeDate : ['', Validators.required],
        }),
        physicianDetails: this.fb.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          organization:['', Validators.required],
          state: ['', Validators.required],
          contact: ['', Validators.required],
          fax: [''],
          speciality : ['', Validators.required],
          category :['', Validators.required],
          firstVisit: ['', Validators.required],
          nextVisit: ['', Validators.required],
          isAnotherPhysicianInvolved: ['', Validators.required],
          anotherPhysicanData: this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            organization:['', Validators.required],
            state: ['', Validators.required],
            contact: ['', Validators.required],
            fax: [''],
            speciality : ['', Validators.required],
          })
        })   

      })
  }

  submitForm() {
    console.log(this.contactForm.value);
    Swal.fire("Good job!", "Form Submitted Successfully!", "success");

  }

}
