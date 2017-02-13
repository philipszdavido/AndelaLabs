function findMinMax(numbers){
    if(Array.isArray(numbers)) {
	var maximumNumber = Math.max.apply(null,numbers);//getmax(num);
	var minimumNumber=Math.min.apply(null,numbers);//getmin(num);
	if(maximumNumber==minimumNumber)
		return [maximumNumber];
	[minimumNumber,maximumNumber];
	
  }
  else{
    return "please, input an array";
}}
