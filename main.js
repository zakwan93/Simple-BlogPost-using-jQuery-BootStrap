// const myTitle = "Zakwan";
// const myContent = "He is trying to understand the jQuery Query Selector and Functions." ;

// $('#blogTitle').html(myTitle);
// $('#blogContent').html(myContent);

$('#previewButton').click(function(){
	const myTitle = $('#validationCustom01').val();
	const myContent = $('#exampleFormControlTextarea1').val();

	$('#blogTitle').html(myTitle);
	$('#blogContent').html(myContent);
});