function shortcut(s1, s2) {
  // your code here
	let str="";
	if(s1!="" && s2!=""){
		str=str+s1[0]+s2[0];
		return str;
	}
	else{ return str}
	
}

// Do not change the code below.
const s1 = promp("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
