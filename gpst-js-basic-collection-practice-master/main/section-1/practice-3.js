'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
	var result=[];
	var i, j;
	for(i=0; i<collectionA.length; i++)
	{
		for(j=0; j<objectB.value.length; j++)
		{
			if(collectionA[i]===objectB.value[j])
				result.push(collectionA[i])
		}
	}
	return result;
}
