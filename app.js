var state = {
  score: 0,
  current: 0,
  questions: [{
      image: "pics/history-of-pawnee.jpg",
      title: "What is Leslie Knopp's birthplace? ",
      choices: ['Pawnee', 'Eagleton', 'Bosie', 'Indianapolis'],
      correct: 'Eagleton'
    },
    {
      image: 'pics/Painting-Leslie-large.jpg',
      title: "Who accidently painted Lesie and Tom's faces onto mythological creatures?",
      choices: ['Jerry', 'Donna', 'Terry', 'Andy'],
      correct: 'Jerry'
    },
    {
      image: 'pics/Chris-Pratt-before-after.jpg',
      title: 'What did Andy stop doing to loose his weight?',
      choices: ['Drinking Soda', 'Eating Donuts', 'Exercising', 'Drinking Beer'],
      correct: 'Drinking Beer'
    },
    {
      image: 'pics/jamm-548x335.jpg',
      title: 'What profession is Councilman Jamm?',
      choices: ['Doctor', 'Dentist', 'Car Salesmen', 'Chief'],
      correct: 'Dentist'
    },
    {
      image: 'pics/Ron-and-Tammy.jpg',
      title: 'How many wives has Ron had?',
      choices: ['2', '3', '4', '0'],
      correct: '3'
    }
  ]
};



function generate() {

  if (state.current >= state.questions.length) {

    gameOver();
    return;

  }

  $("#choices").empty();

  var question = state.questions[state.current];

  $('#count').text(state.current + 1);
  $('#question-title').text(question.title);
  $("#question-pic").attr('src', question.image);
  $('#question-pic').attr('class', 'pic');


  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    $("#choices").append('<input type="radio" name="radio" value=' + choice + '>' + choice + '<br />');
  }
}


$('#submit-answer').submit(function (event) {
  event.preventDefault();

  var value = $('input[name=radio]:checked', $(this)).val();

  if (value === state.questions[state.current].correct) {
    state.score++;
    console.log("Congrats!!! That is correct")
  } else {
    console.log("Sorry; That's Incorrect");
  }
  $('.choices').empty();
  $('.title').empty();
  state.current++;
  generate();

});

$('#restart').on('click', function () {
  $('.choices').empty();
  $('.title').empty();
  state.current = 0;
  state.score = 0;
  $('#start-box').css('display', 'inline-block');
  $('#question-box').hide();
  $('#results-box').hide();
});

$('#start').submit(function (event) {
  event.preventDefault();

  $('#start-box').hide();
  $('#question-box').css('display', 'inline-block');

  generate();

});

function gameOver() {
  $('#start-box').hide();
  $('#question-box').hide();
  $('#results-box').css('display', 'inline-block');
  $('#final-score').text(state.score);
}