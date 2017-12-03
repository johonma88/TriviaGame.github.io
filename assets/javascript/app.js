// list of objects
$(document).ready(function(){
var questions =[
        {
        name: 'Dumb and Dumber',
        answers:[ "Colorblind by Counting Crows","Ballad of Peter Pumpkinhead by Crash Test Dummies","Your Song by Ewan MacGregor","War by Henry Rollins and Bone Thugs N Harmony"],
        correctAnswer: "Ballad of Peter Pumpkinhead by Crash Test Dummies",
        picture:'<img src="assets/images/dumb-dumber.jpg" height="50%" width="100%">' ,
        music: '<audio src="assets/music/Crash Test Dummies - The Ballad Of Peter Pumpkin Head.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: 'X Files',
            answers: ["Walking After You by Foo Fighters","Your Song by Ewan MacGregor", 
            "Can't Take My Eyes Off Of You by Heath Ledger", "Only Lonely by Hootie and the Blowfish"],
            correctAnswer: "Walking After You by Foo Fighters",
            picture:'<img src="assets/images/xfiles.jpeg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Foo Fighters - Walking After You.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: 'Train Spotting',
            answers: ["Again by Janet Jackson","I'm Gonna Be (500 Miles) by The Proclaimers","Talkshow Host by Radiohead","Lust For Life by Iggy Pop"],
            correctAnswer: "Lust For Life by Iggy Pop",
            picture:'<img src="assets/images/Trainspotting.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Iggy Pop - Lust For Life.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: "Romeo & Juliet",
            answers: ["Angel by Sarah McLachlan","Talkshow Host by Radiohead","She Came On by Super Deluxe","Bittersweet Symphony by The Verve"],
            correctAnswer: "Talkshow Host by Radiohead",
            picture:'<img src="assets/images/romeo-e-juliet.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Romeo  Juliet 1996 -- Radiohead -- Talk Show Host.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: "Neon Genesis Evangelion",
            answers:["Colors of the Wind by Vanessa Williams","How Do I Live by Trisha Yearwood","Cruel Angel's Thesis by Yoko Takahashi","Always Love You by Whitney Houston"],
            correctAnswer: "Cruel Angel's Thesis by Yoko Takahashi",
            picture:'<img src="assets/images/neon-genesis-evangelion.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Neon Genesis Evangelion OP - Cruel Angels Thesis by Yoko Takahashi.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: "American Pie",
            answers: ["Love Shoulda Brought You Home by Toni Braxton","Accelerator by Therapy?","Colors of the Wind by Vanessa Williams","You Wanted More by Tonic"],
            correctAnswer: "You Wanted More by Tonic",
            picture:'<img src="assets/images/American_pie9.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/YOU WANTED MORE by Tonic.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: "Jerry McGuire",
            answers: ["Free Fallin by Tom Petty","Love Shoulda Brought You Home by Toni Braxton","She Came On by Super Deluxe","Bittersweet Symphony by The Verve"],
            correctAnswer: "Free Fallin by Tom Petty",
            picture:'<img src="assets/images/jerry-maguire-featured.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Tom Petty - Free Fallin.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: "Mrs Doubtfire",
            answers: ["Save Me by Aimee Mann","If You Stay by Backstreet Boys","Dude Looks Like A Lady by Aerosmith","From the Heart by Another Level"],
            correctAnswer: "Dude Looks Like A Lady by Aerosmith",
            picture:'<img src="assets/images/MrsDoubtfire_370x280.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Aerosmith - Dude (Looks Like A Lady).mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: "City of Angels",
            answers: ["If You Stay by Backstreet Boys","Baby I Love Your Way by Big Mountain","Uninvited by Alanis Morrissette","From the Heart by Another Level"],
            correctAnswer: "Uninvited by Alanis Morrissette",
            picture:'<img src="assets/images/coa-picture.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Alanis Morissette - Uninvited.mp3" autoplay="autoplay" ></audio>'
        },
        {
            name: "The Nutty Professor",
            answers:["How Do I Live by Trisha Yearwood","Touch Me, Tease Me by Case","Because You Loved Me by Celine Dion","Free Fallin by Tom Petty"],
            correctAnswer: "Touch Me, Tease Me by Case",
            picture:'<img src="assets/images/the-nutty-professor-movie-featured-800x450.jpg" height="50%" width="100%">' ,
            music: '<audio src="assets/music/Touch Me Tease Me.mp3" autoplay="autoplay" ></audio>'
        }
];

var index= 0;
var correct;
var right = 0;
var wrong = 0;
var musicTemp;
var wrongMusic ='<audio src="assets/music/FAIL SOUND EFFECT.mp3" autoplay="autoplay" ></audio>';

$("#start").click(function(){
    $(this).hide();
     setTimeout(trivia(),60000);
    }); 

  
    function trivia(){
        console.log(questions[index].name);
        $("#question").html("What song was in " + questions[index].name);
        $('#optionsBox').empty();
        $('#movieImage').empty();
        console.log(questions[index].picture);
        $('#movieImage').append(questions[index].picture);

        for (var i=0; i < 4; i++){
            console.log('here are my answers', questions[index].answers[i]);
            
            $("#optionsBox").append('<input type="radio" name="choices" value="' + questions[index].answers[i] + '">' + questions[index].answers[i] + '<br />');
        }
        correct = questions[index].correctAnswer;
        musicTemp = questions[index].music;
        index++;
    };


$('#submit').click(function(){

    setTimeout(checkAnswer(),30000);
    setTimeout(trivia(),60000);
    
});


function checkAnswer(){
        $('#movieMusic').empty();
        var userAnswer = $("input[name=choices]:checked").val();
        if (userAnswer===correct)
        {
            right++;
            $('#right').html('Correct Answers: '+ right);
            console.log("if works");
            $('#movieMusic').append(musicTemp);
            $('#msj').html("Good Job!!!!   You got it");

        }
        else {
            console.log('else works');
            wrong++;
            $('#wrong').html('Incorrect Answers: '+ wrong);
            $('#movieMusic').append(wrongMusic);
            $('#msj').html("That's not the right answer!");
        };
     

    }

});


 