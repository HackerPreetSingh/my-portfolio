import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { ContactMeService } from 'src/app/services/contact-me.service';
import { Contact } from 'src/pojos/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name:string="";
  email:string="";
  description:string="";
  valid:boolean=false;
  contactForm!:UntypedFormGroup;
  contactClass!: Contact;
  constructor(private formBuilder:UntypedFormBuilder,private contactMeService:ContactMeService) {
   }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]],
      email:['',[Validators.required,Validators.email]],
      description:['',[Validators.required,Validators.maxLength(500)]]
      // description:['',[Validators.required,Validators.minLength(50),,Validators.maxLength(500)]]
    });
  }

  submitForm(){

    this.name=this.contactForm.value.name;
    this.email=this.contactForm.value.email;
    this.description=this.contactForm.value.description;

    console.log(this.name);
    console.log(this.email);
    console.log(this.description);
    this.contactClass={
      fullName:this.name,
      emailId:this.email,
      message:this.description
    };
    this.contactMeService.sendMail(this.contactClass);

    alert("Your message has been sent successfully.");
    this.contactForm.reset();
  }

  get(nm:string) { return this.contactForm.get(nm); }

}
