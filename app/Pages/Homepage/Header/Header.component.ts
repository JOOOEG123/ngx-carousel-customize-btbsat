import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'Header',
    templateUrl: './Header.component.html',
})
export class HeaderCompoenent implements OnInit{
    homeSearch: FormGroup;
    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.homeSearch = this.fb.group({
            search: ''
        })
    }

    onSubmit(){
        console.log(this.homeSearch.value)
    }

}