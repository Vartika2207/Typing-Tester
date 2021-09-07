const random_quote_api_url="http://api.quotable.io/random";
const quoteDisplayElement=document.getElementById('quoteDisplay');
const quoteInputElement=document.getElementById('quoteInput');
const timerElement=document.getElementById('timer');

quoteInputElement.addEventListener('input',()=>{
	const arrayOfQuote=quoteDisplayElement.querySelectorAll('span');
	const arrayValue=quoteInputElement.value.split('');
//default assumption true
    let correct=true;

	arrayOfQuote.forEach((characterSpan,index) => {
		const character=arrayValue[index]; //have input character
		if(character==null){
			characterSpan.classList.remove('correct-word');
			characterSpan.classList.remove('incorrect-word');
			correct=false;
		}
		else if(character===characterSpan.innerHTML){
			characterSpan.classList.add('correct-word');
			characterSpan.classList.remove('incorrect-word');
		}
		else{
			characterSpan.classList.remove('correct-word');
			characterSpan.classList.add('incorrect-word');
			correct=false;
		}
		//index++;
	})
	if(correct) {  
     setInterval(
	getRandomQuote(),4000);    //next quote is displayed
                }
})

function getRandomQuote(){
    
    $.get(random_quote_api_url,function(data){
    const quote=data.content;	
   	quoteDisplayElement.innerText='';
    quote.split('').forEach(character=>{
    	const characterSpan=document.createElement('span');
    	//characterSpan.classList.add('correct-word')
    	characterSpan.innerText=character;
    	quoteDisplayElement.appendChild(characterSpan);
    })
    

    quoteInputElement.value=null;
    timer();
     	console.log(data.content);
     	    })
}

var startTime;

function timer(){
     timerElement.innerText=0;
      startTime= new Date();
      //new Date() creates a new date object with the current date and time:
     setInterval(()=> {
      timerElement.innerText=getTimerTime()
     },1000);
}
function getTimerTime(){
	return Math.floor((new Date()- startTime)/1000); //milli seconds to seconds
     //Mth.floor rounds off to integer
}

getRandomQuote();






























