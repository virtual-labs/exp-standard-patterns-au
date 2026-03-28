import m from"./abstractComponent-f6cab742.js";import d from"./arrayListComponent-ab4ee9a4.js";import u from"./classCastExceptionComponent-8f6ad5fe.js";import b from"./constructorWritingComponent-b018f305.js";import g from"./dateComponent-02897adf.js";import y from"./extendsComponent-2285358b.js";import f from"./functionCallingWithObjectComponent-e614d4ee.js";import v from"./getterComponent-9e89731e.js";import h from"./interfaceComponent-d2c7b039.js";import C from"./newVariableComponent-0098c706.js";import x from"./nullPointerExceptionComponent-b96ef88a.js";import P from"./objectCreationComponent-cf4e8c41.js";import w from"./parseExceptionComponent-230912d6.js";import _ from"./passingArgumentsToFunctionsComponent-d6a8e5b1.js";import j from"./printFunctionComponent-fb083c3d.js";import S from"./setterComponent-272306e4.js";import k from"./StringcompareComponent-ec516131.js";import E from"./superKeywordComponent-79cfc5e0.js";import T from"./thisComponent-592a4f36.js";import N from"./tryCatchComponent-8bd58cac.js";import{_ as A,o as p,c as D,a as n,b as V,r as q,e as s,w as B,v as L,d as I,t as c,g as F}from"./index-c0d224d2.js";const R={components:{abstractComponent:m,arrayListComponent:d,classCastExceptionComponent:u,constructorWritingComponent:b,dateComponent:g,extendsComponent:y,functionCallingWithObjectComponent:f,getterComponent:v,interfaceComponent:h,newVariableComponent:C,nullPointerExceptionComponent:x,objectCreationComponent:P,parseExceptionComponent:w,passingArgumentsToFunctionsComponent:_,printFunctionComponent:j,setterComponent:S,stringCompareComponent:k,superKeywordComponent:E,thisComponent:T,tryCatchComponent:N},methods:{popup(i){this.currentComponent=i,console.log("popup");var t=document.getElementById("myModal");console.log(t);var r=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),r.onclick=function(){t.style.display="none"},window.onclick=function(l){l.target==t&&(t.style.display="none")}},validate_one(){this.one=="abstract"?(this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block"):this.button_value=this.button_text}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"abstractComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none"]}}},H={id:"myModal"},M={class:"modal-content"},O={style:{display:"flex","flex-direction":"row"}},U={style:{flex:"1"}},G={class:"flex"},Q={class:"flex"};function W(i,t,r,l,e,a){return p(),D("main",null,[n("div",H,[n("div",M,[t[5]||(t[5]=n("span",{class:"close"},"×",-1)),(p(),V(q(e.currentComponent)))])]),n("div",O,[t[6]||(t[6]=n("div",{style:{flex:"5"}},[n("h1",{style:{padding:"25px","padding-bottom":"0px"}}," Adding abstraction to the Person class "),n("p",{style:{padding:"25px","padding-top":"0px"}}," To continue, make the Person class abstract. Note that it can no longer be instantiated. ")],-1)),n("div",U,[n("button",{style:s([{float:"right","margin-bottom":"30px"},{display:e.display[0]}]),onClick:t[0]||(t[0]=o=>a.popup("abstractComponent")),class:"button-30"}," Help ",4)])]),n("div",G,[n("div",{class:"codebox",id:"codebox",style:s({display:e.display[0]})},[n("div",null,[B(n("input",{spellcheck:"false",type:"text",id:"input1","onUpdate:modelValue":t[1]||(t[1]=o=>i.one=o),maxlength:"8"},null,512),[[L,i.one]]),t[7]||(t[7]=I(" public class Person { "))]),t[8]||(t[8]=n("pre",null,`	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	public Person(String name, String email) {
		this.name = name;
		this.setEmail(email);
	}
	
	public Person(String name, long phone) {
		this.name = name;
		this.setPhone(phone);
	}
	
	public Person(String name, String email, long phone) {
		this.name = name;
		this.email =email;
		this.setPhone(phone);
	}

	public String getName() {
		return name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {		
		if(phone >= 0000000000L && phone <= 9999999999L)
			this.phone = phone;
		else
			this.phone = 9999999999L;
		
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

}

        `,-1)),n("button",{class:"button-9",id:"btn1",onClick:t[2]||(t[2]=(...o)=>a.validate_one&&a.validate_one(...o))},c(e.button_value),1),n("button",{style:{float:"right","margin-bottom":"30px"},onClick:t[3]||(t[3]=o=>a.popup("abstractComponent")),class:"button-30"}," Help ")],4),n("div",{class:"codebox",style:s({display:e.display[0]})}," Convert the class Person into an abstract class ",4)]),n("div",Q,[n("div",{class:"codebox",id:"codebox",style:s({display:e.display[1]})},t[9]||(t[9]=[n("h3",{style:{"font-family":"monospace"}},"Person.java",-1),n("p",{class:"comment"},"//Note that person is now abstract",-1),n("pre",null,`
abstract public class Person {
	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	...
}

        `,-1),n("div",null,[n("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),n("pre",null,`...

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {

		
		Person[] cobj= new Person[5];
		
		cobj[0]=new Customer("ABC", "abc@gmail.com"); //upcasting
		cobj[1]=new Customer("DEF", 8654678976L); //upcasting
                cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L); //upcasting
		cobj[3]=new Exec("EFG","efg@gmail.com"); //upcasting
		cobj[4]=new Person("PQR","pqr@gmail.com"); 
		
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		cobj[3].setCity("Coimbatore");
		
		Vehicle vobj=new Vehicle(1234);
		
		//Downcasting required from Person to Customer
		Reservation robj1= new Reservation((Customer)cobj[0],vobj);
		robj1.setBookingDate(new Date());

	}	
}

            `)],-1)]),4),n("div",{class:"outbox",style:s({display:e.display[1]})},[t[10]||(t[10]=F('<p data-v-70fa71c9>OUTPUT</p><p style="color:#ff6262;" data-v-70fa71c9> prog.Java:12: Abstract classes cannot be instantiated. They can only be extended. </p><p style="color:#ff6262;" data-v-70fa71c9>     cobj[4]=new Person(&quot;PQR&quot;,&quot;pqr@gmail.com&quot;) </p><br data-v-70fa71c9><p style="color:#ff6262;" data-v-70fa71c9>1 Error</p><div style="height:100px;background-color:#202020;" data-v-70fa71c9></div><h4 style="font-family:monospace;color:inherit;background-color:inherit;" data-v-70fa71c9> EXPLANATION </h4><p data-v-70fa71c9> As stated in the error, abstract classes cannot be instantiated. To access the attributes and methods defined here, the classes have to be extended. In our example, Person is being extended by Customer and Exec. </p>',8)),n("button",{class:"button-9",id:"btn1",onClick:t[4]||(t[4]=o=>i.$router.push("/request-vehicle-view"))},c(e.button_value),1)],4)])])}const bt=A(R,[["render",W],["__scopeId","data-v-70fa71c9"]]);export{bt as default};
