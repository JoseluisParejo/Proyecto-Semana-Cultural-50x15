$(document).ready(function() {

	getBestScores();
  

	$("#btnPlay").click(function(){
		name = $("#user").val();
		localStorage.setItem('name',name);
		window.location.replace("game.html");

	});

	function getBestScores(){
		scores = localStorage.getItem('scores');
		if (scores == null){
			return;
		}
		scores = JSON.parse(scores);
		$("#divScores").append('<ol id="best_score_list"></ol>');

		scores.sort(function(a,b){
			score_a = a['score'];
			score_b = b['score'];
			return score_b - score_a;
		});

		len = (scores.length > 9) ? 10 : scores.length;
		best_scores = scores.slice(0,len);
		best_scores.forEach(function(score){
			$('#best_score_list').append('<li>'+score['name']+':'+score['score']+'</li>');
		});

	}

});
