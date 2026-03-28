import c from"./abstractComponent-f6cab742.js";import g from"./arrayListComponent-ab4ee9a4.js";import b from"./classCastExceptionComponent-8f6ad5fe.js";import f from"./constructorWritingComponent-b018f305.js";import v from"./dateComponent-02897adf.js";import C from"./extendsComponent-2285358b.js";import x from"./functionCallingWithObjectComponent-e614d4ee.js";import h from"./getterComponent-9e89731e.js";import k from"./interfaceComponent-d2c7b039.js";import S from"./newVariableComponent-0098c706.js";import w from"./nullPointerExceptionComponent-b96ef88a.js";import N from"./objectCreationComponent-cf4e8c41.js";import V from"./parseExceptionComponent-230912d6.js";import K from"./passingArgumentsToFunctionsComponent-d6a8e5b1.js";import T from"./printFunctionComponent-fb083c3d.js";import E from"./setterComponent-272306e4.js";import B from"./StringcompareComponent-ec516131.js";import I from"./superKeywordComponent-79cfc5e0.js";import M from"./thisComponent-592a4f36.js";import U from"./tryCatchComponent-8bd58cac.js";import{_ as D,o as m,c as H,a as n,b as L,r as W,e as l,d as o,w as u,v as d,t as y,g as _,h as j}from"./index-c0d224d2.js";const A={components:{abstractComponent:c,arrayListComponent:g,classCastExceptionComponent:b,constructorWritingComponent:f,dateComponent:v,extendsComponent:C,functionCallingWithObjectComponent:x,getterComponent:h,interfaceComponent:k,newVariableComponent:S,nullPointerExceptionComponent:w,objectCreationComponent:N,parseExceptionComponent:V,passingArgumentsToFunctionsComponent:K,printFunctionComponent:T,setterComponent:E,stringCompareComponent:B,superKeywordComponent:I,thisComponent:M,tryCatchComponent:U},methods:{popup(e){this.currentComponent=e,console.log("popup");var t=document.getElementById("myModal");console.log(t);var r=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),r.onclick=function(){t.style.display="none"},window.onclick=function(p){p.target==t&&(t.style.display="none")}},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one==="String"&&this.two==="setKeyStatus"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,this.correct1()):(this.button_value=this.button_text,this.incorrect())},validate_two(){this.three==="locateReservation"?(this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},F={class:"app"},O={id:"myModal"},R={class:"modal-content"},z={class:"row"},P={class:"column"},q={style:{display:"flex","flex-direction":"row"}},G={style:{flex:"1"}};function J(e,t,r,p,s,a){return m(),H("main",F,[t[23]||(t[23]=n("div",{id:"snackbar"},"Error Message.",-1)),n("div",O,[n("div",R,[t[5]||(t[5]=n("span",{class:"close"},"×",-1)),(m(),L(W(s.currentComponent)))])]),n("div",z,[n("div",P,[n("div",q,[t[6]||(t[6]=n("div",{style:{flex:"5"}},[n("h1",{style:{padding:"25px","padding-top":"0px"}}," Vehicle class - Update Key Status method "),n("p",{style:{padding:"25px","padding-top":"0px"}}," Add the updateKeyStatus method to the Vehicle class. This method will be used in the upcoming experiments ")],-1)),n("div",G,[n("button",{style:l([{float:"right","margin-bottom":"30px"},{display:s.display[0]}]),onClick:t[0]||(t[0]=i=>a.popup("thisComponent")),class:"button-30"}," Help ",4)])]),n("div",{class:"codebox",style:l({display:s.display[0]})},[t[7]||(t[7]=n("pre",null,`public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
`,-1)),t[8]||(t[8]=o("    public ")),u(n("input",{spellcheck:"false",id:"one","onUpdate:modelValue":t[1]||(t[1]=i=>e.one=i),style:{width:"80px"},maxlength:"6"},null,512),[[d,e.one]]),t[9]||(t[9]=o(" updateKeyStatus() ")),t[10]||(t[10]=n("br",null,null,-1)),t[11]||(t[11]=o("    { ")),t[12]||(t[12]=n("br",null,null,-1)),t[13]||(t[13]=o("     this.")),u(n("input",{spellcheck:"false",id:"two","onUpdate:modelValue":t[2]||(t[2]=i=>e.two=i),maxlength:"12",style:{width:"130px"}},null,512),[[d,e.two]]),t[14]||(t[14]=o('("on trip"); ')),t[15]||(t[15]=n("br",null,null,-1)),t[16]||(t[16]=o("     return this.getKeyStatus(); ")),t[17]||(t[17]=n("br",null,null,-1)),t[18]||(t[18]=o("    } ")),t[19]||(t[19]=n("p",{id:"comment"},' //Call the appropriate function to set the key status to "on trip". ',-1)),t[20]||(t[20]=n("br",null,null,-1)),n("button",{class:"button-9",id:"btn1",onClick:t[3]||(t[3]=i=>a.validate_one())},y(s.button_value),1)],4),n("div",{class:"codebox",style:l({display:s.display[1]})},[t[21]||(t[21]=n("pre",null,`
public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
	
	public String updateKeyStatus()
	{
		this.setKeyStatus("on trip");
		return this.getKeyStatus();
	}

	public String getKeyStatus() {
		return keyStatus;
	}

	public void setKeyStatus(String keyStatus) {
		this.keyStatus = keyStatus;
	}

	public int getRegNum() {
		return regNum;
	}
	
}

`,-1)),n("button",{class:"button-9",id:"btn1",onClick:t[4]||(t[4]=i=>e.$router.push("/method-completion"))},y(s.button_value),1)],4)]),t[22]||(t[22]=_('<div class="column" data-v-4498c761><h1 style="padding:25px;padding-bottom:0px;" data-v-4498c761> Class diagram. </h1><p style="padding:25px;padding-top:0px;" data-v-4498c761> If the diagram does not fit on your screen, right click on the image and in options, choose the &#39;Open in new tab&#39; option. </p><div class="codebox sticky" data-v-4498c761><img style="max-width:800px;" src="'+j+'" data-v-4498c761></div></div>',1))])])}const bt=D(A,[["render",J],["__scopeId","data-v-4498c761"]]);export{bt as default};
