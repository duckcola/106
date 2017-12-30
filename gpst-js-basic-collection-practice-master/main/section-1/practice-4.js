'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
	var result=[];
	for(var i=0; i<collectionA.length; i++)
	{
		for(var j=0; i<objectB.value.length; j++)
		{
			if(collectionA[i].key===objectB.value[j])
				result.push(collectionA[i].key);
		}
	}
	return result;

}
