function Now(){
	Now.prototype.date = new Date();
	Now.prototype.year =  this.date.getFullYear();
	Now.prototype.month = this.date.getMonth()+1;
	Now.prototype.day = this.date.getDate();
	Now.prototype.week = this.date.getDay();
}
var Now = new Now();
export {Now};
