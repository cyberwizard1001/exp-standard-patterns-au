"use strict";(self["webpackChunkexp_7"]=self["webpackChunkexp_7"]||[]).push([[874],{3520:function(t,e,n){n.d(e,{Z:function(){return b}});var o=n(3396),i=n.p+"img/Screen.8ea80281.png";const l=t=>((0,o.dD)("data-v-32b2df39"),t=t(),(0,o.Cn)(),t),a={class:"app"},s=l((()=>(0,o._)("div",{class:"codebox",style:{"align-items":"center","justify-content":"center",display:"flex"}},[(0,o._)("img",{src:i,style:{width:"100%",height:"100%","object-fit":"contain"}})],-1))),c=[s];function r(t,e){return(0,o.wg)(),(0,o.iD)("main",a,c)}var u=n(89);const p={},m=(0,u.Z)(p,[["render",r],["__scopeId","data-v-32b2df39"]]);var b=m},9695:function(t,e,n){n.d(e,{Z:function(){return m}});var o=n(3396);const i=t=>((0,o.dD)("data-v-1e1e3ef7"),t=t(),(0,o.Cn)(),t),l={class:"app"},a=i((()=>(0,o._)("div",{class:"codebox"},[(0,o._)("pre",null,'import java.util.*;\nimport java.text.*;\n\npublic class Clerk extends Person{\n\tprivate final int empID;\n\tprivate static int employeeCount=0;\n\t\n\tpublic Clerk()\n\t{\n\t\tsuper();\n\t\temployeeCount++;\n\t\tthis.empID=employeeCount;\n\t}\n\t\n\tpublic Clerk(String name, String email) {\n\t\tsuper(name, email);\n\t\temployeeCount++;\n\t\tthis.empID=employeeCount;\n\t}\n\t\n\tpublic Clerk(String name, long phone) {\n\t\tsuper(name, phone);\n\t\temployeeCount++;\n\t\tthis.empID=employeeCount;\n\t}\n\t\n\tpublic Clerk(String name, String email, long phone) {\n\t\tsuper(name, email, phone);\n\t\temployeeCount++;\n\t\tthis.empID=employeeCount;\n\t}\n\t\n\tpublic int getEmpID() {\n\t\treturn empID;\n\t}\n\t\n\tpublic String toString()\n\t{\n\t\treturn "[ID: "+ getEmpID()+ ", Name: "+getName()+\n\t\t\t\t", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";\n\t}\n\t\n}\n\n\n\n      \n      ')],-1))),s=[a];function c(t,e){return(0,o.wg)(),(0,o.iD)("main",l,s)}var r=n(89);const u={},p=(0,r.Z)(u,[["render",c],["__scopeId","data-v-1e1e3ef7"]]);var m=p},7766:function(t,e,n){n.d(e,{Z:function(){return m}});var o=n(3396);const i=t=>((0,o.dD)("data-v-435746b0"),t=t(),(0,o.Cn)(),t),l={class:"app"},a=i((()=>(0,o._)("div",{class:"codebox"},[(0,o._)("pre",null,'public class Customer extends Person{\n\t\n\tprivate final int customerID;\n\tprivate static int customerCount=0; \n\t\n\tpublic Customer()\n\t{\n\t\tsuper();\n\t\tcustomerCount++;\n\t\tthis.customerID=customerCount;\n\t}\n\t\n\tpublic Customer(String custName, String email) {\n\t\tsuper(custName, email);\n\t\tcustomerCount++;\n\t\tthis.customerID=customerCount;\n\t}\n\t\n\tpublic Customer(String custName, long phone) {\n\t\tsuper(custName, phone);\n\t\tcustomerCount++;\n\t\tthis.customerID=customerCount;\n\t}\n\t\n\tpublic Customer(String custName, String email, long phone) {\n\t\tsuper(custName, email, phone);\n\t\tcustomerCount++;\n\t\tthis.customerID=customerCount;\n\t}\n\t\n\tpublic int getcustomerID() {\n\t\treturn customerID;\n\t}\n\t\n\tpublic String toString()\n\t{\n\t\treturn "[ID: "+ getcustomerID()+ ", Name: "+getName()+\n\t\t\t\t", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";\n\t}\n}\n\n\n\n\n      \n      ')],-1))),s=[a];function c(t,e){return(0,o.wg)(),(0,o.iD)("main",l,s)}var r=n(89);const u={},p=(0,r.Z)(u,[["render",c],["__scopeId","data-v-435746b0"]]);var m=p},8620:function(t,e,n){n.d(e,{Z:function(){return m}});var o=n(3396);const i=t=>((0,o.dD)("data-v-5b3dacee"),t=t(),(0,o.Cn)(),t),l={class:"app"},a=i((()=>(0,o._)("div",{class:"codebox"},[(0,o._)("pre",null,"\n    public class Person {\n\tprivate String name;\n\tprivate String email;\n\tprivate long phone;\n\tprivate String city;\n\n\tpublic Person()\n\t{\n\t\t\n\t}\n\t\n\tpublic Person(String name, String email) {\n\t\tthis.name = name;\n\t\tthis.setEmail(email);\n\t}\n\t\n\tpublic Person(String name, long phone) {\n\t\tthis.name = name;\n\t\tthis.setPhone(phone);\n\t}\n\t\n\tpublic Person(String name, String email, long phone) {\n\t\tthis.name = name;\n\t\tthis.email =email;\n\t\tthis.setPhone(phone);\n\t}\n\n\tpublic String getName() {\n\t\treturn name;\n\t}\n\t\n\t\n\tpublic String getEmail() {\n\t\treturn email;\n\t}\n\n\tpublic void setEmail(String email) {\n\t\tthis.email = email;\n\t}\n\n\tpublic long getPhone() {\n\t\treturn phone;\n\t}\n\n\tpublic void setPhone(long phone) {\t\t\n\t\tif(phone >= 0000000000L && phone <= 9999999999L)\n\t\t\tthis.phone = phone;\n\t\telse\n\t\t\tthis.phone = 9999999999L;\n\t\t\n\t}\n\n\tpublic String getCity() {\n\t\treturn city;\n\t}\n\n\tpublic void setCity(String city) {\n\t\tthis.city = city;\n\t}\n\n}\n\n\n\n\n      \n      ")],-1))),s=[a];function c(t,e){return(0,o.wg)(),(0,o.iD)("main",l,s)}var r=n(89);const u={},p=(0,r.Z)(u,[["render",c],["__scopeId","data-v-5b3dacee"]]);var m=p},1355:function(t,e,n){n.d(e,{Z:function(){return m}});var o=n(3396);const i=t=>((0,o.dD)("data-v-e9e12816"),t=t(),(0,o.Cn)(),t),l={class:"app"},a=i((()=>(0,o._)("div",{class:"codebox"},[(0,o._)("pre",null,'\npublic class Vehicle {\n\tprivate final int regNum;\n\tprivate String keyStatus;\n\t\n\tpublic Vehicle(int regNum)\n\t{\n\t\tthis.regNum=regNum;\n\t\tthis.keyStatus="available";\n\t}\n\t\n\tpublic String getKeyStatus() {\n\t\treturn keyStatus;\n\t}\n\n\tpublic void setKeyStatus(String keyStatus) {\n\t\tthis.keyStatus = keyStatus;\n\t}\n\n\tpublic int getRegNum() {\n\t\treturn regNum;\n\t}\t\n}\n\n      \n      ')],-1))),s=[a];function c(t,e){return(0,o.wg)(),(0,o.iD)("main",l,s)}var r=n(89);const u={},p=(0,r.Z)(u,[["render",c],["__scopeId","data-v-e9e12816"]]);var m=p},5093:function(t,e,n){n.r(e),n.d(e,{default:function(){return zt}});n(7658);var o=n(3396),i=n(7139),l=n(9242);const a={class:"app"},s={id:"buttons",class:"relative"};function c(t,e,n,c,r,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("main",a,[(0,o._)("button",{onClick:e[0]||(e[0]=t=>r.componentSelect="InstructionsView"),style:(0,i.j5)("InstructionsView"===r.componentSelect?"background-color: #55acee":"")},"Instructions",4),(0,o._)("button",{onClick:e[1]||(e[1]=t=>r.componentSelect="ClassView"),style:(0,i.j5)("ClassView"===r.componentSelect?"background-color: #55acee":"")},"Class diagram",4),(0,o._)("button",{onClick:e[2]||(e[2]=t=>r.componentSelect="PersonView"),style:(0,i.j5)("PersonView"===r.componentSelect?"background-color: #55acee":"")},"Person Class",4),(0,o._)("button",{onClick:e[3]||(e[3]=t=>r.componentSelect="CustomerView"),style:(0,i.j5)("CustomerView"===r.componentSelect?"background-color: #55acee":"")},"Customer Class",4),(0,o._)("button",{onClick:e[4]||(e[4]=t=>r.componentSelect="ClerkView"),style:(0,i.j5)("ClerkView"===r.componentSelect?"background-color: #55acee":"")},"Clerk Class",4),(0,o._)("button",{onClick:e[5]||(e[5]=t=>r.componentSelect="ReservationView"),style:(0,i.j5)("ReservationView"===r.componentSelect?"background-color: #55acee":"")}," Reservation Class ",4),(0,o._)("button",{onClick:e[6]||(e[6]=t=>r.componentSelect="VehicleView"),style:(0,i.j5)("VehicleView"===r.componentSelect?"background-color: #55acee":"")},"Vehicle Class",4),(0,o._)("button",{onClick:e[7]||(e[7]=t=>r.componentSelect="ReservationSystemView"),style:(0,i.j5)("ReservationSystemView"===r.componentSelect?"background-color: #55acee":"")}," Test Driver Class ",4),((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(r.componentSelect),{onTestdriverComplete:u.testDriverCallBack,onInstructionsRead:u.instructionsReadCallback},null,40,["onTestdriverComplete","onInstructionsRead"]))],1024))]),(0,o.wy)((0,o._)("footer",null,[(0,o._)("div",s,[(0,o._)("button",{class:"navitem",onClick:e[8]||(e[8]=e=>t.$router.push("/method-completion"))},"Next")])],512),[[l.F8,r.testdriver_completed]])],64)}var r=n(8620),u=n(9695),p=n(7766);const m=t=>((0,o.dD)("data-v-0f3f196e"),t=t(),(0,o.Cn)(),t),b={class:"app"},d=m((()=>(0,o._)("div",{class:"codebox"},[(0,o._)("pre",null,"import java.util.Date;\n\npublic class Reservation {\n\tprivate final int reservationID;\n\tprivate Customer customerObj;\n\tprivate Vehicle vehicleObj;\n\tprivate String contractStatus;\n\tprivate Date bookingDate;\n\tprivate Date releaseDate;\n\tprivate static int reservationCount=0;\n\t\n\tpublic Reservation(Customer customerObj, Vehicle vehicleObj) {\n\t\tthis.customerObj = customerObj;\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n\tpublic String getContractStatus() {\n\t\treturn contractStatus;\n\t}\n\n\tpublic void setContractStatus(String contractStatus) {\n\t\tthis.contractStatus = contractStatus;\n\t}\n\n\tpublic Date getBookingDate() {\n\t\treturn bookingDate;\n\t}\n\n\tpublic void setBookingDate(Date bookingDate) {\n\t\tthis.bookingDate = bookingDate;\n\t}\n\n\tpublic Date getReleaseDate() {\n\t\treturn releaseDate;\n\t}\n\t\n\tpublic Customer getCustomerObj() {\n\t\treturn customerObj;\n\t}\n\n\tpublic Vehicle getVehicleObj() {\n\t\treturn vehicleObj;\n\t}\n\n\tpublic int getReservationID() {\n\t\treturn reservationID;\n\t}\n\t\n}\n\n\n      \n      ")],-1))),h=[d];function g(t,e){return(0,o.wg)(),(0,o.iD)("main",b,h)}var v=n(89);const _={},C=(0,v.Z)(_,[["render",g],["__scopeId","data-v-0f3f196e"]]);var w=C,y=n(1355);const k=t=>((0,o.dD)("data-v-6f909ce8"),t=t(),(0,o.Cn)(),t),j={class:"app"},f={class:"box"},x=k((()=>(0,o._)("h1",null,"Instructions",-1))),S=k((()=>(0,o._)("ol",null,[(0,o._)("li",{class:"arrow"},"To learn about upcasting, down casting and static binding, we'll be modifying the TestDriver class."),(0,o._)("li",{class:"arrow"},"Person, Customer, Clerk, Reservation and Vehicle classes have been implemented and are to be referred to."),(0,o._)("li",{class:"arrow"},"Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar."),(0,o._)("li",{class:"arrow"},"To proceed, finish coding the Test Driver class, after which a Next button will appear.")],-1)));function D(t,e){return(0,o.wg)(),(0,o.iD)("main",j,[(0,o._)("div",f,[x,S,(0,o._)("button",{class:"button-9",onClick:e[0]||(e[0]=e=>t.$emit("instructions-read",!0))},"Next")])])}const U={},V=(0,v.Z)(U,[["render",D],["__scopeId","data-v-6f909ce8"]]);var P=V;const I=t=>((0,o.dD)("data-v-857a56aa"),t=t(),(0,o.Cn)(),t),R={class:"app"},N=I((()=>(0,o._)("div",{id:"snackbar"},"Error Message.",-1))),E={class:"column",style:{position:"sticky",float:"right",top:"5%",left:"80%"}},T={class:"column"},L={class:"codebox"},Z={style:{"line-height":"125%"}},F=I((()=>(0,o._)("b",null,"upcasting",-1))),B=I((()=>(0,o._)("b",null,"upcasting",-1))),G=I((()=>(0,o._)("b",null,"static binding",-1))),O=I((()=>(0,o._)("b",null,"vobj",-1))),H=I((()=>(0,o._)("b",null,"robj1",-1))),z={class:"row"},A={class:"column"},q=I((()=>(0,o._)("h1",{style:{padding:"25px","padding-bottom":"0px"}}," Enter your code here . ",-1))),Q=I((()=>(0,o._)("p",{style:{padding:"25px","padding-top":"0px"}}," Follow instructions provided in the comments ",-1))),$=I((()=>(0,o._)("pre",null,"import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {",-1))),M=I((()=>(0,o._)("p",{id:"comment"},"//Create an array of type Person with 5 objects",-1))),K=I((()=>(0,o._)("br",null,null,-1))),Y=I((()=>(0,o._)("br",null,null,-1))),J=I((()=>(0,o._)("pre",null,"import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj= new Person[5];\n                ",-1))),W=I((()=>(0,o._)("br",null,null,-1))),X=I((()=>(0,o._)("p",{id:"comment"},' //Create a new Customer object using name as "ABC" and email "abc@gmail.com" ',-1))),tt=I((()=>(0,o._)("br",null,null,-1))),et=I((()=>(0,o._)("br",null,null,-1))),nt=I((()=>(0,o._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj= new Person[5];\n        cobj[0] = new Customer("ABC", "abc@gmail.com");\n        cobj[1] = new Customer("DEF", 8654678976L);\n        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n                ',-1))),ot=I((()=>(0,o._)("br",null,null,-1))),it=I((()=>(0,o._)("p",{id:"comment"},' //Create a new Clerk object using name as "EFG" and email as "efg@gmail.com" ',-1))),lt=I((()=>(0,o._)("br",null,null,-1))),at=I((()=>(0,o._)("br",null,null,-1))),st=I((()=>(0,o._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj= new Person[5];\n        cobj[0] = new Customer("ABC", "abc@gmail.com");\n        cobj[1] = new Customer("DEF", 8654678976L);\n        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n        cobj[3] = new Clerk("EFG", "efg@gmail.com")\n                ',-1))),ct=I((()=>(0,o._)("br",null,null,-1))),rt=I((()=>(0,o._)("p",{id:"comment"},' //Create a new Person object using name as "PQR" and email as "pqr@gmail.com" ',-1))),ut=I((()=>(0,o._)("br",null,null,-1))),pt=I((()=>(0,o._)("br",null,null,-1))),mt=I((()=>(0,o._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj = new Person[5];gmail.com");\n        cobj[1] = new Customer("DEF", 8654678976L);\n        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n        cobj[3] = new Clerk("EFG", "efg@gmail.com")\n        cobj[4] = new Person("PQR", "pqr@gmail.com")\n\n      ',-1))),bt=I((()=>(0,o._)("br",null,null,-1))),dt=I((()=>(0,o._)("br",null,null,-1))),ht=I((()=>(0,o._)("p",{id:"comment"},'//Set the City of first object to "Coimbatore"',-1))),gt=I((()=>(0,o._)("br",null,null,-1))),vt=I((()=>(0,o._)("br",null,null,-1))),_t=I((()=>(0,o._)("br",null,null,-1))),Ct=I((()=>(0,o._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj = new Person[5];\n        cobj[0] = new Customer("ABC", "abc@gmail.com");\n        cobj[1] = new Customer("DEF", 8654678976L);\n        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n        cobj[3] = new Clerk("EFG", "efg@gmail.com")\n        cobj[4] = new Person("PQR", "pqr@gmail.com")\n        cobj[0].setCity("Coimbatore");\n        cobj[1].setCity("Coimbatore");\n        cobj[2].setCity("Chennai");\n        cobj[3].setCity("Coimbatore");\n      ',-1))),wt=I((()=>(0,o._)("br",null,null,-1))),yt=I((()=>(0,o._)("p",{id:"comment"},'//Create a new Vehicle object with value "1234"',-1))),kt=I((()=>(0,o._)("br",null,null,-1))),jt=I((()=>(0,o._)("br",null,null,-1))),ft=I((()=>(0,o._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj = new Person[5];\n        cobj[0] = new Customer("ABC", "abc@gmail.com");\n        cobj[1] = new Customer("DEF", 8654678976L);\n        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n        cobj[3] = new Clerk("EFG", "efg@gmail.com")\n        cobj[4] = new Person("PQR", "pqr@gmail.com")\n        cobj[0].setCity("Coimbatore");\n        cobj[1].setCity("Coimbatore");\n        cobj[2].setCity("Chennai");\n        cobj[3].setCity("Coimbatore");\n\n        Vehicle vobj = new Vehicle("1234");\n      ',-1))),xt=I((()=>(0,o._)("br",null,null,-1))),St=I((()=>(0,o._)("p",{id:"comment"}," //Create a Reservation object 'robj' and initialise it by passing cobj[0] and vobj as parameters. ",-1))),Dt=I((()=>(0,o._)("p",{id:"comment"}," //Clue: cobj[0] is of type Person but Reservation only takes Customer objects. ",-1))),Ut=I((()=>(0,o._)("br",null,null,-1))),Vt=I((()=>(0,o._)("br",null,null,-1))),Pt=I((()=>(0,o._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj = new Person[5];\n        cobj[0] = new Customer("ABC", "abc@gmail.com");\n        cobj[1] = new Customer("DEF", 8654678976L);\n        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n        cobj[3] = new Clerk("EFG", "efg@gmail.com")\n        cobj[4] = new Person("PQR", "pqr@gmail.com")\n        cobj[0].setCity("Coimbatore");\n        cobj[1].setCity("Coimbatore");\n        cobj[2].setCity("Chennai");\n        cobj[3].setCity("Coimbatore");\n\n        Vehicle vobj = new Vehicle("1234");\n        Reservation robj1= new Reservation((Customer)cobj[0],vobj);\n      ',-1))),It=I((()=>(0,o._)("br",null,null,-1))),Rt=I((()=>(0,o._)("p",{id:"comment"},"//Set the booking date for robj1 to today's date",-1))),Nt=I((()=>(0,o._)("br",null,null,-1))),Et=I((()=>(0,o._)("br",null,null,-1))),Tt=I((()=>(0,o._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n        Person[] cobj = new Person[5];\n        cobj[0] = new Customer("ABC", "abc@gmail.com");\n        cobj[1] = new Customer("DEF", 8654678976L);\n        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);\n        cobj[3] = new Clerk("EFG", "efg@gmail.com")\n        cobj[4] = new Person("PQR", "pqr@gmail.com")\n        cobj[0].setCity("Coimbatore");\n        cobj[1].setCity("Coimbatore");\n        cobj[2].setCity("Chennai");\n        cobj[3].setCity("Coimbatore");\n\n        Vehicle vobj = new Vehicle("1234");\n        Reservation robj1= new Reservation((Customer)cobj[0],vobj);\n\n        robj1.setBookingDate(new Date());\n      ',-1)));function Lt(t,e,n,a,s,c){return(0,o.wg)(),(0,o.iD)("main",R,[N,(0,o._)("div",E,[(0,o._)("div",T,[(0,o._)("div",L,[(0,o._)("ul",Z,[(0,o._)("li",{class:(0,i.C_)({completed:s.completed[0]})}," Initiate an array of type Person with 5 objects. ",2),(0,o._)("li",{class:(0,i.C_)({completed:s.completed[1]})},[(0,o.Uk)(" Using the concept of "),F,(0,o.Uk)(", initiate objects 0, 1 and 2 as instances of the class Customer. ")],2),(0,o._)("li",{class:(0,i.C_)({completed:s.completed[2]})},[(0,o.Uk)(" Using the concept of "),B,(0,o.Uk)(", initiate object 3 as an instance of of the class Clerk. ")],2),(0,o._)("li",{class:(0,i.C_)({completed:s.completed[3]})},[(0,o.Uk)(" Initiate object 4 as an instance of class Person using the concept of "),G],2),(0,o._)("li",{class:(0,i.C_)({completed:s.completed[4]})}," Set the city for each of the objects based on instructions in the comments ",2),(0,o._)("li",{class:(0,i.C_)({completed:s.completed[5]})},[(0,o.Uk)(" Create an object "),O,(0,o.Uk)(" of type Vehicle with a regNum value of 1234 ")],2),(0,o._)("li",{class:(0,i.C_)({completed:s.completed[6]})},[(0,o.Uk)(" Create an object "),H,(0,o.Uk)(" of type Reservation passing cobj[0] (with proper typecasting) and vobj as parameters. ")],2),(0,o._)("li",{class:(0,i.C_)({completed:s.completed[7]})}," Set the booking date for robj1 to the current date. ",2)])])])]),(0,o._)("div",z,[(0,o._)("div",A,[q,Q,(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[0]})},[$,(0,o.Uk)("   "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":e[0]||(e[0]=e=>t.one=e)},null,512),[[l.nr,t.one]]),(0,o.Uk)(" cobj = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",id:"two",maxlength:"9",style:{width:"95px"},"onUpdate:modelValue":e[1]||(e[1]=e=>t.two=e)},null,512),[[l.nr,t.two]]),(0,o.Uk)("; "),M,K,(0,o.Uk)(" } "),Y,(0,o._)("button",{class:"button-9",id:"btn1",onClick:e[2]||(e[2]=t=>c.validate_one())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[1]})},[J,W,(0,o.Uk)("   cobj[0] = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":e[3]||(e[3]=e=>t.three=e)},null,512),[[l.nr,t.three]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":e[4]||(e[4]=e=>t.four=e)},null,512),[[l.nr,t.four]]),(0,o.Uk)('", " '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":e[5]||(e[5]=e=>t.five=e)},null,512),[[l.nr,t.five]]),(0,o.Uk)('") '),X,tt,(0,o.Uk)(" } "),et,(0,o._)("button",{class:"button-9",id:"btn2",onClick:e[6]||(e[6]=t=>c.validate_two())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[2]})},[nt,ot,(0,o.Uk)("   cobj[3] = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"5",style:{width:"60px"},"onUpdate:modelValue":e[7]||(e[7]=e=>t.six=e)},null,512),[[l.nr,t.six]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"3",style:{width:"60px"},"onUpdate:modelValue":e[8]||(e[8]=e=>t.seven=e)},null,512),[[l.nr,t.seven]]),(0,o.Uk)('", " '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":e[9]||(e[9]=e=>t.eight=e)},null,512),[[l.nr,t.eight]]),(0,o.Uk)('") '),it,lt,(0,o.Uk)(" } "),at,(0,o._)("button",{class:"button-9",id:"btn3",onClick:e[10]||(e[10]=t=>c.validate_three())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[3]})},[st,ct,(0,o.Uk)("   cobj[3] = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"6",style:{width:"70px"},"onUpdate:modelValue":e[11]||(e[11]=e=>t.nine=e)},null,512),[[l.nr,t.nine]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"3",style:{width:"55px"},"onUpdate:modelValue":e[12]||(e[12]=e=>t.ten=e)},null,512),[[l.nr,t.ten]]),(0,o.Uk)('", " '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"13",style:{width:"130px"},"onUpdate:modelValue":e[13]||(e[13]=e=>t.eleven=e)},null,512),[[l.nr,t.eleven]]),(0,o.Uk)('") '),rt,ut,(0,o.Uk)(" } "),pt,(0,o._)("button",{class:"button-9",id:"btn4",onClick:e[14]||(e[14]=t=>c.validate_four())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[4]})},[mt,bt,(0,o.Uk)("   cobj[0]. "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":e[15]||(e[15]=e=>t.twelve=e)},null,512),[[l.nr,t.twelve]]),(0,o.Uk)('(" '),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"10",style:{width:"110px"},"onUpdate:modelValue":e[16]||(e[16]=e=>t.thirteen=e)},null,512),[[l.nr,t.thirteen]]),(0,o.Uk)('"); '),dt,(0,o.Uk)("  "),ht,gt,(0,o.Uk)(" } "),vt,(0,o.Uk)(" } "),_t,(0,o._)("button",{class:"button-9",id:"btn5",onClick:e[17]||(e[17]=t=>c.validate_five())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[5]})},[Ct,(0,o.Uk)("     "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":e[18]||(e[18]=e=>t.fourteen=e)},null,512),[[l.nr,t.fourteen]]),(0,o.Uk)(" vobj = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"7",style:{width:"75px"},"onUpdate:modelValue":e[19]||(e[19]=e=>t.fifteen=e)},null,512),[[l.nr,t.fifteen]]),(0,o.Uk)("( "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":e[20]||(e[20]=e=>t.sixteen=e)},null,512),[[l.nr,t.sixteen]]),(0,o.Uk)(";) "),wt,(0,o.Uk)(" } "),yt,kt,(0,o.Uk)(" } "),jt,(0,o._)("button",{class:"button-9",id:"btn6",onClick:e[21]||(e[21]=t=>c.validate_six())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[6]})},[ft,(0,o.Uk)("     "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":e[22]||(e[22]=e=>t.seventeen=e)},null,512),[[l.nr,t.seventeen]]),(0,o.Uk)(" robj = new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":e[23]||(e[23]=e=>t.eighteen=e)},null,512),[[l.nr,t.eighteen]]),(0,o.Uk)("(( "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"8",style:{width:"85px"},"onUpdate:modelValue":e[24]||(e[24]=e=>t.nineteen=e)},null,512),[[l.nr,t.nineteen]]),(0,o.Uk)(")cobj[0], vobj); "),xt,(0,o.Uk)(" } "),St,Dt,Ut,(0,o.Uk)(" } "),Vt,(0,o._)("button",{class:"button-9",id:"btn7",onClick:e[25]||(e[25]=t=>c.validate_seven())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[7]})},[Pt,(0,o.Uk)("     robj1."),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"14",style:{width:"130px"},"onUpdate:modelValue":e[26]||(e[26]=e=>t.twenty=e)},null,512),[[l.nr,t.twenty]]),(0,o.Uk)("(new "),(0,o.wy)((0,o._)("input",{spellcheck:"false",maxlength:"6",style:{width:"60px"},"onUpdate:modelValue":e[27]||(e[27]=e=>t.twentyone=e)},null,512),[[l.nr,t.twentyone]]),(0,o.Uk)("); "),It,(0,o.Uk)(" } "),Rt,Nt,(0,o.Uk)(" } "),Et,(0,o._)("button",{class:"button-9",id:"btn8",onClick:e[28]||(e[28]=t=>c.validate_eight())},(0,i.zw)(s.button_value),1)],4),(0,o._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[8]})},[Tt,(0,o._)("button",{class:"button-9",id:"btn8",onClick:e[29]||(e[29]=e=>t.$router.push("/abstraction"))},(0,i.zw)(s.button_value),1)],4)])])])}var Zt={methods:{correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},incorrect(){var t=document.getElementById("snackbar");t.innerHTML="Incorrect. Try again",t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},validate_one(){"Person[]"==this.one&&"Person[5]"==this.two?(this.correct1(),this.button_value=this.button_text_right,this.display[0]="none",this.display[1]="block",this.completed[0]=!0,console.log("one_correct")):this.incorrect()},validate_two(){"Customer"==this.three&&"ABC"==this.four&&"abc@gmail.com"==this.five?(this.correct1(),this.button_value=this.button_text_right,this.display[1]="none",this.display[2]="block",this.completed[1]=!0):this.incorrect()},validate_three(){"Clerk"==this.six&&"EFG"==this.seven&&"efg@gmail.com"==this.eight?(this.correct1(),this.button_value=this.button_text_right,this.display[2]="none",this.display[3]="block",this.completed[2]=!0):this.incorrect()},validate_four(){"Person"==this.nine&&"PQR"==this.ten&&"pqr@gmail.com"==this.eleven?(this.correct1(),this.button_value=this.button_text_right,this.display[3]="none",this.display[4]="block",this.completed[3]=!0):this.incorrect()},validate_five(){"setCity"===this.twelve&&"Coimbatore"===this.thirteen?(this.correct1(),this.button_value=this.button_text_right,this.display[4]="none",this.display[5]="block",this.completed[4]=!0):this.incorrect()},validate_six(){"Vehicle"===this.fourteen&&"Vehicle"===this.fifteen&&"1234"===this.sixteen?(this.correct1(),this.button_value=this.button_text_right,this.display[5]="none",this.display[6]="block",this.completed[5]=!0):this.incorrect()},validate_seven(){"Reservation"===this.seventeen&&"Reservation"===this.eighteen&&"Customer"===this.nineteen?(this.correct1(),this.button_value=this.button_text_right,this.display[6]="none",this.display[7]="block",this.completed[6]=!0):this.incorrect()},validate_eight(){"setBookingDate"===this.twenty&&"Date()"===this.twentyone?(this.correct1(),this.button_value=this.button_text_right,this.display[7]="none",this.display[8]="block",this.completed[7]=!0,this.$emit("testdriverComplete",!0)):this.incorrect()}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Next",correct:!1,display:["block","none","none","none","none","none","none","none","none"],completed:[!1,!1,!1,!1,!1,!1,!1,!1]}}};const Ft=(0,v.Z)(Zt,[["render",Lt],["__scopeId","data-v-857a56aa"]]);var Bt=Ft,Gt=n(3520),Ot={components:{CustomerView:p.Z,ReservationView:w,VehicleView:y.Z,InstructionsView:P,ReservationSystemView:Bt,ClassView:Gt.Z,PersonView:r.Z,ClerkView:u.Z},data(){return{componentSelect:"InstructionsView",testdriver_completed:!1}},methods:{testDriverCallBack(t){console.log("Test driver callback triggered",t),this.testdriver_completed=!0},instructionsReadCallback(t){console.log("Instructions read",t),this.componentSelect="ReservationSystemView"}}};const Ht=(0,v.Z)(Ot,[["render",c]]);var zt=Ht}}]);
//# sourceMappingURL=874.72b806a9.js.map