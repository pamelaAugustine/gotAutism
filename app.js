//First slide show div
var vid = document.getElementById("childVid");
vid.loop = true;
//Second slid Show div
var vid2 = document.getElementById("famVid");
vid2.loop = true;

//Intro//
//The below code is the Terms and Conditions and the Autism Questionaire dialog boxes on the gotAutism? website. The code will execute when the user selects the  Terms and Conditions button. If the user agrees to the terms and conditions the questionaire will appear. If the user does not agree the dialog will close and the user will not be allowed to take the questionaire. There are 10 questions each with a numerical value. Based on the end users response to each question this code will add the total. The end total will trigger a response (dialog box) which will give the end user information on how gotAutism? can help.//

//***anything in lower case text is just instructions/explinations. ALL CAPITAL LETTER COMMENTS ARE FUNCTION BASED COMMENTS FOR DEBUGGING***//

                    //START CODE//

        //BODY//

                    //START MAIN FUNCTION//
//VARIABLES FOR DIALOG BOXES AND BUTTONS IN HTML. THESE VARIABLES ARE CALLING THE DOM IN ORDER TO APPLY FUNCTIONS TO THE HTML DOC.
(function () {
    
//.querySelector - (Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.) 

    var parentButton = document.querySelector("#disclaimerBox");
    
//.getElementById - (The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.)  **Just because a variable is not literally used the purpose is to connect the DOM HTML to the script and is required.
  
    var disBox = document.getElementById("openDisclaimer");
    var disClaimer = document.getElementById("disclaimerBox");
    var questionaire = document.getElementById('startQuest');
    var favDialog = document.getElementById('favDialog');
    var outputBox = document.getElementById("output");
    var outputBoxs =document.getElementById("outputs");
    var endQuest = document.getElementById("closeResponse");
    var agreeMent = document.getElementById("agree");
    var disagreeMent = document.getElementById("disagree");

  
//START EVENT LISTENER AND FUNCTION FOR TERMS AND CONDITIONS DIALOG BOX
disBox.addEventListener('click', function () {
    disClaimer.showModal();

//START EVENT LISTENER FOR BUTTONS WITHIN THE TERMS AND CONDITIONS
    parentButton.addEventListener("click", twoButtons, false);

//START FUNCTION FOR PARENT BUTTON. THIS GROUPS THE AGREE AND DISAGREE BUTTONS TOGETHER TO ENSURE THAT THEY WORK WELL TOGETHER.
    function twoButtons(e) {
        if (e.target !== e.currentTarget) {
          var clickedButton = e.target.id;
          //   console.log("Hello " + clickedButton);
        }
//START SWITCH CASE FOR THE AGREE BUTTON WHICH WILL TAKE THE END USER TO THE QUESTIONAIRE

        switch (clickedButton) {
            case "startQuest":
              favDialog.showModal();
              disClaimer.close();
              console.log("favDialog fired");
              break;

//START SWITCH CASE FOR DISAGREE BUTTON WHICH SHOULD CLOSE THE DIALOG BOX PREVENTING THE END USER FROM COMPLETEING THE QUESTIONAIRE              
            case "disagree":
              disClaimer.close();
              break;
          }

          

 //START THE FUNCTION FOR THE SUBMIT BUTTON IN QUESTIONAIRE
document.getElementById("submit").onclick = function () {
    event.preventDefault();
   outputBoxs.showModal();
   favDialog.close();




//document.forms - (The forms read-only property of the Document interface returns an HTMLCollection listing all the <form> elements contained in the document.)
//NOW WE WILL CALL THE HTML DOM FOR THE QUESTIONS AND THE VALUES

let q1 = parseInt(document.forms["left-side"]["contact"].value, 10);
let q2 = parseInt(document.forms["left-side"]["voice"].value, 10);
let q3 = parseInt(document.forms["left-side"]["point"].value, 10);
let q4 = parseInt(document.forms["left-side"]["smile"].value, 10);
let q5 = parseInt(document.forms["left-side"]["rocking"].value, 10);
let q6 = parseInt(document.forms["left-side"]["avoid"].value, 10);
let q7 = parseInt(document.forms["left-side"]["delayed"].value, 10);
let q8 = parseInt(document.forms["left-side"]["imagine"].value, 10);
let q9 = parseInt(document.forms["left-side"]["eater"].value, 10);
let q10 = parseInt(document.forms["left-side"]["coping"].value, 10);

//WE NEED TO STORE THE ABOVE QUESTIONS INTO A SINGLE ARRAY
let answerArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];




//WE NEED TO CREATE A VARIABLE FOR COUNT
let count = 0;

                   
//WE NEED TO CREATE A LOOP TO ITERATE THROUGH THE ANSWER ARRAY
for (let i = 0; i < answerArr.length; i++) {
    count += answerArr[i];
}
console.log("This is the count " + count);

//WE WILL NOW SET THE CONDITIONS FOR THE COUNT BASED ON THE END USERS REPONSES TO THE QUESTIONAIRE
if (count >= 0 && count < 10) {
               
    console.log("low risk");
    // returns a dialog box with information
    output.innerHTML += "<div>" + outputBoxs.returnValue + "Thank you for taking the Autism Awareness Questionanire. The results indicate a low risk probability. We have resources and community activities that could help in coping with this difficult situation. </div>";
} else if (count >= 11 && count < 21) {
    
    console.log("medium risk");
      // returns a dialog box with information
    output.innerHTML += "<div>" + outputBoxs.returnValue + "Thank you for taking the Autism Awareness Questionnaire. The results indicate a medium risk probability. We have resources and community activities that could help in coping with this difficult situation.</div>";
} else{
    
    console.log("high risk");
    // returns a dialog box with information
    output.innerHTML += "<div>" + outputBoxs.returnValue + "Thank you for taking the Autism Awareness Questionnaire. The results indicate a high risk probability. We have resources and community activities that could help in coping with this difficult situation.</div>";


}
}


//WE WILL CREATE A DIALOG BOX WITH INFORMATION FOR THE END USER THAT IS SPECIFIC TO THE OVERALL VALUE OF THE QUESTIONS ANSWERED


endQuest.addEventListener('click', function(){
    console.log("Click");
    outputBoxs.close();

 
})     
}       
//Event dialog box//

});
})();

//THIS CODE WAS BUILT BY DEVELOPER JESSICA BRUNER AND DEVELOPER/PERSEVERE INSTRUCTOR RODNEY JAMES. WHO ADDED HIS TWO CENTS WHEN IT HELPED MOST.