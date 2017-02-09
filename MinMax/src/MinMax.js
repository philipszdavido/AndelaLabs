function findMinMax(num){
	var max = getmax(num);
	var min=getmin(num);
	if(max==min)
		return [max];
	var f=[min,max];
	return f;
}
function getmax(num) {
        var ma = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > ma) {
            ma = num[i];
        }
    }
    return ma;
}
function getmin(num) {
	        var m = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] < m) {
            m = num[i];
        }
    }
return m;
}