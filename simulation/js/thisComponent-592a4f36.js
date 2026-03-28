import{_ as m,o as a,c as l,a as t,d as o,w as i,v as r,i as u,F as p}from"./index-c0d224d2.js";const v={data(){return{}},methods:{incorrect(n){var e=document.getElementById("snackbar");e.innerHTML=n,e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="this.name"&&this.two.trim()=="name"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},b={class:"flex-row"},c={style:{width:"50%"}},y={class:"outbox"},f={id:"buttons",class:"relative"},w={key:0,class:"navitem"};function g(n,e,h,k,N,d){return a(),l(p,null,[e[13]||(e[13]=t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Accessing variables of a class from within class (using this)")],-1)),e[14]||(e[14]=t("div",{id:"snackbar"},"Some text some message..",-1)),t("main",null,[t("div",b,[e[12]||(e[12]=t("div",{style:{width:"50%"}},[t("h2",null,"Theory"),t("div",{class:"outbox"},[t("pre",null,[o(`    public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public void printName() {
        System.out.println("My name is " + this.name);
      }
    }
`),t("span",{id:"comment"},`//Class Person with a data member name and a method printName that uses 
the this keyword to access the name variable:`),o(`
                `)])]),t("div",{class:"content"},[t("p",null,' "this" keyword is used to refer to the current object of a class. It can be used to access the variables and methods of the object from within the class. ')])],-1)),t("div",c,[e[11]||(e[11]=t("h2",null,"Try it yourself",-1)),t("div",y,[e[3]||(e[3]=t("p",null,"public class ClassA {",-1)),e[4]||(e[4]=t("p",null,"private String name;",-1)),e[5]||(e[5]=t("p",null,"public void User(String name) {",-1)),i(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>n.one=s)},null,512),[[r,n.one]]),e[6]||(e[6]=o("=")),i(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>n.two=s)},null,512),[[r,n.two]]),e[7]||(e[7]=o("; ")),e[8]||(e[8]=t("p",null,"}",-1)),e[9]||(e[9]=t("p",null,"}",-1)),e[10]||(e[10]=t("span",{id:"comment"},'//Use the this keyword to refer to instance variable "name" in User() method ',-1))]),t("button",{class:"button-9",onClick:e[2]||(e[2]=s=>d.validate_one())}," Validate ")])]),t("footer",null,[t("div",f,[n.currentStep===1?(a(),l("button",w,"Next")):u("",!0)])])])],64)}const C=m(v,[["render",g],["__scopeId","data-v-742a0ae5"]]);export{C as default};
