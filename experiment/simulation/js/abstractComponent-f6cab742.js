import{_ as u,o as r,c as i,a as e,g as m,w as s,v as o,d as l,i as p,F as v}from"./index-c0d224d2.js";const b={data(){return{}},methods:{incorrect(a){var t=document.getElementById("snackbar");t.innerHTML=a,t.style.backgroundColor="red",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},correct1(){var a=document.getElementById("snackbar");a.innerHTML="Correct",a.style.backgroundColor="green",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="abstract"&&this.two.trim()=="abstract"&&this.three.trim()=="sunroof"&&this.four.trim()=="Yamaha"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},c={class:"flex-row"},y={style:{width:"50%"}},f={class:"outbox"},g={id:"buttons",class:"relative"},k={key:0,class:"navitem"};function w(a,t,x,N,T,d){return r(),i(v,null,[t[16]||(t[16]=e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Abstract")],-1)),t[17]||(t[17]=e("div",{id:"snackbar"},"Some text some message..",-1)),e("main",null,[e("div",c,[t[15]||(t[15]=m(`<div style="width:50%;" data-v-5313236a><h2 data-v-5313236a>Theory</h2><div class="outbox" data-v-5313236a><pre data-v-5313236a>    <span id="comment" data-v-5313236a>//an abstract class </span>
  public abstract class Animal {

  public abstract void makeSound();
  
  }
  <span id="comment" data-v-5313236a>//concrete class that extends <br data-v-5313236a> Animal and implements its abstract method </span>
  public class Dog extends Animal {

  public void makeSound() {

      System.out.println(&quot;Wolf&quot;);
    
    }
  }

                </pre></div><div class="content" data-v-5313236a><p data-v-5313236a> An abstract class is a class that cannot be instantiated i.e., cannot create an object of the abstract class directly. It provides a blueprint or template for other classes to extend and implement its abstract methods. </p></div></div>`,1)),e("div",y,[t[14]||(t[14]=e("h2",null,"Try it yourself",-1)),e("div",f,[t[7]||(t[7]=e("br",null,null,-1)),t[8]||(t[8]=e("br",null,null,-1)),t[9]||(t[9]=e("span",{id:"comment"},"//Initialize an 'abstract' class Bike with an 'abstract' method 'sunroof'",-1)),e("p",null,[s(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>a.one=n)},null,512),[[o,a.one]]),t[4]||(t[4]=l("class Bike"))]),t[10]||(t[10]=e("p",null,"{",-1)),e("p",null,[s(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=n=>a.two=n)},null,512),[[o,a.two]]),t[5]||(t[5]=l(" void ")),s(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=n=>a.three=n)},null,512),[[o,a.three]]),t[6]||(t[6]=l("; "))]),t[11]||(t[11]=e("p",null,"void horn();",-1)),t[12]||(t[12]=e("p",null,"}",-1)),t[13]||(t[13]=e("br",null,null,-1))]),e("button",{class:"button-9",onClick:t[3]||(t[3]=n=>d.validate_one())}," Validate ")])]),e("footer",null,[e("div",g,[a.currentStep===1?(r(),i("button",k,"Next")):p("",!0)])])])],64)}const V=u(b,[["render",w],["__scopeId","data-v-5313236a"]]);export{V as default};
