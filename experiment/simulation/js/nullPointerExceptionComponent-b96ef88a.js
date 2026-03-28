import{_ as a,o as s,c as i,a as e,d as o,w as u,v as d,i as m,F as p}from"./index-c0d224d2.js";const c={data(){return{}},methods:{incorrect(n){var t=document.getElementById("snackbar");t.innerHTML=n,t.style.backgroundColor="red",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},correct1(){var n=document.getElementById("snackbar");n.innerHTML="Correct",n.style.backgroundColor="green",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="8"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},v={class:"flex-row"},g={style:{width:"50%"}},b={class:"outbox"},y={id:"buttons",class:"relative"},x={key:0,class:"navitem"};function w(n,t,f,k,h,r){return s(),i(p,null,[t[11]||(t[11]=e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Null Pointer Exception")],-1)),t[12]||(t[12]=e("div",{id:"snackbar"},"Some text some message..",-1)),e("main",null,[e("div",v,[t[10]||(t[10]=e("div",{style:{width:"50%"}},[e("h2",null,"Theory"),e("div",{class:"outbox"},[e("pre",null,`1.  String str = null;
2.  int length = str.length();`),e("span",{id:"comment"},"//2nd line will throw a NullPointerException because we declare a string variable str and initialize it to null. Then, we try to call the length() method on str")]),e("div",{class:"content"},[e("p",null," Null Pointer Exception is a kind of run time exception that is thrown when the java program attempts to use the object reference that that contains the null value. ")])],-1)),e("div",g,[t[9]||(t[9]=e("h2",null,"Try it yourself",-1)),e("div",b,[t[6]||(t[6]=e("br",null,null,-1)),t[7]||(t[7]=e("br",null,null,-1)),t[8]||(t[8]=e("span",{id:"comment"},"//Initialize a class 'Bike'",-1)),e("pre",null,[t[2]||(t[2]=o(`1.class Bike
2.{
3.
4.int arr[] = null;
5.    public static void main (String[] args)                    
6.    {
7.    Bike mybike = new Bike();                  
8.    System.out.println(myBike.arr.length());    
9.    }
10.}
`)),u(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>n.one=l)},null,512),[[d,n.one]]),t[3]||(t[3]=o(`
`)),t[4]||(t[4]=e("span",{id:"comment"},"//In which line excption occurs (eg:1 or 2)",-1)),t[5]||(t[5]=o(`
              `))])]),e("button",{class:"button-9",onClick:t[1]||(t[1]=l=>r.validate_one())}," Validate ")])]),e("footer",null,[e("div",y,[n.currentStep===1?(s(),i("button",x,"Next")):m("",!0)])])])],64)}const B=a(c,[["render",w],["__scopeId","data-v-a8f0a36b"]]);export{B as default};
