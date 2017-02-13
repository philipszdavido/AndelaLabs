function findMinMax(numbers){
    if(Array.isArray(numbers)) {
	var maximumNumber = Math.max.apply(null,numbers);
	    var minimumNumber=Math.min.apply(null,numbers);
	    if(maximumNumber==minimumNumber){		
return [maximumNumber];}
	    return [minimumNumber,maximumNumber];	
    }
  else{
    return "please, input an array";
}}
