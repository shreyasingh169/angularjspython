// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth/auth.service';
// import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
// import { UploadService } from '../services/upload.service';
// // import { FormArray, FormGroup, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

// import * as Tesseract from 'tesseract.js';

// @Component({
//   selector: 'app-image-processing',
//   templateUrl: './image-processing.component.html',
//   styleUrls: ['./image-processing.component.scss']
// })
// export class ImageProcessingComponent implements OnInit {
//   // @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef; files  = [];
//   form: FormGroup;
//   uploadedFiles: any[] = [];
//   progress: number;

//   constructor(private authService: AuthService, private uploadService: UploadService,
//               private fb: FormBuilder) {
//       this.test();
//       this.form = this.fb.group({
//       orders: new FormArray([])
//       });
// }

//   Result = 'Recognizing...';

//   test() {
//     Tesseract.recognize(
//       '../../assets/toordal.jpeg',
//       'eng',
//       { logger: m => console.log(m) }
//     ).then(({ data: { text} }) => {
//       console.log(text, typeof(text));
//       const words = text.split(' ');
//       console.log('words ', words);
//       // const myMap = new Map();
//       // myMap.set(key: words, words)

//     });
//     }

//   ngOnInit() {
//   }

//   addCheckboxes() {
//     this.ordersData.forEach((o, i) => {
//       const control = new FormControl(i === 0); // if first item set to true, else false
//       (this.form.controls.orders as FormArray).push(control);
//     });
//   }

//   onUpload(event); {
//     for (const file of event.files) {
//       this.uploadFile(file);

//       this.uploadedFiles.push(file);
//     }
//     // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
// }
// myUploader(event); {
//   // event.files == files to upload
//   for (const file of event.files) {
//     this.uploadFile(file);

//     this.uploadedFiles.push(file);
//   }

// }


//   //  -------------------------
// uploadFile(file); {
//     const formData = new FormData();
//     formData.append('file', file.data);
//     file.inProgress = true;
//     this.uploadService.upload(formData).pipe(
//       map(event => {
//         switch (event.type) {
//           case HttpEventType.UploadProgress:
//             file.progress = Math.round(event.loaded * 100 / event.total);
//             this.progress = Math.round(event.loaded * 100 / event.total);
//             // this.onProgress.emit({originalEvent: event, progress: this.progress});
//             break;
//           case HttpEventType.Response:
//             return event;
//         }
//       }),
//       catchError((error: HttpErrorResponse) => {
//         file.inProgress = false;
//         return of(`${file.data.name} upload failed.`);
//       })).subscribe((event: any) => {
//         if (typeof (event) === 'object') {
//           console.log(event.body);
//         }
//       });
//   }
//   private uploadFiles(); {
//     this.fileUpload.nativeElement.value = '';
//     this.files.forEach(file => {
//       this.uploadFile(file);
//     });
// }
// onClick(); {
//   const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
//   // tslint:disable-next-line:prefer-for-of
//   for (let index = 0; index < fileUpload.files.length; index++) {
//    const file = fileUpload.files[index];
//    this.files.push({ data: file, inProgress: false, progress: 0});
//   }
//   this.uploadFiles();
//   };
//   fileUpload.click();
// }
// }

// }
