import b from"./abstractComponent-f6cab742.js";import v from"./arrayListComponent-ab4ee9a4.js";import g from"./arraysComponent-dbab08de.js";import C from"./classCastExceptionComponent-8f6ad5fe.js";import f from"./constructorWritingComponent-b018f305.js";import y from"./dateComponent-02897adf.js";import h from"./extendsComponent-2285358b.js";import D from"./functionCallingWithObjectComponent-e614d4ee.js";import x from"./getterComponent-9e89731e.js";import k from"./interfaceComponent-d2c7b039.js";import S from"./newVariableComponent-0098c706.js";import j from"./nullPointerExceptionComponent-b96ef88a.js";import O from"./objectCreationComponent-cf4e8c41.js";import w from"./parseExceptionComponent-230912d6.js";import V from"./passingArgumentsToFunctionsComponent-d6a8e5b1.js";import R from"./printFunctionComponent-fb083c3d.js";import I from"./setterComponent-272306e4.js";import B from"./StringcompareComponent-ec516131.js";import N from"./superKeywordComponent-79cfc5e0.js";import T from"./thisComponent-592a4f36.js";import E from"./tryCatchComponent-8bd58cac.js";import{_ as M,o as u,c as H,a as e,b as K,r as L,e as s,d as o,w as m,v as c,t as d,g as W,h as A}from"./index-c0d224d2.js";const F={components:{abstractComponent:b,arrayListComponent:v,arraysComponent:g,classCastExceptionComponent:C,constructorWritingComponent:f,dateComponent:y,extendsComponent:h,functionCallingWithObjectComponent:D,getterComponent:x,interfaceComponent:k,newVariableComponent:S,nullPointerExceptionComponent:j,objectCreationComponent:O,parseExceptionComponent:w,passingArgumentsToFunctionsComponent:V,printFunctionComponent:R,setterComponent:I,stringCompareComponent:B,superKeywordComponent:N,thisComponent:T,tryCatchComponent:E},methods:{popup(n){this.currentComponent=n,console.log("popup");var t=document.getElementById("myModal");console.log(t);var a=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),a.onclick=function(){t.style.display="none"},window.onclick=function(l){l.target==t&&(t.style.display="none")}},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},incorrect(){var n=document.getElementById("snackbar");n.innerHTML="Inorrect. Try again",n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one==="String"&&this.two==="setContractStatus"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},U={class:"app"},z={id:"myModal"},P={class:"modal-content"},q={class:"row"},G={class:"column"},J={style:{display:"flex","flex-direction":"row"}},Q={style:{flex:"1"}};function X(n,t,a,l,i,p){return u(),H("main",U,[t[23]||(t[23]=e("div",{id:"snackbar"},"Error Message.",-1)),e("div",z,[e("div",P,[t[5]||(t[5]=e("span",{class:"close"},"×",-1)),(u(),K(L(i.currentComponent)))])]),e("div",q,[e("div",G,[e("div",J,[t[6]||(t[6]=e("div",{style:{flex:"5"}},[e("h1",{style:{padding:"25px","padding-top":"0px"}}," Reservation class - Release Contract method "),e("p",{style:{padding:"25px","padding-top":"0px"}}," Add the releaseContract method to the Reservation class. This method will be used in the upcoming experiments ")],-1)),e("div",Q,[e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:i.display[0]}]),onClick:t[0]||(t[0]=r=>p.popup("thisComponent")),class:"button-30"}," Help ",4)])]),e("div",{class:"codebox",style:s({display:i.display[0]})},[t[7]||(t[7]=e("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}
	
	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}
	
	public String locateReservation(){
		if(this.getVehicleObj().getKeyStatus().compareTo("available")==0)
			return "Vehicle available";
		else
			return "Vehicle on trip";
	}
`,-1)),t[8]||(t[8]=o("    public ")),m(e("input",{spellcheck:"false",id:"one","onUpdate:modelValue":t[1]||(t[1]=r=>n.one=r),style:{width:"80px"},maxlength:"6"},null,512),[[c,n.one]]),t[9]||(t[9]=o(" releaseContract() ")),t[10]||(t[10]=e("br",null,null,-1)),t[11]||(t[11]=o("    { ")),t[12]||(t[12]=e("br",null,null,-1)),t[13]||(t[13]=o("     this.")),m(e("input",{spellcheck:"false",id:"two","onUpdate:modelValue":t[2]||(t[2]=r=>n.two=r),maxlength:"17",style:{width:"140px"}},null,512),[[c,n.two]]),t[14]||(t[14]=o('("Reservation released"); ')),t[15]||(t[15]=e("br",null,null,-1)),t[16]||(t[16]=o("     return this.getContractStatus(); ")),t[17]||(t[17]=e("br",null,null,-1)),t[18]||(t[18]=o("    } ")),t[19]||(t[19]=e("p",{id:"comment"},' //Call the appropriate function to set the contract status to "Reservation released". ',-1)),t[20]||(t[20]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[3]||(t[3]=r=>p.validate_one())},d(i.button_value),1)],4),e("div",{class:"codebox",style:s({display:i.display[1]})},[t[21]||(t[21]=e("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}
	
	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}
	
	public String locateReservation(){
		if(this.getVehicleObj().getKeyStatus().compareTo("available")==0)
			return "Vehicle available";
		else
			return "Vehicle on trip";
	}
	
	public String releaseContract(){
		this.setContractStatus("Reservation released");
		return this.getContractStatus();
	}

}

`,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[4]||(t[4]=r=>n.$router.push("/update-key-status-view"))},d(i.button_value),1)],4)]),t[22]||(t[22]=W('<div class="column" data-v-d3ef672e><h1 style="padding:25px;padding-bottom:0px;" data-v-d3ef672e> Class diagram. </h1><p style="padding:25px;padding-top:0px;" data-v-d3ef672e> If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option. </p><div class="codebox sticky" data-v-d3ef672e><img style="max-width:800px;" src="'+A+'" data-v-d3ef672e></div></div>',1))])])}const ft=M(F,[["render",X],["__scopeId","data-v-d3ef672e"]]);export{ft as default};
