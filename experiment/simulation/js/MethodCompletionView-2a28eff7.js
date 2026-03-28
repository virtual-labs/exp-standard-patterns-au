import{C,V as g,a as w,P as S,b as k}from"./ClassDiagramViewComponent-9ede83b3.js";import{_ as c,o as u,c as d,a as e,b as x,r as f,n as y,e as i,d as s,w as r,v as a,t as m,K as j,f as V,F as E}from"./index-c0d224d2.js";import h from"./abstractComponent-f6cab742.js";import R from"./arrayListComponent-ab4ee9a4.js";import T from"./classCastExceptionComponent-8f6ad5fe.js";import I from"./constructorWritingComponent-b018f305.js";import P from"./dateComponent-02897adf.js";import D from"./extendsComponent-2285358b.js";import B from"./functionCallingWithObjectComponent-e614d4ee.js";import N from"./getterComponent-9e89731e.js";import U from"./interfaceComponent-d2c7b039.js";import F from"./newVariableComponent-0098c706.js";import M from"./nullPointerExceptionComponent-b96ef88a.js";import O from"./objectCreationComponent-cf4e8c41.js";import H from"./parseExceptionComponent-230912d6.js";import A from"./passingArgumentsToFunctionsComponent-d6a8e5b1.js";import L from"./printFunctionComponent-fb083c3d.js";import W from"./setterComponent-272306e4.js";import K from"./StringcompareComponent-ec516131.js";import q from"./superKeywordComponent-79cfc5e0.js";import z from"./thisComponent-592a4f36.js";import G from"./tryCatchComponent-8bd58cac.js";const J={},Q={class:"app"},X={class:"box"};function Y(n,t){return u(),d("main",Q,[e("div",X,[t[1]||(t[1]=e("h1",null,"Instructions",-1)),t[2]||(t[2]=e("ol",null,[e("li",{class:"arrow"}," To work on future experiments, we will now fill in the Rental System class. "),e("li",{class:"arrow"}," Person, Customer, Exec, Reservation and Vehicle classes have been implemented and are to be referred to. "),e("li",{class:"arrow"}," Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar. "),e("li",{class:"arrow"}," To proceed, finish coding the RentalSystem class, after which a Next button will appear. ")],-1)),e("button",{class:"button-9",onClick:t[0]||(t[0]=b=>n.$emit("instructions-read",!0))}," Next ")])])}const Z=c(J,[["render",Y],["__scopeId","data-v-75e3f467"]]);const $={},_={class:"app"};function tt(n,t){return u(),d("main",_,t[0]||(t[0]=[e("div",{class:"codebox"},[e("pre",null,`
import java.text.ParseException;

public class RentalSystem {
	public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
	
	public Exec assignExec()
	{
		return this.execobj[0];
	}
	
	public void visitOffice(Reservation res) throws ParseException
	{
		Exec cl = assignExec();
		if(cl !=null)
		{
			if (cl.requestVehicle(res).compareTo("initiate contract")==0)
			{
				System.out.println("Vehicle is available, initiating contract..");
				System.out.println(cl.signContract(res));
			}
			else
				System.out.println("Vehicle is on trip, please wait");
		}
		else 
			System.out.println("wait for exec");
	}
}

      
      `)],-1)]))}const et=c($,[["render",tt],["__scopeId","data-v-ec9d3b90"]]);const nt={components:{abstractComponent:h,arrayListComponent:R,classCastExceptionComponent:T,constructorWritingComponent:I,dateComponent:P,extendsComponent:D,functionCallingWithObjectComponent:B,getterComponent:N,interfaceComponent:U,newVariableComponent:F,nullPointerExceptionComponent:M,objectCreationComponent:O,parseExceptionComponent:H,passingArgumentsToFunctionsComponent:A,printFunctionComponent:L,setterComponent:W,stringCompareComponent:K,superKeywordComponent:q,thisComponent:z,tryCatchComponent:G},methods:{popup(n){this.currentComponent=n,console.log("popup");var t=document.getElementById("myModal");console.log(t);var b=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),b.onclick=function(){t.style.display="none"},window.onclick=function(v){v.target==t&&(t.style.display="none")}},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},incorrect(){var n=document.getElementById("snackbar");n.innerHTML="Incorrect. Try again",n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one=="public"&&this.two=="Customer[]"&&this.three=="public"&&this.four=="Exec[]"&&this.five=="public"&&this.six=="Vehicle[]"&&this.seven=="public"&&this.eight=="Reservation[]"?(this.correct1(),this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,console.log("one_correct")):(this.incorrect(),this.button_value=this.button_text)},validate_two(){this.nine==="Exec"?(this.correct1(),this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",console.log("two_correct")):(this.incorrect(),this.button_value=this.button_text)},validate_three(){this.ten==="execobj[0]"?(this.correct1(),this.button_value=this.button_text_right,this.display[2]="none",this.display[3]="block",console.log("three_correct"),this.completed[1]=!0):(this.incorrect(),this.button_value=this.button_text)},validate_four(){this.eleven==="Reservation"?(this.correct1(),this.button_value=this.button_text_right,this.display[3]="none",this.display[4]="block",console.log("four_correct")):(this.incorrect(),this.button_value=this.button_text)},validate_five(){this.twelve==="assignExec()"?(this.correct1(),this.button_value=this.button_text_right,this.display[4]="none",this.display[5]="block",console.log("five_correct"),this.completed[2]=!0,this.$emit("rentalSystemComplete",!0)):(this.incorrect(),this.button_value=this.button_text)}},data(){return{id:"container",class:"wrapper",button_value:"Next",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1]}}},ot={class:"app"},lt={id:"myModal"},st={class:"modal-content"},it={class:"column",style:{position:"sticky",top:"25%",left:"70%",float:"right"}},rt={class:"column"},pt={class:"codebox"},at={style:{"line-height":"125%"}},ut={class:"row"},mt={class:"column"},ct={style:{display:"flex","flex-direction":"row"}},dt={style:{flex:"1"}};function bt(n,t,b,v,l,p){return u(),d("main",ot,[t[71]||(t[71]=e("div",{id:"snackbar"},"Error Message.",-1)),e("div",lt,[e("div",st,[t[20]||(t[20]=e("span",{class:"close"},"×",-1)),(u(),x(f(l.currentComponent)))])]),e("div",it,[e("div",rt,[e("div",pt,[e("ul",at,[e("li",{class:y({completed:l.completed[0]})}," Initiate object arrays of Customer, Exec, Vehicle and Reservation classes. ",2),e("li",{class:y({completed:l.completed[1]})}," Write a method that assigns the 0th element of the Exec array called assignExec ",2),e("li",{class:y({completed:l.completed[2]})}," Write a method visitOffice that checks for exec availability, verifies vehicle status and signs contract if vehicle is available ",2)])])])]),e("div",ut,[e("div",mt,[e("div",ct,[t[21]||(t[21]=e("div",{style:{flex:"5"}},[e("h1",{style:{padding:"25px","padding-bottom":"0px"}}," Constructing RentalSystem "),e("p",{style:{padding:"25px","padding-top":"0px"}}," Create the RentalSystem class with methods to assign an Exec to a Customer and to handle office visits from customers. ")],-1)),e("div",dt,[e("button",{style:i([{float:"right","margin-bottom":"30px"},{display:l.display[0]}]),onClick:t[0]||(t[0]=o=>p.popup("arraysComponent")),class:"button-30"}," Help ",4),e("button",{style:i([{float:"right","margin-bottom":"30px"},{display:l.display[2]}]),onClick:t[1]||(t[1]=o=>p.popup("thisComponent")),class:"button-30"}," Help ",4),e("button",{style:i([{float:"right","margin-bottom":"30px"},{display:l.display[3]}]),onClick:t[2]||(t[2]=o=>p.popup("passingArguementsToFunctionsComponent")),class:"button-30"}," Help ",4)])]),e("div",{class:"codebox",style:i({display:l.display[0]})},[t[22]||(t[22]=e("pre",null,`import java.text.ParseException;

public class RentalSystem {
`,-1)),t[23]||(t[23]=s("   ")),r(e("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":t[3]||(t[3]=o=>n.one=o)},null,512),[[a,n.one]]),r(e("input",{spellcheck:"false",id:"two",maxlength:"10",style:{width:"95px"},"onUpdate:modelValue":t[4]||(t[4]=o=>n.two=o)},null,512),[[a,n.two]]),t[24]||(t[24]=s(" cobj; ")),t[25]||(t[25]=e("br",null,null,-1)),t[26]||(t[26]=s("  ")),r(e("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":t[5]||(t[5]=o=>n.three=o)},null,512),[[a,n.three]]),r(e("input",{spellcheck:"false",id:"two",maxlength:"7",style:{width:"80px"},"onUpdate:modelValue":t[6]||(t[6]=o=>n.four=o)},null,512),[[a,n.four]]),t[27]||(t[27]=s(" execobj; ")),t[28]||(t[28]=e("br",null,null,-1)),t[29]||(t[29]=s("  ")),r(e("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":t[7]||(t[7]=o=>n.five=o)},null,512),[[a,n.five]]),r(e("input",{spellcheck:"false",id:"two",maxlength:"9",style:{width:"90px"},"onUpdate:modelValue":t[8]||(t[8]=o=>n.six=o)},null,512),[[a,n.six]]),t[30]||(t[30]=s(" vobj; ")),t[31]||(t[31]=e("br",null,null,-1)),t[32]||(t[32]=s("  ")),r(e("input",{spellcheck:"false",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":t[9]||(t[9]=o=>n.seven=o)},null,512),[[a,n.seven]]),r(e("input",{spellcheck:"false",id:"two",maxlength:"14",style:{width:"120px"},"onUpdate:modelValue":t[10]||(t[10]=o=>n.eight=o)},null,512),[[a,n.eight]]),t[33]||(t[33]=s(" robj; ")),t[34]||(t[34]=e("p",{id:"comment"}," //Create arrays of Customer, Exec, Vehicle and Reservation objects ",-1)),t[35]||(t[35]=e("br",null,null,-1)),t[36]||(t[36]=s(" } ")),t[37]||(t[37]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[11]||(t[11]=o=>p.validate_one())},m(l.button_value),1)],4),e("div",{class:"codebox",style:i({display:l.display[1]})},[t[38]||(t[38]=e("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
                `,-1)),t[39]||(t[39]=e("br",null,null,-1)),t[40]||(t[40]=s("   public ")),r(e("input",{spellcheck:"false",maxlength:"7",style:{width:"90px"},"onUpdate:modelValue":t[12]||(t[12]=o=>n.nine=o)},null,512),[[a,n.nine]]),t[41]||(t[41]=s(' assignExec(){" ')),t[42]||(t[42]=e("p",{id:"comment"}," //Create a method assignExec() which returns an object of type Exec ",-1)),t[43]||(t[43]=e("br",null,null,-1)),t[44]||(t[44]=s(" } ")),t[45]||(t[45]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn2",onClick:t[13]||(t[13]=o=>p.validate_two())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:i({display:l.display[2]})},[t[46]||(t[46]=e("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Exec assignExec()
	{
                `,-1)),t[47]||(t[47]=e("br",null,null,-1)),t[48]||(t[48]=s("   return this. ")),r(e("input",{spellcheck:"false",maxlength:"11",style:{width:"110px"},"onUpdate:modelValue":t[14]||(t[14]=o=>n.ten=o)},null,512),[[a,n.ten]]),t[49]||(t[49]=s("; ")),t[50]||(t[50]=e("p",{id:"comment"},"//Return 0th object of the execobj array",-1)),t[51]||(t[51]=e("br",null,null,-1)),t[52]||(t[52]=s(" } ")),t[53]||(t[53]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn3",onClick:t[15]||(t[15]=o=>p.validate_three())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:i({display:l.display[3]})},[t[54]||(t[54]=e("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Exec assignExec()
	{   
        return this.execobj[0];
    }
                `,-1)),t[55]||(t[55]=e("br",null,null,-1)),t[56]||(t[56]=s("   public void visitOffice( ")),r(e("input",{spellcheck:"false",maxlength:"11",style:{width:"110px"},"onUpdate:modelValue":t[16]||(t[16]=o=>n.eleven=o)},null,512),[[a,n.eleven]]),t[57]||(t[57]=s(" res) throws ParseException{ ")),t[58]||(t[58]=e("p",{id:"comment"}," //Pass an object of Reservation as parameter ",-1)),t[59]||(t[59]=e("br",null,null,-1)),t[60]||(t[60]=s(" } ")),t[61]||(t[61]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn4",onClick:t[17]||(t[17]=o=>p.validate_four())},m(l.button_value),1)],4),e("div",{class:"codebox",style:i({display:l.display[4]})},[t[62]||(t[62]=e("pre",null,`import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Exec assignExec()
	{   
        return this.execobj[0];
    }

    public void visitOffice(Reservation res) throws ParseException{
                `,-1)),t[63]||(t[63]=e("br",null,null,-1)),t[64]||(t[64]=s("   Exec cl = ")),r(e("input",{spellcheck:"false",maxlength:"13",style:{width:"110px"},"onUpdate:modelValue":t[18]||(t[18]=o=>n.twelve=o)},null,512),[[a,n.twelve]]),t[65]||(t[65]=s("; ")),t[66]||(t[66]=e("p",{id:"comment"}," //Call a function to assign a exec object to the cl variable ",-1)),t[67]||(t[67]=e("br",null,null,-1)),t[68]||(t[68]=s(" } ")),t[69]||(t[69]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn5",onClick:t[19]||(t[19]=o=>p.validate_five())},m(l.button_value),1)],4),e("div",{class:"codebox",style:i([{display:l.display[5]},{width:"100ch"}])},t[70]||(t[70]=[e("pre",null,`                    
import java.text.ParseException;

public class RentalSystem {
	public Customer[] cobj;
	public Exec[] execobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
	
	public Exec assignExec()
	{
		return this.execobj[0];
	}
	
	public void visitOffice(Reservation res) throws ParseException
	{
		Exec cl = assignExec();
		if(cl !=null)
		{
			if (cl.requestVehicle(res).compareTo("initiate contract")==0)
			{
				System.out.println("Vehicle is available, initiating contract..");
				System.out.println(cl.signContract(res));
			}
			else
				System.out.println("Vehicle is on trip, please wait");
		}
		else 
			System.out.println("wait for exec");
	}
}

                `,-1)]),4)])])])}const vt=c(nt,[["render",bt],["__scopeId","data-v-c181e5df"]]);const yt={},xt={class:"app"};function ft(n,t){return u(),d("main",xt,t[0]||(t[0]=[e("div",{class:"codebox"},[e("pre",null,`
import java.util.Scanner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
		
		RentalSystem rentalSystem = new RentalSystem();
		
		rentalSystem.execobj=new Exec[1];
		rentalSystem.execobj[0]=new Exec("EFG", "efg@gmail.com");
		
		rentalSystem.cobj= new Customer[3];
		rentalSystem.cobj[0]=new Customer("ABC", "abc@gmail.com");
		rentalSystem.cobj[1]=new Customer("DEF", 8654678976L);
		rentalSystem.cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		rentalSystem.cobj[0].setCity("Coimbatore");
		rentalSystem.cobj[1].setCity("Coimbatore");
		rentalSystem.cobj[2].setCity("Chennai");
		
		rentalSystem.vobj = new Vehicle[1];
		rentalSystem.vobj[0]=new Vehicle(1234);
		
		rentalSystem.robj=new Reservation[1];
		rentalSystem.robj[0]= new Reservation(rentalSystem.cobj[0],rentalSystem.vobj[0]);
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
        Date d = sdformat.parse("2022-02-29");
		rentalSystem.robj[0].setBookingDate(d);
		rentalSystem.robj[0].setContractStatus("Reservation not released");
		
		rentalSystem.visitOffice(rentalSystem.robj[0]);
	}	
}

      
      `)],-1)]))}const Ct=c(yt,[["render",ft],["__scopeId","data-v-c89775bf"]]);const gt={components:{CustomerView:C,VehicleView:g,InstructionsView:Z,ReservationSystemView:et,ClassView:w,PersonView:S,ClerkView:k,RentalSystem:vt,TestDriverViewComponent:Ct},data(){return{componentSelect:"InstructionsView",testdriver_completed:!1,rental_system_completed:!1}},methods:{testDriverCallBack(n){console.log("Test driver callback triggered",n),this.testdriver_completed=!0},rentalSystemCallBack(n){console.log("Rental system callback triggered",n),this.rental_system_completed=!0},instructionsReadCallback(n){console.log("Instructions callback triggered",n),this.componentSelect="RentalSystem"}}},wt={class:"app"},St={id:"buttons",class:"relative"};function kt(n,t,b,v,l,p){return u(),d(E,null,[e("main",wt,[e("button",{onClick:t[0]||(t[0]=o=>l.componentSelect="InstructionsView"),style:i(l.componentSelect==="InstructionsView"?"background-color: #55acee":"")}," 1. Instructions ",4),e("button",{onClick:t[1]||(t[1]=o=>l.componentSelect="PersonView"),style:i(l.componentSelect==="PersonView"?"background-color: #55acee":"")}," 2. Person Class ",4),e("button",{onClick:t[2]||(t[2]=o=>l.componentSelect="CustomerView"),style:i(l.componentSelect==="CustomerView"?"background-color: #55acee":"")}," 3. Customer Class ",4),e("button",{onClick:t[3]||(t[3]=o=>l.componentSelect="ClerkView"),style:i(l.componentSelect==="ClerkView"?"background-color: #55acee":"")}," 4. Exec Class ",4),e("button",{onClick:t[4]||(t[4]=o=>l.componentSelect="VehicleView"),style:i(l.componentSelect==="VehicleView"?"background-color: #55acee":"")}," 5. Vehicle Class ",4),e("button",{onClick:t[5]||(t[5]=o=>l.componentSelect="RentalSystem"),style:i(l.componentSelect==="RentalSystem"?"background-color: #55acee":"")}," 6. Rental System Class ",4),e("button",{onClick:t[6]||(t[6]=o=>l.componentSelect="TestDriverViewComponent"),style:i(l.componentSelect==="TestDriverViewComponent"?"background-color: #55acee":"")}," 7. Test Driver ",4),e("button",{onClick:t[7]||(t[7]=o=>l.componentSelect="ClassView"),style:i(l.componentSelect==="ClassView"?"background-color: #55acee":"")}," 8. Class diagram ",4),(u(),x(j,null,[(u(),x(f(l.componentSelect),{onTestdriverComplete:p.testDriverCallBack,onRentalSystemComplete:p.rentalSystemCallBack,onInstructionsRead:p.instructionsReadCallback},null,40,["onTestdriverComplete","onRentalSystemComplete","onInstructionsRead"]))],1024))]),r(e("footer",null,[e("div",St,[e("button",{class:"navitem",onClick:t[8]||(t[8]=o=>n.$router.push("/method-completion-execution"))}," Next ")])],512),[[V,l.rental_system_completed]])],64)}const Gt=c(gt,[["render",kt]]);export{Gt as default};
