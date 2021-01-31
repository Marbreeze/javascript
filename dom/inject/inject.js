/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

let center = document.createElement('center');
center.innerHTML=('<h1><i>HTML Practice Exercise TEKcamp</i></h1><h2><a href ="">TEKsystems "TEKcamp"</a></h2>')
document.getElementById('inject').append(center);

let hrOne = document.createElement('hr');
document.getElementById('inject').append(hrOne);

let pOne = document.createElement('p');
pOne.innerHTML=('I love <i>HTML</i> for the following reasons:')
document.getElementById('inject').append(pOne);

let ol = document.createElement('ol');
ol.innerHTML=('<li>I learned it quickly.</li><li>I can make web pages using code<li> It’s fun.</li>')
document.getElementById('inject').append(ol);

let hrTwo = document.createElement('hr'); 
document.getElementById('inject').append(hrTwo); 

let pTwo = document.createElement('p'); 
pTwo.innerHTML = ('My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.'); 
document.getElementById('inject').append(pTwo); 

let pTree = document.createElement('p'); 
pTree.innerHTML = ('<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day. -[Team "Git\'er Done"]'); 
document.getElementById('inject').append(pTree ); 

