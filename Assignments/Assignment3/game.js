var all=['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ'];
var main=['मेरा','नाम','सत्तू','है','मैं','झांसी','का','रहने','वाला','हूं','मुझे','क्रिकेट','खेलना','बहुत','ाच्छा','लगता','था','परन्तु','जब','से','गांव','छोङा','तभी','मैंने','यह','निर्णय','लिया','कि','ाब','मुझे','थोडी','अध्ययन','भी','करना','चाहिये','ान्यथा','ानर्थ','हो','जायेगा','तभी','मेरे','मित्रो','ने','मुझे','यह','जानकारी','प्राप्त','करवायि','पुराने','लोग','होते','ही','ेसे','हमारे','देश','भारत','का','कोयि','तुलना','करने','योग्य','कुछ','बिषेश','पहलू','शेष','बचा','क्योकि','आज','दुनिया','के','विशिष्ट','लोग']

var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
var j=0;
var i=0;
var word='';
var count=0;
var score=0;

var mainarray=all[0];
console.log(mainarray);

document.getElementById("Score").innerHTML= "क्रिपया " + "जांच " + "कीजिये " + "कि " + "आपका " + "शब्द " + "सही " + "है " + "या " + "नही |";


function setlanguage()	
{						
	score = 0;
	var t = 11;
	var h=0;
	var lang = document.getElementById('Language');	
	var langval = lang.options[lang.selectedIndex].value;
	console.log('value is ' + langval);
	for(t;t<=55;t++)
	{
		var get = document.getElementById(t);
		
		
		
		if (langval == 'hindi')	
		{
			var rand = all[Math.floor(Math.random() * all.length)];
		}
		document.getElementById(t).innerHTML=rand;

		if (t%5 == 0)
			t = t+5;
	}
	word='';
}

function regenerate()
{	
	console.log('inside regenerate');
	word='';
	j=0;	
	var lang = document.getElementById('Language');	
	var langval = lang.options[lang.selectedIndex].value;
	console.log('inside regenerate: ' + langval);
	document.getElementById("Selectedletter").innerHTML='';

	
	if(langval=='hindi')														
	{
	for(var i=0;i<25;i++)
	{
		var item = all[Math.floor(Math.random()*(all.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;
		j++;
	}
	}
	document.getElementById("Score").innerHTML=  "क्रिपया" + "जांच" + "कीजिये " + "कि " + "आपका " + "शब्द " + "सही " + "है " + "या " + "नही |";
	score=0;
}
setlanguage();

function getdata(a,b)															
{
	a=a-1;
	b=b-1;
	var data='';
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML="आपका " + "शब्द: " + word;
	document.getElementById("Score").innerHTML='';
}

function Check()																
{
	
	var flag=0;
	console.log(word);
	var lang = document.getElementById('Language');
	var langval = lang.options[lang.selectedIndex].value;
	if(langval=='hindi')	
	{
		for(var k=0;k<main.length;k++)
		{
		console.log(main[k]);
		if(word==main[k])
		{
		flag=1;
		score=score+2;
		document.getElementById("Score").innerHTML="बधायि हो!! " + "आपकी " + "गणना " + "है " + score;		// Word found
		break;
		}
		}
		if(flag==0)
			document.getElementById("Score").innerHTML="क्षमा करें!! " + "शब्द " + "नहीं " + "मिला|";		// Word is not valid
		flag=0;
	}
}
	

