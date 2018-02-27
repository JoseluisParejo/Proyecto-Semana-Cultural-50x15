Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
/*
$(window).bind('beforeunload', function(){
  console.log('refresh page');
  window.location.replace("index.html");
});*/


$(document).ready(function() {

    countdown_id = 0;
    val_score = 0;
    used_c1 = 0;
    used_c2 = 0;
    used_c3 = 0;
    setup_jokers();
    setup_answers();

    $.post("questions.php", function(datos){

      res = $.parseJSON(datos).shuffle();
      //recuperar nombre del login
      counter = 0;
      question_to_ask = {};

      loadQuestion();
      startCounter();


      $(".answer_class").parent().click(function(){
        text_answer = $.trim($(this).text().replace(/\s\s+/g, ' '));
        correct_answer = $.trim(question_to_ask['correct_answer'].replace(/\s\s+/g, ' '));
        if (text_answer == correct_answer){
          clearInterval(countdown_id);
          alert('Acertado');
          val_score = parseInt($("#punt").find('h2').text());
          $("#punt").find('h2').text((val_score+1000).toString());

          if(counter == res.length){
            clearInterval(countdown_id);
            saveScore();
            you_are_a_winner();
            window.location.replace("index.html");
          }else{
            if(counter == res.length - 1){
              //no se puede usar el c1 en la ultima pregunta
              $('#c1').children().hide();
              used_c1 = 1;
            }
            setup_answers();
            loadQuestion();
            startCounter();
          }

        }
        else {
          clearInterval(countdown_id);
          saveScore();
          fail_question();
          window.location.replace("index.html");
        }
      });
    });

    function you_are_a_winner(){
      alert('WINNER WINNER CHICKEN DINNER');
    }

    function fail_question(){
      alert('SERO!!!');
    }

    function no_time_fail(){
      alert('SE ACABO EL TIEMPO HASE UHDATE');
    }

    function setup_jokers(){
      $('#c1').children().show();
      $('#c2').children().show();
      $('#c3').children().show();
    };
    function setup_answers(){
      $(".answer_class").each(function(index,answer){
        $(this).parent().show();
      });
    }

    $('#c1').click(function(){
      if(used_c1 == 1){
        return;
      }
      used_c1 = 1;
      $(this).children().hide();
      //next question
      clearInterval(countdown_id);
      loadQuestion();
      startCounter();
      setup_answers();
    });
    $('#c2').click(function(){
      if(used_c2 == 1){
        return;
      }
      used_c2 = 1;
      $(this).children().hide();
      clearInterval(countdown_id);
      actual_time = $("#time").find('h2').text();
      new_time = parseInt(actual_time) + 30;
      $("#time").find('h2').text(new_time.toString());
      countdown_id = setInterval(countdownTimer,1000);
    });
    $('#c3').click(function(){
      if(used_c3 == 1){
        return;
      }
      used_c3 = 1;
      $(this).children().hide();
      joker_50();
    });

    function joker_50(){
      random_array = [1,1,0];
      index_random_array = 0;
      random_array.shuffle();
      correct_answer = $.trim(question_to_ask['correct_answer'].replace(/\s\s+/g, ' '));
      $(".answer_class").each(function(index,answer){
        text_answer = $.trim($(this).text().replace(/\s\s+/g, ' '));
        if(text_answer != correct_answer){  
          if(random_array[index_random_array] == 1){
            $(this).parent().hide();
          }
          index_random_array ++;
        }
      });
    };

    function countdownTimer(){
      val_timer = parseInt($("#time").find('h2').text());
      new_val_timer = val_timer - 1;
      $("#time").find('h2').text(new_val_timer.toString());
      if(new_val_timer == 0){
        clearInterval(countdown_id);
        saveScore();
        no_time_fail();
        window.location.replace("index.html");
      }
    }

    function saveScore(){

      scores = localStorage.getItem('scores');
      if (scores == null){
        scores = JSON.parse('[]'); // String -> JSON
      }else{
        scores = JSON.parse(scores);
      }
      score_ = $("#punt").find('h2').text();
      new_score = {"name":localStorage.getItem('name'),"score":score_};
      scores.push(new_score);
      //localStorage solo admite guardar String
      localStorage.setItem('scores',JSON.stringify(scores) /*JSON -> String*/);
    }

    function startCounter(){
      $("#time").find('h2').text('30');
      countdown_id = setInterval(countdownTimer,1000);
    }

    function loadQuestion(){
      question_to_ask = res[counter];
      counter++;
      question_to_ask['answers'].shuffle();
      res_1 = question_to_ask['answers'][0];
      res_2 = question_to_ask['answers'][1];
      res_3 = question_to_ask['answers'][2];
      res_4 = question_to_ask['answers'][3];
      preg = question_to_ask['title'];

      $("#r1").find('h3').text(res_1);
      $("#r2").find('h3').text(res_2);
      $("#r3").find('h3').text(res_3);
      $("#r4").find('h3').text(res_4);
      $("#preg").find('h1').text(preg);
    }

});
