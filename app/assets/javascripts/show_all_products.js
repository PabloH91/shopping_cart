function show_all(category_ids) {
	for(var i=0; i<category_ids.length;i++) {
		var e =document.getElementById(category_ids[i]);
		e.style.display = 'block';
	}
}