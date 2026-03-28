import{_ as u,o as l,c as a,a as t,g as p,d as o,w as r,v as i,i as m,F as b}from"./index-c0d224d2.js";const v={data(){return{}},methods:{incorrect(s){var e=document.getElementById("snackbar");e.innerHTML=s,e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},correct1(){var s=document.getElementById("snackbar");s.innerHTML="Correct",s.style.backgroundColor="green",s.className="show",setTimeout(function(){s.className=s.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="super"&&this.two.trim()=="print()"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},c={class:"flex-row"},f={style:{width:"50%"}},h={class:"outbox"},y={id:"buttons",class:"relative"},C={key:0,class:"navitem"};function w(s,e,x,g,T,d){return l(),a(b,null,[e[12]||(e[12]=t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Super Keyword")],-1)),e[13]||(e[13]=t("div",{id:"snackbar"},"Some text some message..",-1)),t("main",null,[t("div",c,[e[11]||(e[11]=p(`<div style="width:50%;" data-v-51b4f10b><h2 data-v-51b4f10b>Theory</h2><div class="outbox" data-v-51b4f10b><pre data-v-51b4f10b>                  <p id="comment" data-v-51b4f10b>// call the constructor of the parent class</p>
   public class ChildClass extends ParentClass {
    public ChildClass() {
        super();        
    }
}

  <p id="comment" data-v-51b4f10b>//call the method1() of the parent class</p>
  public class ChildClass extends ParentClass {
    public void method1() {
        super.method1(); 
    }
}
    
    <p id="comment" data-v-51b4f10b>// set the x field of the parent class to 10</p>

    public class ChildClass extends ParentClass {
    private int x;
    public void method1() {
        super.x = 10;
    }
}
</pre></div><div class="content" data-v-51b4f10b><p data-v-51b4f10b> The super keyword is used to call the constructor or method of the superclass, or to refer to a field of the superclass with the same name as a field in the subclass. </p></div></div>`,1)),t("div",f,[e[10]||(e[10]=t("h2",null,"Try it yourself",-1)),t("div",h,[t("pre",null,[e[3]||(e[3]=o(`class Base
{
  void print()
  {
    System.out.println("This statement is superb");
  }
}

class Derived extends Base
{
  void print()
  {
    `)),r(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>s.one=n)},null,512),[[i,s.one]]),e[4]||(e[4]=o(".")),r(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>s.two=n)},null,512),[[i,s.two]]),e[5]||(e[5]=o(`;
  }
}
        `))]),e[6]||(e[6]=t("br",null,null,-1)),e[7]||(e[7]=t("br",null,null,-1)),e[8]||(e[8]=t("span",{id:"comment"},'//Call the right method to print the following output: "This statement is superb"',-1)),e[9]||(e[9]=t("br",null,null,-1))]),t("button",{class:"button-9",onClick:e[2]||(e[2]=n=>d.validate_one())}," Validate ")])]),t("footer",null,[t("div",y,[s.currentStep===1?(l(),a("button",C,"Next")):m("",!0)])])])],64)}const k=u(v,[["render",w],["__scopeId","data-v-51b4f10b"]]);export{k as default};
