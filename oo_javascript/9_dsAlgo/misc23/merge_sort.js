function merge (arr, l, m, r) {
	var n1 = m - l + 1;                     // n1 = 5; m2 = 6
	var n2 = r - m;
	var L = new Array(n1);
	var R = new Array(n2);
	for (var i = 0; i < n1; i++)    L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)    R[j] = arr[m + 1 + j];
	var i = 0; var j = 0; var k = l;
	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) { arr[k] = L[i]; i++; }
		else { arr[k] = R[j]; j++; }
		k++;
	}
	while (i < n1) {
		arr[k] = L[i]; i++; k++;
	}
	while (j < n2) {
		arr[k] = R[j]; j++; k++;
	}
}

function mergeSort (arr,l, r){
	if(l>=r) return;
	var m = l + parseInt((r-l)/2);
	mergeSort(arr,l,m);                     // mergeSort(arr, 1, 5);    ---> mS(arr, 1, 2); mS(arr, 3, 5); merge(arr,1,2,5);
	mergeSort(arr,m+1,r);                   // mergeSort(arr, 5, 11);
	merge(arr,l,m,r);                       // merge(arr, 1, 5, 11);
}

var arr = [ 12, 11, 13, 5, 6, 7, 22, 19, 8, 4, 2, 44 ];
mergeSort(arr, 0, 11);
console.log(arr);