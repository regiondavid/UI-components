import {Now} from "./Now.js";
function Render(){
	Render.prototype.countTr = countTr;
	Render.prototype.renderDom = renderDom;
	Render.prototype.removeDom = removeDom;
}
function renderDom(){
	var _self = this;
	var tdList = _self.countTr(Now);
	tdList.forEach(function(ele){
		createTr(ele);
	})
}
function getAllMonth(month,year){
	if([0,1,3,5,7,8,10,12].indexOf(month)!=-1)
		return 31;
	else if([4,6,9,11].indexOf(month)!=-1) 
		return 30;
	else if(year%4!=0 && month==2)
		return 28;
	else return 29;
}
function countTr(date){
	var first = new Date(date.year,date.month-1);
	var firstDay = first.getDay();
	var last = new Date(date.year,date.month,0);
	var lastDay = last.getDay();
	var monthDay = getAllMonth(date.month);
	var preMonth = getAllMonth(date.month-1);
	var nextMonth = getAllMonth(date.month+1);
	var dayArray = [];
	var tdArray = [];
	//create all the date
	for(var i=0;i<monthDay;i++){
		dayArray.push(i+1);
	}
	var array1 = dayArray.splice(0,7-firstDay);
	if(firstDay){
		for(var k=0;k<firstDay;k++){
			array1.unshift(preMonth-k);
		}
	}
	tdArray.push(array1);
	for(var j=0;j<(Math.floor(dayArray.length/7)+3);j++){
		tdArray[j+1] = dayArray.splice(0,7);
	}
	//create last line
	if(lastDay!=6 && dayArray.length<7){
		for(var k=0;k<6-lastDay;k++){
			dayArray.push(k+1);
		}
	}
	tdArray.push(dayArray);
	return tdArray;
}
function createTr(array){
	var tr = document.createElement("tr");
	tr.setAttribute("class","daysItems");
	array.forEach(function(current){
		var td = document.createElement("td");
		td.innerText = current;
		tr.appendChild(td);
	})
	document.getElementById("calendarTable").getElementsByTagName("tbody")[0].appendChild(tr);
}
function removeDom(array){
	for(let a=0;a<array.length;a++){	
		document.getElementById("calendarTable").getElementsByTagName("tbody")[0].removeChild(document.getElementsByClassName("daysItems")[0]);
	}
}
var calendar = new Render();
export {calendar,getAllMonth};