import{_ as u,o as i,c as r,a as e,g as p,d as l,w as o,v as a,i as m,F as f}from"./index-c0d224d2.js";const v={data(){return{}},methods:{incorrect(n){var t=document.getElementById("snackbar");t.innerHTML=n,t.style.backgroundColor="red",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="interface"&&this.two.trim()=="implements"&&this.three.trim()=="showRoom"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},y={class:"flex-row"},b={style:{width:"50%"}},g={class:"outbox"},w={id:"buttons",class:"relative"},k={key:0,class:"navitem"};function N(n,t,x,C,V,d){return i(),r(f,null,[t[21]||(t[21]=e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Interface")],-1)),t[22]||(t[22]=e("div",{id:"snackbar"},"Some text some message..",-1)),e("main",null,[e("div",y,[t[20]||(t[20]=p(`<div style="width:50%;" data-v-9c7feda5><h2 data-v-9c7feda5>Theory</h2><div class="outbox" data-v-9c7feda5><pre data-v-9c7feda5><span id="comment" data-v-9c7feda5>//an interface structure</span>
public interface MyInterface {
  public void doSomething();
  public int getValue();
  }

public class MyClass implements MyInterface {
  public void doSomething() {
   
  }
  public int getValue() {
      
  }
}
<span id="comment" data-v-9c7feda5>//Any class that implements this interface must provide implementations
   for both methods.</span>

                </pre></div><div class="content" data-v-9c7feda5><p data-v-9c7feda5> An interface is a blueprint of a class that specifies a set of methods and properties that a class must implement. </p></div></div>`,1)),e("div",b,[t[19]||(t[19]=e("h2",null,"Try it yourself",-1)),e("div",g,[t[8]||(t[8]=e("br",null,null,-1)),t[9]||(t[9]=e("br",null,null,-1)),t[10]||(t[10]=e("span",{id:"comment"},"//Initialize an 'interface' Bike ",-1)),e("p",null,[t[4]||(t[4]=l("public ")),o(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>n.one=s)},null,512),[[a,n.one]]),t[5]||(t[5]=l(" Bike"))]),t[11]||(t[11]=e("p",null,"{",-1)),t[12]||(t[12]=e("p",null,"void display_name();",-1)),t[13]||(t[13]=e("p",null,"}",-1)),t[14]||(t[14]=e("span",{id:"comment"},"//Create a class 'showRoom' that implements the interface.",-1)),e("p",null,[t[6]||(t[6]=l(" class showRoom ")),o(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>n.two=s)},null,512),[[a,n.two]]),o(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>n.three=s)},null,512),[[a,n.three]]),t[7]||(t[7]=l(" { "))]),t[15]||(t[15]=e("p",null,"public void display_name() {",-1)),t[16]||(t[16]=e("p",null,"System.out.println(name); }",-1)),t[17]||(t[17]=e("p",null,"}",-1)),t[18]||(t[18]=e("br",null,null,-1))]),e("button",{class:"button-9",onClick:t[3]||(t[3]=s=>d.validate_one())}," Validate ")])]),e("footer",null,[e("div",w,[n.currentStep===1?(i(),r("button",k,"Next")):m("",!0)])])])],64)}const T=u(v,[["render",N],["__scopeId","data-v-9c7feda5"]]);export{T as default};
