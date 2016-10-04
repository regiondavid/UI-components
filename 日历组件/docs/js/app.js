import {Now} from "./Now";
import {calendar,getAllMonth} from "./main";
require("../css/style.css")
// require("../node_modules/amazeui/dist/css/amazeui.min.css")
document.getElementById("getDate").onclick =function(){
	if(document.getElementById("calendar")){
		removeAll();
	}
	renderTable();
	var chooseY = document.getElementById('chooseY');
	var chooseM = document.getElementById('chooseM');


	calendar.renderDom(calendar.countTr(Now));
	var index1 = preDisabled();
	var index2 = getAllMonth(Now.month,Now.year);
	var td = document.getElementsByTagName("td");
	for(let k=0;k<index1;k++){
		td[k].className="preMonth am-disabled";
	}
	for(let h=0;h<td.length-index2-index1;h++){
		td[td.length-h-1].className="nextMonth am-disabled";
	}
	td[index1+Now.day-1].className="selected am-success";
	chooseY.selectedIndex = 2016-Now.year;
	chooseM.selectedIndex = Now.month-1;
	chooseY.onchange = function(){
		var uesrYear = parseInt(chooseY.value);
		var uesrMonth = parseInt(chooseM.value);
		// console.log(Now);
		calendar.removeDom(calendar.countTr(Now));
		Now.year = uesrYear;
		Now.month = uesrMonth;
		calendar.renderDom();
		var index1 = preDisabled();
		var index2 = getAllMonth(Now.month,Now.year);
		var td = document.getElementsByTagName("td");
		for(let k=0;k<index1;k++){
			td[k].className="preMonth am-disabled";
		}
		for(let h=0;h<td.length-index2-index1;h++){
			td[td.length-h-1].className="nextMonth am-disabled";
		}
		// td[index1+Now.day-1].className="selected am-success";
		createClass();
	}
	chooseM.onchange = function(){
		var uesrYear = parseInt(chooseY.value);
		var uesrMonth = parseInt(chooseM.value);
		// console.log(Now);
		calendar.removeDom(calendar.countTr(Now));
		Now.year = uesrYear;
		Now.month = uesrMonth;
		calendar.renderDom();
		var index1 = preDisabled();
		var index2 = getAllMonth(Now.month,Now.year);
		var td = document.getElementsByTagName("td");
		for(let k=0;k<index1;k++){
			td[k].className="preMonth am-disabled";
		}
		for(let h=0;h<td.length-index2-index1;h++){
			td[td.length-h-1].className="nextMonth am-disabled";
		}
		// td[index1+Now.day-1].className="selected am-success";
		createClass();
	}
	var bt = document.getElementsByTagName("button");
	createClass();
	bt[0].onclick = function(){
		if(!document.querySelector(".selected")){
			document.getElementById("getDate").value = Now.year+"-"+Now.month+"-"+Now.day;
		}else {
			document.getElementById("getDate").value = Now.year+"-"+Now.month+"-"+document.querySelector(".selected").innerText;
			// console.log("selected");
		}	
		removeAll();
	}
	bt[1].onclick = removeAll;
} 
function renderTable(){
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
	var calendarBox = document.createElement("div");
	var selectBanner = document.createElement("div");
	var select1 = document.createElement("select");
	var select2 = document.createElement("select");
	var bt1 = document.createElement("button");
	var bt2 = document.createElement("button");
	var tr = document.createElement("tr");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");
	var th3 = document.createElement("th");
	var th4 = document.createElement("th");
	var th5 = document.createElement("th");
	var th6 = document.createElement("th");
	var th7 = document.createElement("th");
	th1.innerText = "日";
	th2.innerText = "一";
	th3.innerText = "二";
	th4.innerText = "三";
	th5.innerText = "四";
	th6.innerText = "五";
	th7.innerText = "六";
	calendarBox.setAttribute("id","calendar");
	selectBanner.setAttribute("class","selectBanner");
	select1.setAttribute("id","chooseY");
	select2.setAttribute("id","chooseM");
	table.setAttribute("class","days am-table am-table-bordered am-table-centered");
	table.setAttribute("id","calendarTable");
	tr.setAttribute("class","zhou am-primary");
	bt1.setAttribute("class","chooseBt am-btn am-btn-success am-radius");
	bt2.setAttribute("class","chooseBt am-btn am-btn-default am-radius");
	bt1.innerText = "确定";
	bt2.innerText = "取消";
	for(var a=0;a<15;a++){
		var option1 = document.createElement("option");
		option1.innerText = 2016-a;
		select1.appendChild(option1);
	}
	for(var b=0;b<12;b++){
		var option2 = document.createElement("option");
		option2.innerText = b+1;
		select2.appendChild(option2);
	}
	selectBanner.appendChild(select1);
	selectBanner.appendChild(select2);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	tr.appendChild(th5);
	tr.appendChild(th6);
	tr.appendChild(th7);
	tbody.appendChild(tr);
	table.appendChild(tbody);
	calendarBox.appendChild(selectBanner);
	calendarBox.appendChild(table);
	calendarBox.appendChild(bt1);
	calendarBox.appendChild(bt2);
	document.body.appendChild(calendarBox);
}
function removeAll(){
	document.body.removeChild(document.getElementById("calendar"));
}
function createClass(){
	var td = document.getElementsByTagName("td");
	[].forEach.call(td,function(ele){
		ele.onmouseover = function(){
			if(ele.className !="selected am-success" && ele.className!="preMonth am-disabled" && ele.className!="nextMonth am-disabled")
			this.setAttribute("class","am-success");
		}
		ele.onmouseout = function(){
			if(ele.className !="selected am-success" && ele.className!="preMonth am-disabled" && ele.className!="nextMonth am-disabled")
			this.removeAttribute("class");
		}
		ele.onclick = function(){
			if(ele.className!="preMonth am-disabled" && ele.className!="nextMonth am-disabled"){
				if(document.querySelector(".selected")){
					document.querySelector(".selected").removeAttribute("class");
				}
				this.setAttribute("class","selected am-success");
			} else {
				var selected1 = document.getElementById("chooseM");
				var selected2 = document.getElementById("chooseY");
				if(ele.className=="preMonth am-disabled"){
					if(!selected1.selectedIndex){
						selected1.selectedIndex=11;
						selected2.selectedIndex++;
					} else selected1.selectedIndex--;
				}else if(ele.className=="nextMonth am-disabled"){
					if(selected1.selectedIndex==11){
						selected1.selectedIndex=0;
						selected2.selectedIndex--;
					} else selected1.selectedIndex++;
				}
				var uesrYear = parseInt(chooseY.value);
				var uesrMonth = parseInt(chooseM.value);
				// console.log(Now);
				calendar.removeDom(calendar.countTr(Now));
				Now.year = uesrYear;
				Now.month = uesrMonth;
				calendar.renderDom();
				var index1 = preDisabled();
				var index2 = getAllMonth(Now.month,Now.year);
				var td = document.getElementsByTagName("td");
				for(let k=0;k<index1;k++){
					td[k].className="preMonth am-disabled";
				}
				for(let h=0;h<td.length-index2-index1;h++){
					td[td.length-h-1].className="nextMonth am-disabled";
				}
				createClass();
			}
		}
	})
}
function preDisabled(){
	var arr = calendar.countTr(Now);
	var firstIndex = arr[0].indexOf(1);
	return firstIndex;
}