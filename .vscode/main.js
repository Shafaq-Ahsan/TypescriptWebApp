var arr1 = JSON.parse(localStorage.getItem("Accounts")) || [];
/**
 * Account
 */
var Account = (function () {
    function Account(uname, pass) {
        this.user = uname;
        this.password = pass;
    }
    return Account;
}());
document.getElementById("registration").addEventListener("click", function () {
    var div1 = document.getElementById("form");
    var div2 = document.getElementById("form2");
    div2.style.display = "block";
    div1.style.display = "none";
});
document.getElementById("registered").addEventListener("click", function () {
    var pass = document.getElementById("regPass").value;
    var cpass = document.getElementById("regCpass").value;
    var uname = document.getElementById("regUname").value;
    if (!uname || (uname === "" && pass === "")) {
        alert("please fill data correctly");
        return false;
    }
    else if (pass === cpass) {
        var abc = new Account(uname, pass);
        arr1.push(abc);
        localStorage.setItem("Accounts", JSON.stringify(arr1));
        var div1 = document.getElementById("form");
        var div2 = document.getElementById("form2");
        div2.style.display = "none";
        div1.style.display = "block";
        alert("Your account has been registered successfully");
    }
    else {
        alert("enter correct password");
    }
});
document.getElementById("login").addEventListener("click", function () {
    var chk = false;
    var name = document.getElementById("uname").value;
    var pass = document.getElementById("password").value;
    arr1.forEach(function (element) {
        if (element.user === name && element.password === pass) {
            chk = true;
        }
    });
    if (chk === true) {
        var div1 = document.getElementById("inner-screen");
        var div2 = document.getElementById("inner-screen2");
        div1.style.display = "none";
        div2.style.display = "block";
    }
    else {
        alert("please register Yourself");
    }
});
/**
 * advertisment
 */
var advertisment = (function () {
    function advertisment(title, category, price) {
        this.title = title;
        this.category = category;
        this.price = price;
    }
    Object.defineProperty(advertisment.prototype, "gettitle", {
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(advertisment.prototype, "getcat", {
        get: function () {
            return this.category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(advertisment.prototype, "getprice", {
        get: function () {
            return this.price;
        },
        enumerable: true,
        configurable: true
    });
    return advertisment;
}());
/**
 * listitem
 */
var listitem = (function () {
    function listitem(obj) {
        this.object = obj;
    }
    listitem.prototype.additem = function () {
        var listitem = document.createElement("li");
        var scr;
        if (this.object.getcat === "Mobile") {
            listitem.innerHTML = "<div class='left'><img src='img/1.png' ></div><div class='right'><b>Title   :</b>" + this.object.gettitle + "<br><b>Category :</b>" + this.object.getcat + "<br><b>Price :</b>" + this.object.getprice + "<\div>";
        }
        else if (this.object.getcat == "Cars") {
            listitem.innerHTML = "<div class='left'><img src='img/2.png' ></div><div class='right'><b>Title   :</b>" + this.object.gettitle + "<br><b>Category :</b>" + this.object.getcat + "<br><b>Price :</b>" + this.object.getprice + "<\div>";
        }
        else {
            alert("fill data properly");
            return false;
        }
        listitem.id = "item";
        var list = document.getElementById("todoList");
        list.appendChild(listitem);
    };
    return listitem;
}());
document.getElementById("btnClear").addEventListener("click", function () {
    clearfeild();
});
document.getElementById("btnAdd").addEventListener("click", function () {
    var div1 = document.getElementById("form3");
    var div2 = document.getElementById("list");
    div1.style.display = "block";
    div2.style.display = "none";
});
document.getElementById("btnShow").addEventListener("click", function () {
    var div1 = document.getElementById("form3");
    var div2 = document.getElementById("list");
    div2.style.display = "block";
    div1.style.display = "none";
});
function clearfeild() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
}
document.getElementById("btnsubmit").addEventListener("click", function () {
    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    var price = document.getElementById("price").value;
    var object = new advertisment(title, category, price);
    var abc = new listitem(object);
    var chk = abc.additem();
    if (chk !== false) {
        alert("Advertisment has been published!!");
    }
    arr.push(object);
    localStorage.setItem("list", JSON.stringify(arr));
    clearfeild();
    //    window.location.href = "index.html";
});
var arr = JSON.parse(localStorage.getItem("list")) || [];
arr.forEach(function (element) {
    var object = new advertisment(element.title, element.category, element.price);
    var abc = new listitem(object);
    abc.additem();
});
