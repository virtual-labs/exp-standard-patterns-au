import{_ as e,o as i,c as s,a as n}from"./index-c0d224d2.js";const r={},a={class:"app"};function c(o,t){return i(),s("main",a,t[0]||(t[0]=[n("div",{class:"codebox"},[n("pre",null,`
    public class Person {
	private String name;
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




      
      `)],-1)]))}const x=e(r,[["render",c],["__scopeId","data-v-5d06210c"]]);const u={},l={class:"app"};function p(o,t){return i(),s("main",l,t[0]||(t[0]=[n("div",{class:"codebox"},[n("pre",null,`import java.util.*;
import java.text.*;

public class Exec extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}
	
	public String toString()
	{
		return "[ID: "+ getEmpID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
	
}



      
      `)],-1)]))}const I=e(u,[["render",p],["__scopeId","data-v-0f4271f2"]]);const m={},_={class:"app"};function g(o,t){return i(),s("main",_,t[0]||(t[0]=[n("div",{class:"codebox"},[n("pre",null,`public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer()
	{
		super();
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		super(custName, email);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, long phone) {
		super(custName, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email, long phone) {
		super(custName, email, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public int getcustomerID() {
		return customerID;
	}
	
	public String toString()
	{
		return "[ID: "+ getcustomerID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
}




      
      `)],-1)]))}const D=e(m,[["render",g],["__scopeId","data-v-5888418d"]]);const d={},h={class:"app"};function y(o,t){return i(),s("main",h,t[0]||(t[0]=[n("div",{class:"codebox"},[n("pre",null,`
public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
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

      
      `)],-1)]))}const N=e(d,[["render",y],["__scopeId","data-v-2a52941e"]]),C=""+new URL("../images/Screen-2d20a59f.png",import.meta.url).href;const b={},S={class:"app"};function v(o,t){return i(),s("main",S,t[0]||(t[0]=[n("div",{class:"codebox",style:{"align-items":"center","justify-content":"center",display:"flex"}},[n("img",{src:C,style:{width:"100%",height:"100%","object-fit":"contain"}})],-1)]))}const P=e(b,[["render",v],["__scopeId","data-v-0988a7e2"]]);export{D as C,x as P,N as V,P as a,I as b};
