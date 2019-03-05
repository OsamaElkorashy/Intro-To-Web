var users = [];
var listedusers = $(".list");
let currentuser;
function appendToList()
{
    saveUser();
    var content = document.getElementById("content");
    content.innerHTML = "";
    for (let i = 0; i < users.length; i++)
    {
        var astart = "<a class='list' href='#contactDetais'>";
        var aend = "</a>";
        var image = users[i].gender === "male" ? "man.png" : "female.png";
        var content = document.getElementById("content");
        $('<ul>').attr({'id': 'test-listview', 'data-role': 'listview', 'data-filter': 'true', 'data-filter-placeholder': 'Search...'}).appendTo(content);
        $('<li class="item">').append(astart + `<img src=${image}>` + users[i].userName + aend + "<a href='" + "tel:" + users[i].userPhone + "'class='ui-btn ui-icon-phone ui-btn-icon-notext ui-corner-all'id='myphone' >").appendTo('#test-listview');
        $('#test-listview').listview().listview('refresh');
        listedusers = $(".list");
        users[i].id=i;
        
        console.log(currentuser);
    }
    for (let j = 0; j < listedusers.length; j++) {
        listedusers[j].addEventListener("click", function () {
            var image = users[j].gender === "male" ? "man.png" : "female.png";
            $("#detailsImage").attr("src", image);
            $("#userTel").attr("href", "tel:"+users[j].userPhone);
            document.getElementById("detailsName").innerHTML=users[j].userName;
            currentuser=i;
        });
    }
}

function saveUser()
{
    var userName_ = document.getElementById("userName").value;
    var userPhone_ = document.getElementById("userPhone").value;
    var userMail_ = document.getElementById("userMail").value;
    var gender_ = document.getElementById("flipgender").value;
    users.push({userName: userName_, userPhone: userPhone_, userMail: userMail_, gender: gender_ ,id :0});
    clearData();
}
function clearData()
{
    $("#userName").val("");
    $("#userPhone").val("");
    $("#userMail").val("");


}

$(document).ready(function () {
    $("#btnSave").click(function () {
        appendToList();
    });
});
$(document).ready(function () {
    $("#btnCancel").click(function () {
    });
});
$(document).ready(function () {
    $("#btndelete").click(function () {
        console.log("delete "+currentuser);
       users.splice(this.id,1);
        var content = document.getElementById("content");
    content.innerHTML = "";
    for (let i = 0; i < users.length; i++)
    {   
        var astart = "<a class='list' href='#contactDetais'>";
        var aend = "</a>";
        var image = users[i].gender === "male" ? "man.png" : "female.png";
        var content = document.getElementById("content");
        $('<ul>').attr({'id': 'test-listview', 'data-role': 'listview', 'data-filter': 'true', 'data-filter-placeholder': 'Search...'}).appendTo(content);
        $('<li class="item">').append(astart + `<img src=${image}>` + users[i].userName + aend + "<a href='" + "tel:" + users[i].userPhone + "'class='ui-btn ui-icon-phone ui-btn-icon-notext ui-corner-all'id='myphone' >").appendTo('#test-listview');
        $('#test-listview').listview().listview('refresh');
        listedusers = $(".list");
        
    }
    for (let j = 0; j < listedusers.length; j++) {
        listedusers[j].addEventListener("click", function () {
            var image = users[j].gender === "male" ? "man.png" : "female.png";
            $("#detailsImage").attr("src", image);
            $("#userTel").attr("href", "tel:"+users[j].userPhone);
            document.getElementById("detailsName").innerHTML=users[j].userName;
        });
    }
       //$('#test-listview').listview().listview('refresh');
    });
});
