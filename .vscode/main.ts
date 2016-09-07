var arr1:Account[]=JSON.parse(localStorage.getItem("Accounts"))||[];
/**
 * Account
 */
class Account {
    user:string;
    password:string;
    constructor(uname:string,pass:string) {
        this.user=uname;
        this.password=pass;
    }
}
document.getElementById("registration").addEventListener("click",function(){
var div1 = document.getElementById("form");
     var div2 = document.getElementById("form2");
     div2.style.display = "block";
     div1.style.display = "none";
     
});
document.getElementById("registered").addEventListener("click",function(){
    var pass:string=(<HTMLInputElement>document.getElementById("regPass")).value;
    var cpass:string=(<HTMLInputElement>document.getElementById("regCpass")).value;
    var uname:string=(<HTMLInputElement>document.getElementById("regUname")).value;
    if(!uname||(uname===""&&pass===""))
    {
alert("please fill data correctly")
return false;
    }
else if( pass===cpass){
    var abc= new Account(uname,pass);
    arr1.push(abc);
    localStorage.setItem("Accounts",JSON.stringify(arr1));
    var div1 = document.getElementById("form");
     var div2 = document.getElementById("form2");
     div2.style.display = "none";
     div1.style.display = "block";
     alert("Your account has been registered successfully");
}
else{
    alert("enter correct password");
}
});
document.getElementById("login").addEventListener("click",function(){
    var chk:boolean=false;
    var name:string=(<HTMLInputElement>document.getElementById("uname")).value;
    var pass:string=(<HTMLInputElement>document.getElementById("password")).value;
arr1.forEach(element => {
        if(element.user===name && element.password===pass){
            chk=true;
        }
    });
    if(chk===true)
    {
    var div1 = document.getElementById("inner-screen");
     var div2 = document.getElementById("inner-screen2");
     div1.style.display = "none";
     div2.style.display = "block";
    }
    else{
        alert("please register Yourself");
    }
});
/**
 * advertisment
 */
class advertisment {
    title:string;
      category:string;
     price:string;
    constructor(title:string,category:string,price:string) {
        this.title=title;
        this.category=category;
        this.price=price;
    }


public get gettitle() : string {
    return this.title;
} 
public get getcat() : string {
    return this.category;
}

public get getprice() : string {
    return this.price;
}
}
/**
 * listitem
 */
class listitem {
     private object : advertisment;
        constructor(obj:advertisment) {
            this.object=obj;
                    }
     public additem() {
    var listitem=document.createElement("li");
    var scr:String;
    if (this.object.getcat==="Mobile") {

         listitem.innerHTML="<div class='left'><img src='img/1.png' ></div><div class='right'><b>Title   :</b>"+this.object.gettitle+"<br><b>Category :</b>"+this.object.getcat+"<br><b>Price :</b>"+this.object.getprice+"<\div>";

    }
    else if (this.object.getcat=="Cars") {
         listitem.innerHTML="<div class='left'><img src='img/2.png' ></div><div class='right'><b>Title   :</b>"+this.object.gettitle+"<br><b>Category :</b>"+this.object.getcat+"<br><b>Price :</b>"+this.object.getprice+"<\div>";


    }
    else{
        alert("fill data properly");
        return false;     
    }
    listitem.id="item";
    var list= document.getElementById("todoList");
    list.appendChild(listitem);  
  

      
}

}

document.getElementById("btnClear").addEventListener("click",function () {
    clearfeild();
});
document.getElementById("btnAdd").addEventListener("click",function () {
     var div1 = document.getElementById("form3");
     var div2 = document.getElementById("list");
     div1.style.display = "block";
     div2.style.display = "none";

});
document.getElementById("btnShow").addEventListener("click",function () {
     var div1 = document.getElementById("form3");
     var div2 = document.getElementById("list");
     div2.style.display = "block";
     div1.style.display = "none";

});

function clearfeild() {
  (<HTMLInputElement>document.getElementById("title")).value="";
  (<HTMLSelectElement>document.getElementById("category")).value="";
    (<HTMLInputElement>document.getElementById("price")).value="";
    
}
document.getElementById("btnsubmit").addEventListener("click",function () {
    var title:string=(<HTMLInputElement>document.getElementById("title")).value;
    var category:string=(<HTMLSelectElement>document.getElementById("category")).value;
    var price:string=(<HTMLInputElement>document.getElementById("price")).value;
  var object=new advertisment(title,category,price);
   var abc=new listitem(object);
    var chk:boolean=abc.additem();
   if(chk!==false)
   {
         alert("Advertisment has been published!!");
   }
    arr.push(object);
     localStorage.setItem("list",JSON.stringify(arr)); 
   clearfeild();
  
//    window.location.href = "index.html";
});

var arr:advertisment[]=JSON.parse(localStorage.getItem("list")) || [];
arr.forEach(element => {
 var object=new advertisment(element.title,element.category,element.price);
 var abc=new listitem(object);
   abc.additem();
});
