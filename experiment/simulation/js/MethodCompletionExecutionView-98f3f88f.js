import{_ as o,o as a,c as s,a as e,g as r}from"./index-c0d224d2.js";const i={},l={class:"flex"},c={class:"outbox"};function d(n,t){return a(),s("main",null,[t[3]||(t[3]=e("div",{style:{"padding-left":"2%"}},[e("h1",null,"Understanding the Output"),e("p",null," The TestDriver code on the left end creates the required Customer, Exec, Vehicle and Reservation ojbects and performs a reservation. Observe the output on the right end. ")],-1)),e("div",l,[t[2]||(t[2]=e("div",{class:"codebox"},[e("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),e("pre",null,`...

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


            `)],-1)),e("div",c,[t[1]||(t[1]=r('<p data-v-25eaebe6>OUTPUT</p><p style="color:#fff;" data-v-25eaebe6> Vehicle is available, initiating contract.. </p><p style="color:#fff;" data-v-25eaebe6>Reservation released</p><p style="color:#fff;" data-v-25eaebe6>Vehicle key handedover</p><br data-v-25eaebe6><p style="color:#fff;" data-v-25eaebe6>Process finished with exit code 0</p><div style="height:100px;background-color:#202020;" data-v-25eaebe6></div>',7)),e("button",{class:"button-9",id:"btn1",onClick:t[0]||(t[0]=m=>n.$router.push("/congratulations"))}," Continue ")])])])}const y=o(i,[["render",d],["__scopeId","data-v-25eaebe6"]]);export{y as default};
