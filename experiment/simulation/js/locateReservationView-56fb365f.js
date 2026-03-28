import b from"./abstractComponent-f6cab742.js";import v from"./arrayListComponent-ab4ee9a4.js";import g from"./classCastExceptionComponent-8f6ad5fe.js";import f from"./constructorWritingComponent-b018f305.js";import C from"./dateComponent-02897adf.js";import h from"./extendsComponent-2285358b.js";import y from"./functionCallingWithObjectComponent-e614d4ee.js";import D from"./getterComponent-9e89731e.js";import x from"./interfaceComponent-d2c7b039.js";import k from"./newVariableComponent-0098c706.js";import j from"./nullPointerExceptionComponent-b96ef88a.js";import S from"./objectCreationComponent-cf4e8c41.js";import O from"./parseExceptionComponent-230912d6.js";import w from"./passingArgumentsToFunctionsComponent-d6a8e5b1.js";import V from"./printFunctionComponent-fb083c3d.js";import R from"./setterComponent-272306e4.js";import I from"./StringcompareComponent-ec516131.js";import B from"./superKeywordComponent-79cfc5e0.js";import N from"./thisComponent-592a4f36.js";import T from"./tryCatchComponent-8bd58cac.js";import{_ as E,o as u,c as M,a as e,b as L,r as W,g as H,e as s,d as o,w as m,v as c,t as d,h as K}from"./index-c0d224d2.js";const A={components:{abstractComponent:b,arrayListComponent:v,classCastExceptionComponent:g,constructorWritingComponent:f,dateComponent:C,extendsComponent:h,functionCallingWithObjectComponent:y,getterComponent:D,interfaceComponent:x,newVariableComponent:k,nullPointerExceptionComponent:j,objectCreationComponent:S,parseExceptionComponent:O,passingArgumentsToFunctionsComponent:w,printFunctionComponent:V,setterComponent:R,stringCompareComponent:I,superKeywordComponent:B,thisComponent:N,tryCatchComponent:T},methods:{popup(n){this.currentComponent=n,console.log("popup");var t=document.getElementById("myModal");console.log(t);var a=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),a.onclick=function(){t.style.display="none"},window.onclick=function(l){l.target==t&&(t.style.display="none")}},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},incorrect(){var n=document.getElementById("snackbar");n.innerHTML="Inorrect. Try again",n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one=="String"&&this.two=="getVehicleObj"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",currentComponent:"constructorWritingComponent",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},F={class:"app"},U={id:"myModal"},z={class:"modal-content"},P={style:{display:"flex","flex-direction":"row"}},q={style:{flex:"1"}},G={class:"row"};function J(n,t,a,l,i,p){return u(),M("main",F,[t[25]||(t[25]=e("div",{id:"snackbar"},"Error Message.",-1)),e("div",U,[e("div",z,[t[5]||(t[5]=e("span",{class:"close"},"×",-1)),(u(),L(W(i.currentComponent)))])]),e("div",P,[t[6]||(t[6]=H('<div style="flex:4;" data-v-2bf08327><h1 style="padding:25px;padding-top:0px;" data-v-2bf08327> Reservation class - Locate Reservation method </h1><p style="padding:25px;padding-top:0px;" data-v-2bf08327> Add the locateReservation method to the Reservation class. This method will be used in the upcoming experiments </p></div><div style="flex:4;" data-v-2bf08327><h1 style="padding:25px;padding-bottom:0px;" data-v-2bf08327> Class diagram. </h1><p style="padding:25px;padding-top:0px;" data-v-2bf08327> If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option. </p></div>',2)),e("div",q,[e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:i.display[0]}]),onClick:t[0]||(t[0]=r=>p.popup("thisComponent")),class:"button-30"}," Help ",4)])]),e("div",G,[e("div",{class:"codebox",style:s({display:i.display[0]})},[t[7]||(t[7]=e("pre",null,`import java.util.Date;

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

`,-1)),t[8]||(t[8]=o("    public ")),m(e("input",{spellcheck:"false",id:"one","onUpdate:modelValue":t[1]||(t[1]=r=>n.one=r),style:{width:"80px"},maxlength:"6"},null,512),[[c,n.one]]),t[9]||(t[9]=o(" locateReservation(){ ")),t[10]||(t[10]=e("br",null,null,-1)),t[11]||(t[11]=o("    if(this.")),m(e("input",{spellcheck:"false",id:"two","onUpdate:modelValue":t[2]||(t[2]=r=>n.two=r),style:{width:"120px"},maxlength:"13"},null,512),[[c,n.two]]),t[12]||(t[12]=o('().getKeyStatus().compareTo("available") == 0) ')),t[13]||(t[13]=e("br",null,null,-1)),t[14]||(t[14]=o('     return "Vehicle available" ')),t[15]||(t[15]=e("br",null,null,-1)),t[16]||(t[16]=e("br",null,null,-1)),t[17]||(t[17]=o("    else ")),t[18]||(t[18]=e("br",null,null,-1)),t[19]||(t[19]=o('     return "Vehicle on trip" ')),t[20]||(t[20]=e("p",{id:"comment"}," //Write a method 'locateReservation' of return type String. ",-1)),t[21]||(t[21]=e("p",{id:"comment"}," //Compare the key status vehicle of the Vehicle object to the provided string. ",-1)),t[22]||(t[22]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[3]||(t[3]=r=>p.validate_one())},d(i.button_value),1)],4),e("div",{class:"codebox",style:s({display:i.display[1]})},[t[23]||(t[23]=e("pre",null,`import java.util.Date;

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

`,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[4]||(t[4]=r=>n.$router.push("/sign-contract-view"))},d(i.button_value),1)],4),t[24]||(t[24]=e("div",{class:"column"},[e("div",{class:"codebox sticky"},[e("img",{style:{"max-width":"800px"},src:K})])],-1))])])}const vt=E(A,[["render",J],["__scopeId","data-v-2bf08327"]]);export{vt as default};
