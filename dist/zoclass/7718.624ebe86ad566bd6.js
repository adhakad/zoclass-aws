"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[7718],{27718:(O,h,l)=>{l.r(h),l.d(h,{AdminOnlineAdmissionModule:()=>ot});var i=l(36895),f=l(89299),a=l(24006),x=l(77579),A=l(92340),t=l(94650),Z=l(44339),v=l(62373),u=l(88153),_=l(3238),r=l(4859),s=l(97392),p=l(59549),y=l(44144),M=l(51572),q=l(84385),P=l(80980);function T(e,m){if(1&e&&(t.TgZ(0,"a",28),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.status)}}function N(e,m){if(1&e&&(t.TgZ(0,"a",29),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.status)}}function I(e,m){if(1&e){const n=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(n);const d=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.updateAdmissionEnquiryModel(d))}),t._uU(1,"Form Open"),t.qZA()}}function k(e,m){if(1&e&&(t.TgZ(0,"button",31)(1,"span",32),t._uU(2,"Submitted"),t.qZA()()),2&e){const n=t.oxw().$implicit;t.Q6J("disabled","Complete"==n.status)}}function U(e,m){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"p",22),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"p",22),t._uU(6),t.qZA()(),t.TgZ(7,"td")(8,"p",22),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"p",22),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t.YNc(14,T,2,1,"a",23),t.YNc(15,N,2,1,"a",24),t.qZA(),t.TgZ(16,"td",22),t.YNc(17,I,2,0,"button",25),t.YNc(18,k,3,1,"button",26),t.qZA(),t.TgZ(19,"td",22)(20,"mat-icon",27),t.NdJ("click",function(){const c=t.CHM(n).$implicit,g=t.oxw(2);return t.KtG(g.deleteAdmissionEnquiryModel(c._id))}),t._uU(21,"delete"),t.qZA()()()}if(2&e){const n=m.$implicit,o=m.index,d=t.oxw(2);t.xp6(3),t.Oqu(10*d.number+o+1-10),t.xp6(3),t.Oqu(n.name),t.xp6(3),t.Oqu(n.fatherName),t.xp6(3),t.Oqu(n.contact),t.xp6(2),t.Q6J("ngIf","Complete"==n.status),t.xp6(1),t.Q6J("ngIf","Pending"==n.status),t.xp6(2),t.Q6J("ngIf","Pending"==n.status),t.xp6(1),t.Q6J("ngIf","Complete"==n.status)}}function E(e,m){if(1&e&&(t.TgZ(0,"tbody"),t.YNc(1,U,22,8,"tr",21),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.admissionEnquiryInfo)}}function w(e,m){if(1&e&&(t.TgZ(0,"div",33)(1,"div",34)(2,"h5",35),t._uU(3,"\xa0"),t.qZA()(),t.TgZ(4,"div",36)(5,"p",37),t._uU(6),t.qZA()(),t.TgZ(7,"div",38),t._UZ(8,"mat-icon"),t.qZA()()),2&e){const n=t.oxw();t.xp6(6),t.Oqu(n.successMsg)}}function F(e,m){if(1&e&&(t.TgZ(0,"div")(1,"p",78),t._uU(2),t.qZA()()),2&e){const n=t.oxw(3);t.xp6(2),t.Oqu(n.errorMsg)}}function J(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Roll number type is required "),t.qZA())}function Q(e,m){1&e&&(t.TgZ(0,"div",44)(1,"mat-form-field",45)(2,"mat-label"),t._uU(3,"Roll Number "),t.qZA(),t._UZ(4,"input",79),t.qZA()())}function R(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Roll number is required "),t.qZA())}function Y(e,m){if(1&e&&(t.TgZ(0,"div",44)(1,"mat-form-field",45)(2,"mat-label"),t._uU(3,"Roll Number"),t.qZA(),t._UZ(4,"input",80),t.YNc(5,R,2,0,"mat-error",14),t.qZA()()),2&e){const n=t.oxw(3);let o;t.xp6(5),t.Q6J("ngIf",(null==(o=n.admissionEnquiryForm.get("rollNumber"))?null:o.hasError("required"))&&(null==(o=n.admissionEnquiryForm.get("rollNumber"))?null:o.touched))}}function z(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Aadhar card number is required "),t.qZA())}function S(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Aadhar number must be a 12-digit number "),t.qZA())}function L(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Samagra id is required "),t.qZA())}function B(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Samagra id must be a 9-digit number "),t.qZA())}function j(e,m){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Roll number is required "),t.qZA())}function D(e,m){if(1&e&&(t.TgZ(0,"div",44)(1,"mat-form-field",45)(2,"mat-label"),t._uU(3,"Roll Number"),t.qZA(),t._UZ(4,"input",81),t.YNc(5,j,2,0,"mat-error",14),t.qZA()()),2&e){const n=t.oxw(3);let o;t.xp6(5),t.Q6J("ngIf",(null==(o=n.admissionEnquiryForm.get("rollNumber"))?null:o.hasError("required"))&&(null==(o=n.admissionEnquiryForm.get("rollNumber"))?null:o.touched))}}function G(e,m){1&e&&(t.TgZ(0,"mat-hint",82),t._uU(1,"Admission no. is required"),t.qZA())}function K(e,m){if(1&e){const n=t.EpF();t.TgZ(0,"form",42),t.NdJ("ngSubmit",function(){t.CHM(n);const d=t.oxw(2);return t.KtG(d.admissionEnquiryAddUpdate())}),t.TgZ(1,"div",36),t.YNc(2,F,3,1,"div",14),t.TgZ(3,"div",43)(4,"div",1)(5,"div",44)(6,"mat-form-field",45)(7,"mat-label"),t._uU(8,"Roll Number Type"),t.qZA(),t.TgZ(9,"mat-select",46)(10,"div")(11,"mat-option",47),t.NdJ("click",function(){t.CHM(n);const d=t.oxw(2);return t.KtG(d.chooseRollNumberType(d.admissionEnquiryForm.get("rollNumberType")))}),t._uU(12,"Generate"),t.qZA(),t.TgZ(13,"mat-option",48),t.NdJ("click",function(){t.CHM(n);const d=t.oxw(2);return t.KtG(d.chooseRollNumberType(d.admissionEnquiryForm.get("rollNumberType")))}),t._uU(14,"Manual Fill"),t.qZA()()(),t.YNc(15,J,2,0,"mat-error",14),t.qZA()(),t.YNc(16,Q,5,0,"div",49),t.YNc(17,Y,6,1,"div",49),t.TgZ(18,"div",44)(19,"mat-form-field",45)(20,"mat-label"),t._uU(21,"Aadhar Card Number"),t.qZA(),t._UZ(22,"input",50),t.YNc(23,z,2,0,"mat-error",14),t.YNc(24,S,2,0,"mat-error",14),t.qZA()(),t.TgZ(25,"div",44)(26,"mat-form-field",45)(27,"mat-label"),t._uU(28,"Samagra Id"),t.qZA(),t._UZ(29,"input",51),t.YNc(30,L,2,0,"mat-error",14),t.YNc(31,B,2,0,"mat-error",14),t.qZA()(),t.YNc(32,D,6,1,"div",49),t.ynx(33),t.TgZ(34,"h3"),t._uU(35,"Academic Session"),t.qZA(),t.BQk(),t.TgZ(36,"div",44)(37,"mat-form-field",45)(38,"mat-label"),t._uU(39,"Session"),t.qZA(),t._UZ(40,"input",52),t.qZA()(),t.TgZ(41,"div",44)(42,"mat-form-field",45)(43,"mat-label"),t._uU(44,"Admission No."),t.qZA(),t._UZ(45,"input",53),t.YNc(46,G,2,0,"mat-hint",54),t.qZA()(),t.TgZ(47,"div",44)(48,"mat-form-field",45)(49,"mat-label"),t._uU(50,"Class"),t.qZA(),t._UZ(51,"input",55),t.qZA()(),t.TgZ(52,"div",44)(53,"mat-form-field",45)(54,"mat-label"),t._uU(55,"Stream"),t.qZA(),t._UZ(56,"input",56),t.qZA()(),t.ynx(57),t.TgZ(58,"h3"),t._uU(59,"Student Info"),t.qZA(),t.BQk(),t.TgZ(60,"div",44)(61,"mat-form-field",45)(62,"mat-label"),t._uU(63,"Name"),t.qZA(),t._UZ(64,"input",57),t.qZA()(),t.TgZ(65,"div",44)(66,"mat-form-field",45)(67,"mat-label"),t._uU(68,"Date Of Birth"),t.qZA(),t._UZ(69,"input",58),t.qZA()(),t.TgZ(70,"div",44)(71,"mat-form-field",45)(72,"mat-label"),t._uU(73,"Gender"),t.qZA(),t._UZ(74,"input",59),t.qZA()(),t.TgZ(75,"div",44)(76,"mat-form-field",45)(77,"mat-label"),t._uU(78,"Category"),t.qZA(),t._UZ(79,"input",60),t.qZA()(),t.TgZ(80,"div",44)(81,"mat-form-field",45)(82,"mat-label"),t._uU(83,"Religion"),t.qZA(),t._UZ(84,"input",61),t.qZA()(),t.TgZ(85,"div",44)(86,"mat-form-field",45)(87,"mat-label"),t._uU(88,"Nationality"),t.qZA(),t._UZ(89,"input",62),t.qZA()(),t.TgZ(90,"div",44)(91,"mat-form-field",45)(92,"mat-label"),t._uU(93,"Contact"),t.qZA(),t._UZ(94,"input",63),t.qZA()(),t.TgZ(95,"div",44)(96,"mat-form-field",45)(97,"mat-label"),t._uU(98,"Address"),t.qZA(),t._UZ(99,"input",64),t.qZA()(),t.TgZ(100,"div",44)(101,"mat-form-field",45)(102,"mat-label"),t._uU(103,"Last School (Optional)"),t.qZA(),t._UZ(104,"input",65),t.qZA()(),t.ynx(105),t.TgZ(106,"h3"),t._uU(107,"Parent's Info"),t.qZA(),t.BQk(),t.TgZ(108,"div",66)(109,"mat-form-field",45)(110,"mat-label"),t._uU(111,"Father Name"),t.qZA(),t._UZ(112,"input",67),t.qZA(),t.TgZ(113,"mat-form-field",45)(114,"mat-label"),t._uU(115,"Father Qualification"),t.qZA(),t._UZ(116,"input",68),t.qZA(),t.TgZ(117,"mat-form-field",45)(118,"mat-label"),t._uU(119,"Father Occupation"),t.qZA(),t._UZ(120,"input",69),t.qZA(),t.TgZ(121,"mat-form-field",45)(122,"mat-label"),t._uU(123,"Father Contact"),t.qZA(),t._UZ(124,"input",70),t.qZA(),t.TgZ(125,"mat-form-field",45)(126,"mat-label"),t._uU(127,"Father Annual Income"),t.qZA(),t._UZ(128,"input",71),t.qZA()(),t.TgZ(129,"div",66)(130,"mat-form-field",45)(131,"mat-label"),t._uU(132,"Mother Name"),t.qZA(),t._UZ(133,"input",72),t.qZA(),t.TgZ(134,"mat-form-field",45)(135,"mat-label"),t._uU(136,"Mother Qualification"),t.qZA(),t._UZ(137,"input",73),t.qZA(),t.TgZ(138,"mat-form-field",45)(139,"mat-label"),t._uU(140,"Mother Occupation"),t.qZA(),t._UZ(141,"input",74),t.qZA(),t.TgZ(142,"mat-form-field",45)(143,"mat-label"),t._uU(144,"Mother Contact"),t.qZA(),t._UZ(145,"input",75),t.qZA(),t.TgZ(146,"mat-form-field",45)(147,"mat-label"),t._uU(148,"Mother Annual Income"),t.qZA(),t._UZ(149,"input",76),t.qZA()()()()(),t.TgZ(150,"div",38)(151,"button",77),t._uU(152,"Submit"),t.qZA()()()}if(2&e){const n=t.oxw(2);let o,d,c,g,b,C;t.Q6J("formGroup",n.admissionEnquiryForm),t.xp6(2),t.Q6J("ngIf",n.errorCheck),t.xp6(13),t.Q6J("ngIf",(null==(o=n.admissionEnquiryForm.get("rollNumberType"))?null:o.hasError("required"))&&(null==(o=n.admissionEnquiryForm.get("rollNumberType"))?null:o.touched)),t.xp6(1),t.Q6J("ngIf","generate"!==n.rollNumberType&&"manualFill"!==n.rollNumberType),t.xp6(1),t.Q6J("ngIf","generate"==n.rollNumberType),t.xp6(6),t.Q6J("ngIf",(null==(d=n.admissionEnquiryForm.get("aadharNumber"))?null:d.hasError("required"))&&(null==(d=n.admissionEnquiryForm.get("aadharNumber"))?null:d.touched)),t.xp6(1),t.Q6J("ngIf",(null==(c=n.admissionEnquiryForm.get("aadharNumber"))?null:c.hasError("pattern"))&&(null==(c=n.admissionEnquiryForm.get("aadharNumber"))?null:c.touched)),t.xp6(6),t.Q6J("ngIf",(null==(g=n.admissionEnquiryForm.get("samagraId"))?null:g.hasError("required"))&&(null==(g=n.admissionEnquiryForm.get("samagraId"))?null:g.touched)),t.xp6(1),t.Q6J("ngIf",(null==(b=n.admissionEnquiryForm.get("samagraId"))?null:b.hasError("pattern"))&&(null==(b=n.admissionEnquiryForm.get("samagraId"))?null:b.touched)),t.xp6(1),t.Q6J("ngIf","manualFill"==n.rollNumberType),t.xp6(14),t.Q6J("ngIf",!(null!=(C=n.admissionEnquiryForm.get("admissionNo"))&&C.valid)&&(null==(C=n.admissionEnquiryForm.get("admissionNo"))?null:C.touched)),t.xp6(105),t.Q6J("disabled",!n.admissionEnquiryForm.valid)}}function V(e,m){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"div",36)(2,"h4"),t._uU(3,"To delete online admission form, click ok to confirm."),t.qZA()(),t.TgZ(4,"div",38)(5,"button",83),t.NdJ("click",function(){t.CHM(n);const d=t.oxw(2);return t.KtG(d.admissionEnquiryDelete(d.deleteById))}),t._uU(6,"Ok"),t.qZA()()()}}function H(e,m){if(1&e){const n=t.EpF();t.TgZ(0,"div",33)(1,"div",34)(2,"h5",39),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",40),t.NdJ("click",function(){t.CHM(n);const d=t.oxw();return t.KtG(d.closeModal())}),t._uU(5,"close"),t.qZA()(),t.YNc(6,K,153,12,"form",41),t.YNc(7,V,7,0,"div",14),t.qZA()}if(2&e){const n=t.oxw();t.xp6(3),t.hij("",n.updateMode?"Online":n.deleteMode?"Delete Online":"Create"," Admission Form"),t.xp6(3),t.Q6J("ngIf",!n.deleteMode),t.xp6(1),t.Q6J("ngIf",n.deleteMode)}}function $(e,m){1&e&&t._UZ(0,"mat-progress-spinner",88)}function W(e,m){if(1&e&&(t.TgZ(0,"div",86),t.YNc(1,$,1,0,"mat-progress-spinner",87),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.loader)}}function X(e,m){if(1&e&&(t.TgZ(0,"div",84),t.YNc(1,W,2,1,"div",85),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loader)}}const tt=[{path:"",component:(()=>{class e{constructor(n,o){this.fb=n,this.studentService=o,this.baseUrl=A.N.API_URL,this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.deleteById="",this.successMsg="",this.errorMsg="",this.errorCheck=!1,this.admissionEnquiryInfo=[],this.rollNumberType="",this.recordLimit=5,this.filters={},this.number=0,this.paginationValues=new x.x,this.loader=!0,this.admissionEnquiryForm=this.fb.group({_id:[""],session:["",a.kI.required],admissionNo:["",a.kI.required],class:["",a.kI.required],stream:["",a.kI.required],admissionFees:[""],admissionFeesPaymentType:[""],rollNumberType:["",a.kI.required],rollNumber:["",a.kI.required],name:["",a.kI.required],dob:["",a.kI.required],aadharNumber:["",[a.kI.required,a.kI.pattern("^\\d{12}$")]],samagraId:["",[a.kI.required,a.kI.pattern("^\\d{9}$")]],gender:["",a.kI.required],category:["",a.kI.required],religion:["",a.kI.required],nationality:["",a.kI.required],contact:["",a.kI.required],address:["",a.kI.required],lastSchool:[""],fatherName:["",a.kI.required],fatherQualification:["",a.kI.required],fatherOccupation:["",a.kI.required],fatherContact:["",a.kI.required],fatherAnnualIncome:["",a.kI.required],motherName:["",a.kI.required],motherQualification:["",a.kI.required],motherOccupation:["",a.kI.required],motherContact:["",a.kI.required],motherAnnualIncome:["",a.kI.required],status:[""],createdBy:[""]})}ngOnInit(){this.getAdmissionEnquiry({page:1})&&setTimeout(()=>{this.loader=!1},1e3)}chooseRollNumberType(n){if(n){if("generate"==n.value){this.rollNumberType=n.value;const o=Math.floor(89999999*Math.random()+1e7);this.admissionEnquiryForm.get("rollNumber")?.setValue(o)}"manualFill"==n.value&&(this.rollNumberType=n.value,this.admissionEnquiryForm.get("rollNumber")?.setValue(null))}}getAdmissionEnquiry(n){return new Promise((o,d)=>{let c={filters:{},page:n.page,limit:n.limit?n.limit:this.recordLimit};this.recordLimit=c.limit,this.filters.searchText&&(c.filters.searchText=this.filters.searchText.trim()),this.studentService.studentAdmissionEnquiryPagination(c).subscribe(g=>{if(g)return this.admissionEnquiryInfo=g.admissionEnquiryList,this.number=c.page,this.paginationValues.next({type:"page-init",page:c.page,totalTableRecords:g.countAdmissionEnquiry}),o(!0)})})}closeModal(){this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.errorMsg="",this.admissionEnquiryForm.reset()}updateAdmissionEnquiryModel(n){this.showModal=!0,this.deleteMode=!1,this.updateMode=!0;const o=Math.floor(89999999*Math.random()+1e7);this.admissionEnquiryForm.get("admissionNo")?.setValue(o),this.admissionEnquiryForm.patchValue(n)}deleteAdmissionEnquiryModel(n){this.showModal=!0,this.updateMode=!1,this.deleteMode=!0,this.deleteById=n}successDone(){setTimeout(()=>{this.closeModal(),this.successMsg="",this.getAdmissionEnquiry({page:1})},1e3)}admissionEnquiryAddUpdate(){this.admissionEnquiryForm.valid&&this.updateMode&&(this.admissionEnquiryForm.value.admissionType="New",this.admissionEnquiryForm.value.createdBy="Admin",this.admissionEnquiryForm.value.admissionFeesPaymentType="Later",this.admissionEnquiryForm.value.admissionFees=0,this.admissionEnquiryForm.value.status="Complete",this.studentService.addStudent(this.admissionEnquiryForm.value).subscribe(n=>{n&&(this.successDone(),this.successMsg=n.successMsg)},n=>{this.errorCheck=!0,this.errorMsg=n.error}))}admissionEnquiryDelete(n){this.studentService.deletedeleteAdmissionEnquiry(n).subscribe(o=>{o&&(this.successDone(),this.successMsg=o,this.deleteById="")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.qu),t.Y36(Z.V))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-online-admission"]],decls:39,vars:10,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12","offset-lg-0"],[1,"main-card"],[1,"row","mt-4","mb-2"],[1,"col-8","col-lg-5"],["type","text","placeholder","Search...","id","searchText","name","searchText",1,"form-control",3,"ngModel","ngModelChange","keyup"],["searchText","ngModel"],[1,"table","table-hover","align-middle","mt-2","mb-1","bg-white"],[1,"bg-light"],[1,"text-muted"],[4,"ngIf"],[1,"pagination"],[3,"paginationValues","onChange"],[1,"modal","fade","show"],[1,"modal-dialog","modal-dialog-scrollable"],["class","modal-content",4,"ngIf"],["class","spinner-container",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mb-0"],["class","mb-0 status-active","href","javascript:void(0)",4,"ngIf"],["class","mb-0 status-inactive","href","javascript:void(0)",4,"ngIf"],["style","background-color: transparent;color: #8d6dff;border: 1px solid #8d6dff;","class","submit-button","mat-raised-button","",3,"click",4,"ngIf"],["class","submit-button","mat-raised-button","","style","background-color: transparent;",3,"disabled",4,"ngIf"],[3,"click"],["href","javascript:void(0)",1,"mb-0","status-active"],["href","javascript:void(0)",1,"mb-0","status-inactive"],["mat-raised-button","",1,"submit-button",2,"background-color","transparent","color","#8d6dff","border","1px solid #8d6dff",3,"click"],["mat-raised-button","",1,"submit-button",2,"background-color","transparent",3,"disabled"],[1,"status-active"],[1,"modal-content"],[1,"modal-header"],[1,"modal-name",2,"color","transparent"],[1,"modal-body"],[1,"success-message"],[1,"modal-footer"],[1,"modal-title"],["matRipple","",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"container"],[1,"col-12","col-lg-6"],["appearance","outline"],["type","number","matInput","","formControlName","rollNumberType"],["value","generate",3,"click"],["value","manualFill",3,"click"],["class","col-12 col-lg-6",4,"ngIf"],["matInput","","type","number","formControlName","aadharNumber"],["matInput","","type","number","formControlName","samagraId"],["matInput","","type","text","formControlName","session","readonly",""],["matInput","","type","number","formControlName","admissionNo","readonly",""],["class","form-text text-danger",4,"ngIf"],["matInput","","type","number","formControlName","class","readonly",""],["matInput","","type","text","formControlName","stream","readonly",""],["matInput","","type","text","formControlName","name","readonly",""],["matInput","","type","text","formControlName","dob","readonly",""],["matInput","","type","text","formControlName","gender","readonly",""],["matInput","","type","text","formControlName","category","readonly",""],["matInput","","type","text","formControlName","religion","readonly",""],["matInput","","type","text","formControlName","nationality","readonly",""],["matInput","","type","number","formControlName","contact","readonly",""],["matInput","","type","text","formControlName","address","readonly",""],["matInput","","type","text","formControlName","lastSchool","readonly",""],[1,"co-12","col-lg-6"],["matInput","","type","text","formControlName","fatherName","readonly",""],["matInput","","type","text","formControlName","fatherQualification"],["matInput","","type","text","formControlName","fatherOccupation","readonly",""],["matInput","","type","number","formControlName","fatherContact","readonly",""],["matInput","","type","number","formControlName","fatherAnnualIncome","readonly",""],["matInput","","type","text","formControlName","motherName","readonly",""],["matInput","","type","text","formControlName","motherQualification","readonly",""],["matInput","","type","text","formControlName","motherOccupation","readonly",""],["matInput","","type","number","formControlName","motherContact","readonly",""],["matInput","","type","number","formControlName","motherAnnualIncome","readonly",""],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"error-message"],["matInput","","readonly",""],["matInput","","type","number","formControlName","rollNumber","readonly",""],["matInput","","type","number","formControlName","rollNumber"],[1,"form-text","text-danger"],["mat-raised-button","","type","button",1,"delete-button",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(n,o){1&n&&(t._UZ(0,"app-header-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-navbar"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"input",9,10),t.NdJ("ngModelChange",function(c){return o.filters.searchText=c})("keyup",function(){return o.getAdmissionEnquiry({page:1,limit:0})}),t.qZA()()(),t.TgZ(14,"table",11)(15,"thead",12)(16,"tr",13)(17,"th"),t._uU(18,"No."),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Name"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Father Name"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Contact"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Admission"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Admission Form"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Remove"),t.qZA()()(),t.YNc(31,E,2,1,"tbody",14),t.qZA(),t.TgZ(32,"div",15)(33,"app-pagination",16),t.NdJ("onChange",function(c){return o.getAdmissionEnquiry(c)}),t.qZA()(),t.TgZ(34,"div",17)(35,"div",18),t.YNc(36,w,9,1,"div",19),t.YNc(37,H,8,3,"div",19),t.qZA()()()()()()()()(),t.YNc(38,X,2,1,"div",20)),2&n&&(t.xp6(12),t.Q6J("ngModel",o.filters.searchText),t.xp6(19),t.Q6J("ngIf",o.admissionEnquiryInfo&&o.admissionEnquiryInfo.length>0),t.xp6(2),t.Q6J("paginationValues",o.paginationValues),t.xp6(1),t.ekj("show",o.showModal),t.xp6(1),t.ekj("modal-lg",!o.successMsg&&!o.deleteMode),t.xp6(1),t.Q6J("ngIf",o.successMsg),t.xp6(1),t.Q6J("ngIf",!o.successMsg),t.xp6(1),t.Q6J("ngIf",o.loader))},dependencies:[i.sg,i.O5,v.R,u.A,_.ey,r.lW,s.Hw,p.TO,p.KE,p.bx,p.hX,y.Nt,M.Ou,_.wG,q.gD,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,a.On,P.Q],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 10vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:var(--header-height);left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8d6dff;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#8d6dff;width:24px;height:24px}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:5px;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#525098eb!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#4e4caacd}p[_ngcontent-%COMP%]{color:#4e4caacd;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#4e4caacd}.form-control[_ngcontent-%COMP%]{height:45px;color:#4e4caacd;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#8d6dff;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ebebff;color:#4e4caacd;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8d6dff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#4e4caacd}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4e4caacd}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#8d6dff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8d6dff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4e4caac1!important;opacity:.8!important}  .mat-input-element{caret-color:#4e4caac1!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#4e4caac1!important}  .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#4e4caac1!important}  .mat-radio-button{color:#4e4caac1;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #4e4caac1}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#4e4caac1}  .mat-checkbox-frame{border-color:#4e4caac1!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#8d6dff!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#8d6dff!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55px;margin-left:50px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#8d6dff;font:1.2em sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#525098eb}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#525098eb}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;width:100%;padding:5px;display:block;flex-direction:column}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#8d6dff;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}"]}),e})()}];let nt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(tt),f.Bz]}),e})();var et=l(1293);let ot=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,nt,et.g]}),e})()},80980:(O,h,l)=>{l.d(h,{Q:()=>v});var i=l(94650),f=l(36895),a=l(4859),x=l(97392);function A(u,_){if(1&u){const r=i.EpF();i.TgZ(0,"button",6),i.NdJ("click",function(){i.CHM(r);const p=i.oxw().$implicit,y=i.oxw(2);return i.KtG(y.onChangePage(p,0))}),i._uU(1),i.qZA()}if(2&u){const r=i.oxw().$implicit,s=i.oxw(2);i.ekj("pagination_active",s.activePageNumber==r),i.xp6(1),i.Oqu(r)}}function t(u,_){if(1&u&&i.YNc(0,A,2,3,"button",5),2&u){const r=_.$implicit,s=i.oxw(2);i.Q6J("ngIf",s.showPages(r))}}function Z(u,_){if(1&u){const r=i.EpF();i.TgZ(0,"div",1)(1,"ul",2)(2,"button",3),i.NdJ("click",function(){i.CHM(r);const p=i.oxw();return i.KtG(p.changePage(-1))}),i.TgZ(3,"mat-icon"),i._uU(4,"chevron_left"),i.qZA()(),i.YNc(5,t,1,1,"ng-template",4),i.TgZ(6,"button",3),i.NdJ("click",function(){i.CHM(r);const p=i.oxw();return i.KtG(p.changePage(1))}),i.TgZ(7,"mat-icon"),i._uU(8,"chevron_right"),i.qZA()()()()}if(2&u){const r=i.oxw();i.xp6(5),i.Q6J("ngForOf",r.pages)}}let v=(()=>{class u{constructor(){this.totalTableRecords=0,this.onChange=new i.vpe,this.recordLimit=10,this.pages=[],this.activePageNumber=0,this.iteration=0,this.filters={},this.selectedLimit=10}ngOnInit(){this.paginationValues?.subscribe(r=>{r&&"page-init"==r.type&&(this.totalTableRecords=r.totalTableRecords,this.onChangePage(r.page,0))})}calcNumberOfPage(){this.iteration=0==this.recordLimit?0:this.totalTableRecords/this.recordLimit,this.iteration=this.iteration<0?0:this.iteration>Number(this.iteration.toFixed())?Number(this.iteration.toFixed())+1:Number(this.iteration.toFixed())}onChangePage(r,s){this.calcNumberOfPage(),this.pages=[];for(var p=1;p<=this.iteration;p++)this.pages[p-1]=p;(r!=this.activePageNumber||s)&&(this.activePageNumber=r,this.onChange.emit({page:r,limit:this.recordLimit}))}queryLimitChange(r){this.recordLimit="ALL"==r?0:parseInt(r),this.onChangePage(1,1)}changePage(r){if(!(-1==r&&this.activePageNumber<=1||1==r&&this.iteration<=this.activePageNumber)){var s=this.activePageNumber+Number(r);this.calcNumberOfPage(),-1==s&&(s=0),s>this.iteration&&(s=this.iteration),this.onChangePage(s,0)}}showPages(r){if(r>this.activePageNumber-5&&this.activePageNumber+5>r)return!0}}return u.\u0275fac=function(r){return new(r||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-pagination"]],inputs:{totalTableRecords:"totalTableRecords",paginationValues:"paginationValues"},outputs:{onChange:"onChange"},decls:1,vars:1,consts:[["class","pagination-wrapper mt-0",4,"ngIf"],[1,"pagination-wrapper","mt-0"],[1,"pagination"],["mat-icon-button","",3,"click"],["ngFor","",3,"ngForOf"],["class","button","mat-icon-button","",3,"pagination_active","click",4,"ngIf"],["mat-icon-button","",1,"button",3,"click"]],template:function(r,s){1&r&&i.YNc(0,Z,9,1,"div",0),2&r&&i.Q6J("ngIf",s.totalTableRecords&&s.totalTableRecords>0&&s.selectedLimit<s.totalTableRecords)},dependencies:[f.sg,f.O5,a.lW,x.Hw],styles:[".flm[_ngcontent-%COMP%]{float:left;margin-top:10px}button[_ngcontent-%COMP%]{color:#8d6dff}.button[_ngcontent-%COMP%]{background-color:#e7e6f897;margin:3px}.pagination_active[_ngcontent-%COMP%]{background-color:#8d6dff;color:#fff;margin:3px}"]}),u})()}}]);