import{C as w,V as j,a as c,P as k,b as x}from"./ClassDiagramViewComponent-9ede83b3.js";import{_ as v,o as b,c as g,a as e,b as y,r as f,n as a,d as i,e as s,w as r,v as u,t as m,K as V,f as D,F as S}from"./index-c0d224d2.js";import P from"./abstractComponent-f6cab742.js";import E from"./arrayListComponent-ab4ee9a4.js";import R from"./arraysComponent-dbab08de.js";import I from"./classCastExceptionComponent-8f6ad5fe.js";import T from"./constructorWritingComponent-b018f305.js";import U from"./dateComponent-02897adf.js";import B from"./extendsComponent-2285358b.js";import F from"./functionCallingWithObjectComponent-e614d4ee.js";import H from"./getterComponent-9e89731e.js";import L from"./interfaceComponent-d2c7b039.js";import G from"./newVariableComponent-0098c706.js";import N from"./nullPointerExceptionComponent-b96ef88a.js";import O from"./objectCreationComponent-cf4e8c41.js";import A from"./parseExceptionComponent-230912d6.js";import q from"./passingArgumentsToFunctionsComponent-d6a8e5b1.js";import Q from"./printFunctionComponent-fb083c3d.js";import M from"./setterComponent-272306e4.js";import K from"./StringcompareComponent-ec516131.js";import W from"./superKeywordComponent-79cfc5e0.js";import z from"./thisComponent-592a4f36.js";import h from"./tryCatchComponent-8bd58cac.js";const J={},X={class:"app"};function Y(o,t){return b(),g("main",X,t[0]||(t[0]=[e("div",{class:"codebox"},[e("pre",null,`import java.util.Date;

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
	
}


      
      `)],-1)]))}const Z=v(J,[["render",Y],["__scopeId","data-v-1af92980"]]);const $={},_={class:"app"},tt={class:"box"};function et(o,t){return b(),g("main",_,[e("div",tt,[t[1]||(t[1]=e("h1",null,"Instructions",-1)),t[2]||(t[2]=e("ol",null,[e("li",{class:"arrow"}," To learn about upcasting, down casting and static binding, we'll be modifying the TestDriver class. "),e("li",{class:"arrow"}," Person, Customer, Exec, Reservation and Vehicle classes have been implemented and are to be referred to. "),e("li",{class:"arrow"}," Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar. "),e("li",{class:"arrow"}," To proceed, finish coding the Test Driver class, after which a Next button will appear. ")],-1)),e("button",{class:"button-9",onClick:t[0]||(t[0]=d=>o.$emit("instructions-read",!0))}," Next ")])])}const nt=v($,[["render",et],["__scopeId","data-v-57645015"]]);const ot={components:{abstractComponent:P,arrayListComponent:E,arraysComponent:R,classCastExceptionComponent:I,constructorWritingComponent:T,dateComponent:U,extendsComponent:B,functionCallingWithObjectComponent:F,getterComponent:H,interfaceComponent:L,newVariableComponent:G,nullPointerExceptionComponent:N,objectCreationComponent:O,parseExceptionComponent:A,passingArgumentsToFunctionsComponent:q,printFunctionComponent:Q,setterComponent:M,stringCompareComponent:K,superKeywordComponent:W,thisComponent:z,tryCatchComponent:h},methods:{popup(o){this.currentComponent=o,console.log("popup");var t=document.getElementById("myModal");console.log(t);var d=document.getElementsByClassName("close")[0];t.style.display="block",console.log(t.style.display),d.onclick=function(){t.style.display="none"},window.onclick=function(C){C.target==t&&(t.style.display="none")}},correct1(){var o=document.getElementById("snackbar");o.innerHTML="Correct",o.style.backgroundColor="green",o.className="show",setTimeout(function(){o.className=o.className.replace("show","")},3e3)},incorrect(){var o=document.getElementById("snackbar");o.innerHTML="Incorrect. Try again",o.style.backgroundColor="red",o.className="show",setTimeout(function(){o.className=o.className.replace("show","")},3e3)},validate_one(){this.one=="Person[]"&&this.two=="Person[5]"?(this.correct1(),this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,console.log("one_correct")):this.incorrect()},validate_two(){this.three=="Customer"&&this.four=="ABC"&&this.five=="abc@gmail.com"?(this.correct1(),this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",this.completed[1]=!0):this.incorrect()},validate_three(){this.six=="Exec"&&this.seven=="EFG"&&this.eight=="efg@gmail.com"?(this.correct1(),this.button_value=this.button_text_right,this.display[2]="none",this.display[3]="block",this.completed[2]=!0):this.incorrect()},validate_four(){this.nine=="Person"&&this.ten=="PQR"&&this.eleven=="pqr@gmail.com"?(this.correct1(),this.button_value=this.button_text_right,this.display[3]="none",this.display[4]="block",this.completed[3]=!0):this.incorrect()},validate_five(){this.twelve==="setCity"&&this.thirteen==="Coimbatore"?(this.correct1(),this.button_value=this.button_text_right,this.display[4]="none",this.display[5]="block",this.completed[4]=!0):this.incorrect()},validate_six(){this.fourteen==="Vehicle"&&this.fifteen==="Vehicle"&&this.sixteen==="1234"?(this.correct1(),this.button_value=this.button_text_right,this.display[5]="none",this.display[6]="block",this.completed[5]=!0):this.incorrect()},validate_seven(){this.seventeen==="Reservation"&&this.eighteen==="Reservation"&&this.nineteen==="Customer"?(this.correct1(),this.button_value=this.button_text_right,this.display[6]="none",this.display[7]="block",this.completed[6]=!0):this.incorrect()},validate_eight(){this.twenty==="setBookingDate"&&this.twentyone==="Date()"?(this.correct1(),this.button_value=this.button_text_right,this.display[7]="none",this.display[8]="block",this.completed[7]=!0,this.$emit("testdriverComplete",!0)):this.incorrect()}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",currentComponent:"constructorWritingComponent",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1,!1,!1,!1,!1,!1]}}},lt={class:"app"},it={id:"myModal"},st={class:"modal-content"},rt={class:"column",style:{position:"sticky",float:"right",top:"5%",left:"80%"}},ut={class:"column"},pt={class:"codebox"},mt={style:{"line-height":"125%"}},at={class:"row"},bt={class:"column"},dt={style:{display:"flex","flex-direction":"row"}},vt={style:{flex:"1"}};function gt(o,t,d,C,l,p){return b(),g("main",lt,[t[130]||(t[130]=e("div",{id:"snackbar"},"Error Message.",-1)),e("div",it,[e("div",st,[t[38]||(t[38]=e("span",{class:"close"},"×",-1)),(b(),y(f(l.currentComponent)))])]),e("div",rt,[e("div",ut,[e("div",pt,[e("ul",mt,[e("li",{class:a({completed:l.completed[0]})}," Initiate an array of type Person with 5 objects. ",2),e("li",{class:a({completed:l.completed[1]})},t[39]||(t[39]=[i(" Using the concept of "),e("b",null,"upcasting",-1),i(", initiate objects 0, 1 and 2 as instances of the class Customer. ")]),2),e("li",{class:a({completed:l.completed[2]})},t[40]||(t[40]=[i(" Using the concept of "),e("b",null,"upcasting",-1),i(", initiate object 3 as an instance of of the class Exec. ")]),2),e("li",{class:a({completed:l.completed[3]})},t[41]||(t[41]=[i(" Initiate object 4 as an instance of class Person using the concept of "),e("b",null,"static binding",-1)]),2),e("li",{class:a({completed:l.completed[4]})}," Set the city for each of the objects based on instructions in the comments ",2),e("li",{class:a({completed:l.completed[5]})},t[42]||(t[42]=[i(" Create an object "),e("b",null,"vobj",-1),i(" of type Vehicle with a regNum value of 1234 ")]),2),e("li",{class:a({completed:l.completed[6]})},t[43]||(t[43]=[i(" Create an object "),e("b",null,"robj1",-1),i(" of type Reservation passing cobj[0] (with proper typecasting) and vobj as parameters. ")]),2),e("li",{class:a({completed:l.completed[7]})}," Set the booking date for robj1 to the current date. ",2)])])])]),e("div",at,[e("div",bt,[e("div",dt,[t[44]||(t[44]=e("div",{style:{flex:"5"}},[e("h1",{style:{padding:"25px","padding-bottom":"0px"}}," Implementing the Test Driver "),e("p",{style:{padding:"25px","padding-top":"0px"}}," Follow the instructions in the comments to understand the concepts of upcasting and downcasting ")],-1)),e("div",vt,[e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[0]}]),onClick:t[0]||(t[0]=n=>p.popup("arraysComponent")),class:"button-30"}," Help ",4),e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[1]}]),onClick:t[1]||(t[1]=n=>p.popup("objectCreationComponent")),class:"button-30"}," Help ",4),e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[2]}]),onClick:t[2]||(t[2]=n=>p.popup("objectCreationComponent")),class:"button-30"}," Help ",4),e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[3]}]),onClick:t[3]||(t[3]=n=>p.popup("objectCreationComponent")),class:"button-30"}," Help ",4),e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[4]}]),onClick:t[4]||(t[4]=n=>p.popup("setterComponent")),class:"button-30"}," Help ",4),e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[5]}]),onClick:t[5]||(t[5]=n=>p.popup("objectCreationComponent")),class:"button-30"}," Help ",4),e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[6]}]),onClick:t[6]||(t[6]=n=>p.popup("objectCreationComponent")),class:"button-30"}," Help ",4),e("button",{style:s([{float:"right","margin-bottom":"30px"},{display:l.display[7]}]),onClick:t[7]||(t[7]=n=>p.popup("setterComponent")),class:"button-30"}," Help ",4)])]),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[0]})},[t[45]||(t[45]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {`,-1)),t[46]||(t[46]=i("   ")),r(e("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":t[8]||(t[8]=n=>o.one=n)},null,512),[[u,o.one]]),t[47]||(t[47]=i(" cobj = new ")),r(e("input",{spellcheck:"false",id:"two",maxlength:"9",style:{width:"95px"},"onUpdate:modelValue":t[9]||(t[9]=n=>o.two=n)},null,512),[[u,o.two]]),t[48]||(t[48]=i("; ")),t[49]||(t[49]=e("p",{id:"comment"}," //Create an array of type Person with 5 objects ",-1)),t[50]||(t[50]=e("br",null,null,-1)),t[51]||(t[51]=i(" } ")),t[52]||(t[52]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn1",onClick:t[10]||(t[10]=n=>p.validate_one())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[1]})},[t[53]||(t[53]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj= new Person[5];
                  `,-1)),t[54]||(t[54]=e("br",null,null,-1)),t[55]||(t[55]=i("   cobj[0] = new ")),r(e("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":t[11]||(t[11]=n=>o.three=n)},null,512),[[u,o.three]]),t[56]||(t[56]=i('(" ')),r(e("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":t[12]||(t[12]=n=>o.four=n)},null,512),[[u,o.four]]),t[57]||(t[57]=i('", " ')),r(e("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[13]||(t[13]=n=>o.five=n)},null,512),[[u,o.five]]),t[58]||(t[58]=i('") ')),t[59]||(t[59]=e("p",{id:"comment"},' //Create a new Customer object using name as "ABC" and email "abc@gmail.com" ',-1)),t[60]||(t[60]=e("br",null,null,-1)),t[61]||(t[61]=i(" } ")),t[62]||(t[62]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn2",onClick:t[14]||(t[14]=n=>p.validate_two())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[2]})},[t[63]||(t[63]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj= new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
                  `,-1)),t[64]||(t[64]=e("br",null,null,-1)),t[65]||(t[65]=i("   cobj[3] = new ")),r(e("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[15]||(t[15]=n=>o.six=n)},null,512),[[u,o.six]]),t[66]||(t[66]=i('(" ')),r(e("input",{spellcheck:"false",maxlength:"3",style:{width:"60px"},"onUpdate:modelValue":t[16]||(t[16]=n=>o.seven=n)},null,512),[[u,o.seven]]),t[67]||(t[67]=i('", " ')),r(e("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[17]||(t[17]=n=>o.eight=n)},null,512),[[u,o.eight]]),t[68]||(t[68]=i('") ')),t[69]||(t[69]=e("p",{id:"comment"},' //Create a new Exec object using name as "EFG" and email as "efg@gmail.com" ',-1)),t[70]||(t[70]=e("br",null,null,-1)),t[71]||(t[71]=i(" } ")),t[72]||(t[72]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn3",onClick:t[18]||(t[18]=n=>p.validate_three())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[3]})},[t[73]||(t[73]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj= new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
                  `,-1)),t[74]||(t[74]=e("br",null,null,-1)),t[75]||(t[75]=i("   cobj[3] = new ")),r(e("input",{spellcheck:"false",maxlength:"6",style:{width:"70px"},"onUpdate:modelValue":t[19]||(t[19]=n=>o.nine=n)},null,512),[[u,o.nine]]),t[76]||(t[76]=i('(" ')),r(e("input",{spellcheck:"false",maxlength:"3",style:{width:"55px"},"onUpdate:modelValue":t[20]||(t[20]=n=>o.ten=n)},null,512),[[u,o.ten]]),t[77]||(t[77]=i('", " ')),r(e("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":t[21]||(t[21]=n=>o.eleven=n)},null,512),[[u,o.eleven]]),t[78]||(t[78]=i('") ')),t[79]||(t[79]=e("p",{id:"comment"},' //Create a new Person object using name as "PQR" and email as "pqr@gmail.com" ',-1)),t[80]||(t[80]=e("br",null,null,-1)),t[81]||(t[81]=i(" } ")),t[82]||(t[82]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn4",onClick:t[22]||(t[22]=n=>p.validate_four())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[4]})},[t[83]||(t[83]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")

        `,-1)),t[84]||(t[84]=e("br",null,null,-1)),t[85]||(t[85]=i("   cobj[0]. ")),r(e("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[23]||(t[23]=n=>o.twelve=n)},null,512),[[u,o.twelve]]),t[86]||(t[86]=i('(" ')),r(e("input",{spellcheck:"false",maxlength:"10",style:{width:"110px"},"onUpdate:modelValue":t[24]||(t[24]=n=>o.thirteen=n)},null,512),[[u,o.thirteen]]),t[87]||(t[87]=i('"); ')),t[88]||(t[88]=e("br",null,null,-1)),t[89]||(t[89]=i("  ")),t[90]||(t[90]=e("p",{id:"comment"},' //Set the City of first object to "Coimbatore" ',-1)),t[91]||(t[91]=e("br",null,null,-1)),t[92]||(t[92]=i(" } ")),t[93]||(t[93]=e("br",null,null,-1)),t[94]||(t[94]=i(" } ")),t[95]||(t[95]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn5",onClick:t[25]||(t[25]=n=>p.validate_five())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[5]})},[t[96]||(t[96]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");
        `,-1)),t[97]||(t[97]=i("     ")),r(e("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[26]||(t[26]=n=>o.fourteen=n)},null,512),[[u,o.fourteen]]),t[98]||(t[98]=i(" vobj = new ")),r(e("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":t[27]||(t[27]=n=>o.fifteen=n)},null,512),[[u,o.fifteen]]),t[99]||(t[99]=i("( ")),r(e("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[28]||(t[28]=n=>o.sixteen=n)},null,512),[[u,o.sixteen]]),t[100]||(t[100]=i(";) ")),t[101]||(t[101]=e("br",null,null,-1)),t[102]||(t[102]=i(" } ")),t[103]||(t[103]=e("p",{id:"comment"},' //Create a new Vehicle object with value "1234" ',-1)),t[104]||(t[104]=e("br",null,null,-1)),t[105]||(t[105]=i(" } ")),t[106]||(t[106]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn6",onClick:t[29]||(t[29]=n=>p.validate_six())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[6]})},[t[107]||(t[107]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");

          Vehicle vobj = new Vehicle("1234");
        `,-1)),t[108]||(t[108]=i("     ")),r(e("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":t[30]||(t[30]=n=>o.seventeen=n)},null,512),[[u,o.seventeen]]),t[109]||(t[109]=i(" robj = new ")),r(e("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":t[31]||(t[31]=n=>o.eighteen=n)},null,512),[[u,o.eighteen]]),t[110]||(t[110]=i("(( ")),r(e("input",{spellcheck:"false",maxlength:"8",style:{width:"85px"},"onUpdate:modelValue":t[32]||(t[32]=n=>o.nineteen=n)},null,512),[[u,o.nineteen]]),t[111]||(t[111]=i(")cobj[0], vobj); ")),t[112]||(t[112]=e("br",null,null,-1)),t[113]||(t[113]=i(" } ")),t[114]||(t[114]=e("p",{id:"comment"}," //Create a Reservation object 'robj' and initialise it by passing cobj[0] and vobj as parameters. ",-1)),t[115]||(t[115]=e("p",{id:"comment"}," //Clue: cobj[0] is of type Person but Reservation only takes Customer objects. ",-1)),t[116]||(t[116]=e("br",null,null,-1)),t[117]||(t[117]=i(" } ")),t[118]||(t[118]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn7",onClick:t[33]||(t[33]=n=>p.validate_seven())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[7]})},[t[119]||(t[119]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");

          Vehicle vobj = new Vehicle("1234");
          Reservation robj1= new Reservation((Customer)cobj[0],vobj);
        `,-1)),t[120]||(t[120]=i("     robj1.")),r(e("input",{spellcheck:"false",maxlength:"14",style:{width:"130px"},"onUpdate:modelValue":t[34]||(t[34]=n=>o.twenty=n)},null,512),[[u,o.twenty]]),t[121]||(t[121]=i("(new ")),r(e("input",{spellcheck:"false",maxlength:"6",style:{width:"60px"},"onUpdate:modelValue":t[35]||(t[35]=n=>o.twentyone=n)},null,512),[[u,o.twentyone]]),t[122]||(t[122]=i("); ")),t[123]||(t[123]=e("br",null,null,-1)),t[124]||(t[124]=i(" } ")),t[125]||(t[125]=e("p",{id:"comment"}," //Set the booking date for robj1 to today's date ",-1)),t[126]||(t[126]=e("br",null,null,-1)),t[127]||(t[127]=i(" } ")),t[128]||(t[128]=e("br",null,null,-1)),e("button",{class:"button-9",id:"btn8",onClick:t[36]||(t[36]=n=>p.validate_eight())},m(l.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:s({display:l.display[8]})},[t[129]||(t[129]=e("pre",null,`  import java.util.Scanner;
  import java.util.Date;

  public class TestDriver {

      public static void main(String[] args) {
          Person[] cobj = new Person[5];
          cobj[0] = new Customer("ABC", "abc@gmail.com");
          cobj[1] = new Customer("DEF", 8654678976L);
          cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
          cobj[3] = new Exec("EFG", "efg@gmail.com")
          cobj[4] = new Person("PQR", "pqr@gmail.com")
          cobj[0].setCity("Coimbatore");
          cobj[1].setCity("Coimbatore");
          cobj[2].setCity("Chennai");
          cobj[3].setCity("Coimbatore");

          Vehicle vobj = new Vehicle("1234");
          Reservation robj1= new Reservation((Customer)cobj[0],vobj);

          robj1.setBookingDate(new Date());
        `,-1)),e("button",{class:"button-9",id:"btn8",onClick:t[37]||(t[37]=n=>o.$router.push("/abstraction"))},m(l.button_value),1)],4)])])])}const Ct=v(ot,[["render",gt],["__scopeId","data-v-7a680fec"]]);const yt={components:{CustomerView:w,ReservationView:Z,VehicleView:j,InstructionsView:nt,ReservationSystemView:Ct,ClassView:c,PersonView:k,ClerkView:x},data(){return{componentSelect:"InstructionsView",testdriver_completed:!1}},methods:{testDriverCallBack(o){console.log("Test driver callback triggered",o),this.testdriver_completed=!0},instructionsReadCallback(o){console.log("Instructions read",o),this.componentSelect="ReservationSystemView"}}},ft={class:"app"},wt={id:"buttons",class:"relative"};function jt(o,t,d,C,l,p){return b(),g(S,null,[e("main",ft,[e("button",{onClick:t[0]||(t[0]=n=>l.componentSelect="InstructionsView"),style:s(l.componentSelect==="InstructionsView"?"background-color: #55acee":"")}," 1. Instructions ",4),e("button",{onClick:t[1]||(t[1]=n=>l.componentSelect="ClassView"),style:s(l.componentSelect==="ClassView"?"background-color: #55acee":"")}," 2. Class diagram ",4),e("button",{onClick:t[2]||(t[2]=n=>l.componentSelect="PersonView"),style:s(l.componentSelect==="PersonView"?"background-color: #55acee":"")}," 3. Person Class ",4),e("button",{onClick:t[3]||(t[3]=n=>l.componentSelect="CustomerView"),style:s(l.componentSelect==="CustomerView"?"background-color: #55acee":"")}," 4. Customer Class ",4),e("button",{onClick:t[4]||(t[4]=n=>l.componentSelect="ClerkView"),style:s(l.componentSelect==="ClerkView"?"background-color: #55acee":"")}," 5. Exec Class ",4),e("button",{onClick:t[5]||(t[5]=n=>l.componentSelect="ReservationView"),style:s(l.componentSelect==="ReservationView"?"background-color: #55acee":"")}," 6. Reservation Class ",4),e("button",{onClick:t[6]||(t[6]=n=>l.componentSelect="VehicleView"),style:s(l.componentSelect==="VehicleView"?"background-color: #55acee":"")}," 7. Vehicle Class ",4),e("button",{onClick:t[7]||(t[7]=n=>l.componentSelect="ReservationSystemView"),style:s(l.componentSelect==="ReservationSystemView"?"background-color: #55acee":"")}," 8. Test Driver Class ",4),(b(),y(V,null,[(b(),y(f(l.componentSelect),{onTestdriverComplete:p.testDriverCallBack,onInstructionsRead:p.instructionsReadCallback},null,40,["onTestdriverComplete","onInstructionsRead"]))],1024))]),r(e("footer",null,[e("div",wt,[e("button",{class:"navitem",onClick:t[8]||(t[8]=n=>o.$router.push("/method-completion"))}," Next ")])],512),[[D,l.testdriver_completed]])],64)}const Kt=v(yt,[["render",jt]]);export{Kt as default};
