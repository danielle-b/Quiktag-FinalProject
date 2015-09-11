var common = ['the', 'their', 'is', 'we', 'all', 'a', 'an', 'by', 'to', 'too', 'you', 'me', 'he', 'she', 'they', 'and', 'how', 'it', 'in', 'I', 'are', 'to', 'for', 'of'];

function commonWords(str) {

	var wordCounts = { };
	var words = str.split(/\b/);

	for(var i = 0; i < words.length; i++) {
		if (common.indexOf(words[i])!= 1) {
			wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;	
		}
	}
}

$(document).ready(function() {
	$("#button").click(function() {
		//Grab string from blog post
		var post = $("#post").val()
		$.getJSON("http://access.alchemyapi.com/calls/text/TextGetRankedConcepts", {
			apikey: "028bc22ff5dddbe826f8c1ee9e58f8bca368a3e5",
			text: post,
			outputMode:"json"

		}, function(results) {
			console.log(results);
			var tags = "";
			for (var i = 0; i < results.concepts.length; i++){
				tags += results.concepts[i].text + "\n";
            }

			$("#generate-tag").val(tags); 
		});
	});
});

//Prints words to smaller textarea
