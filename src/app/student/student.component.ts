import { Component, OnInit } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formDataArray: any[] = [
    {
      label: 'Student Name',
      placeholder: 'Enter the Name',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'text'


    },
    {
      label: 'Clas Applied For',
      placeholder: 'Enter the class',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'select',
      options: [
        {
          id: 1,
          name: 'I'
        },
        {
          id: 2,
          name: 'II'
        },
        {
          id: 3,
          name: 'III'
        },
        {
          id: 4,
          name: 'IV'
        },
        {
          id: 5,
          name: 'V'
        },
        {
          id: 6,
          name: 'VI'
        },
        {
          id: 7,
          name: 'VII'
        },
        {
          id: 8,
          name: 'VIII'
        },
        {
          id: 9,
          name: 'IX'
        },
        {
          id: 10,
          name: 'X'
        },
        {
          id: 11,
          name: 'XI'
        },
        {
          id: 12,
          name: 'XII'
        }
      ]

    },
    {
      label: 'Date Of Enquiry',
      placeholder: 'Enter the date',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'date'

    },
    {
      label: 'Date of Birth',
      placeholder: 'Enter the dob',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'date'

    },
    {
      label: 'Gender',
      placeholder: 'Enter the gender',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'select',
      options: [
        {
          id: 1,
          name: 'Male'
        },
        {
          id: 2,
          name: 'Female'
        }

      ]

    },
    {
      label: 'Religion',
      placeholder: 'Enter the religion',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'select',
      options: [
        {
          id: 1,
          name: 'Hindu'
        },
        {
          id: 2,
          name: 'Muslim'
        },
        {
          id: 3,
          name: 'Christan'
        },
        {
          id: 4,
          name: 'Sikh'
        },
        {
          id: 5,
          name: 'Jain'
        },
        {
          id: 6,
          name: 'Budhist'
        },
        {
          id: 7,
          name: 'Parsi'
        },
        {
          id: 8,
          name: 'Jews'
        },
        {
          id: 9,
          name: 'Other'
        }

      ]


    },
    {
      label: 'Category',
      placeholder: 'Enter the category',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'select',
      options: [
        {
          id: 1,
          name: 'General'
        },
        {
          id: 2,
          name: 'OBC'
        },
        {
          id: 3,
          name: 'SC/ST'
        }

      ]
    },
    {
      label: 'Mother Tongue',
      placeholder: 'Enter the mother tongue',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'select',
      options: [
        {
          id: 1,
          name: 'Hindi'
        },
        {
          id: 2,
          name: 'English'
        },
        {
          id: 3,
          name: 'Benagli'
        },
        {
          id: 4,
          name: 'Marathi'
        },
        {
          id: 5,
          name: 'Gujarati'
        },
        {
          id: 6,
          name: 'Urdu'
        },
        {
          id: 7,
          name: 'Bhojpuri'
        }
       


      ]


    },
    {
      label: 'Father Name',
      placeholder: 'Enter the father name',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'text'

    },
    {
      label: 'Contact No',
      placeholder: 'Enter the contact no',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'number'

    },
    {
      label: 'Email',
      placeholder: 'Enter the email',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'email'

    },
    {
      label: 'Annual Income',
      placeholder: 'Enter the  income',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'number'

    },
    {
      label: 'Mother Name',
      placeholder: 'Enter the mother name',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'text'

    },
    {
      label: 'Contact No',
      placeholder: 'Enter the contact no',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'number'

    },
    {
      label: 'Annual Income',
      placeholder: 'Enter the  income',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'number'

    },
    {
      label: 'Address',
      placeholder: 'Enter the address',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'text'
    },
    {
      label: 'City',
      placeholder: 'Enter the city',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'text'

    },
    {
      label: 'State',
      placeholder: 'Enter the state',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'text'
    }, {
      label: 'Area Pin',
      placeholder: 'Enter the area pin',
      originalValue: '',
      newValue: '',
      flag: true,
      type: 'number'

    }

  ];


  correctData(val, flag) {
    if (flag === 'yes') {
      val.newValue = val.originalValue;
      val.flag = true;
    } else {
      val.flag = false;
    }

  }
  submitForm() {
    let c = 0;
    for (let entry of this.formDataArray) {
      if (entry.newValue) {
        c++;
      }
    }
    if (c === this.formDataArray.length) {

    }
  }

}
