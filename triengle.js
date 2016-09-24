var triangle={
	ab:3,
	bc:4,
	add:function(){
		abc= (this.ab*this.ab)+(this.bc*this.bc);
	 return	Math.sqrt(abc);
	}
}
console.log(triangle.add());

var gipotenuza=(function(a,b){return (a*a)+(b*b)}(3,4));
console.log(gipotenuza);

var storona=function cc(aa,bb) {
	abc=(aa*aa)+(bb*bb);
	return abc;
}
console.log(storona(3,4));