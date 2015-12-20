var all=['ानार','आम','िमली','ीख','ुल्लू','ून','ेडी','ैनक','ोखली','ौरत','ंगूर','कबूतर','खरगोश','गमला','घर','चम्मच','छतरी','जहाज','झ़़ण्डा','टमाटर','ठठेरा','डमरू','ढपली','तराजू','थरमस','दवात','धनुष','नल','पतंग','फल','बतख','भालू','मछली','यज्ञ','रथ','लङकी','वन','शरबत','षटकोण','सब्जी','हथौङा','क्षत्रिय','त्रिशूल','ज्ञानी'];
var english=
['apple','ball','cat','dog','elephant','fish'];
var main=['मेरा','नाम','सत्तू','है','मैं','झांसी','का','रहने','वाला','हूं','मुझे','क्रिकेट','खेलना','बहुत','ाच्छा','लगता','था','परन्तु','जब','से','गांव','छोङा','तभी','मैंने','यह','निर्णय','लिया','कि','ाब','मुझे','थोडी','अध्ययन','भी','करना','चाहिये','ान्यथा','ानर्थ','हो','जायेगा','तभी','मेरे','मित्रो','ने','मुझे','यह','जानकारी','प्राप्त','करवायि','पुराने','लोग','होते','ही','ेसे','हमारे','देश','भारत','का','कोयि','तुलना','करने','योग्य','कुछ','बिषेश','पहलू','शेष','बचा','क्योकि','आज','दुनिया','के','विशिष्ट','लोग'];

var getElementId=[11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66];
var j=0;
var i=0;
var word='';
var count=0;
var score=0;
var imgarray1 = ["ानार.jpg", "आम.jpg", "िमली.jpg", "ीख.jpg", "ुल्लू.jpg", "ून.jpg", "ेडी.jpg", "ैनक.jpg", "ोखली.jpg", "ौरत.jpg", "ंगूर.jpg", "कबूतर.jpg", "खरगोश.jpg", "गमला.jpg", "घर.jpg", "चम्मच.jpg", "छतरी.jpg", "जहाज.jpg", "झ़़ण्डा.jpg", "टमाटर.jpg", "ठठेरा.jpg", "डमरू.jpg", "ढपली.jpg", "तराजू.jpg", "थरमस.jpg", "दवात.jpg", "धनुष.jpg", "नल.jpg", "पतंग.jpg", "फल.jpg", "बतख.jpg", "भालू.jpg", "मछली.jpg", "यज्ञ.jpg", "रथ.jpg", "लङकी.jpg", "वन.jpg", "शरबत.jpg", "षटकोण.jpg", "सब्जी.jpg", "हथौङा.jpg", "क्षत्रिय.jpg", "त्रिशूल.jpg", "ज्ञानी.jpg"];
var imgarray2 = ["ानार", "आम", "िमली", "ीख", "ुल्लू", "ून", "ेडी", "ैनक", "ोखली", "ौरत", "ंगूर", "कबूतर", "खरगोश", "गमला", "घर", "चम्मच", "छतरी", "जहाज", "झ़़ण्डा", "टमाटर", "ठठेरा", "डमरू", "ढपली", "तराजू", "थरमस", "दवात", "धनुष", "नल", "पतंग", "फल", "बतख", "भालू", "मछली", "यज्ञ", "रथ", "लङकी", "वन", "शरबत", "षटकोण", "सब्जी", "हथौङा", "क्षत्रिय", "त्रिशूल", "ज्ञानी"];
var temp=[];
temp.length=10;
var mainarray=all[0];
console.log(mainarray);

document.getElementById("Score").innerHTML= "क्रिपया " + "जांच " + "कीजिये " + "कि " + "आपका " + "शब्द " + "सही " + "है " + "या " + "नही |";

load_images();


function load_images()
{
	var images;
	for(var i = 0;i<4;i++)
	{
		var target = document.getElementById('option_list');
		console.log(target);
		images = all[Math.floor(Math.random()*(all.length))];
		temp[i] = images;
		images += ".jpg";


		console.log(images);	
		var option = document.createElement('img');
		option.src = images;
		option.setAttribute("src","/home/hp/Documents/Software Engineering/Assignment-6/"+images);
		console.log(option.src);
		option.style = "width:200px;height:100px;";	
		target.appendChild(option);
		images = "";
	}
}

function setlanguage()	
{						
	score = 0;
	var t = 11;
	var h=0;
	var lang = document.getElementById('Language');	
	var langval = lang.options[lang.selectedIndex].value;
	console.log('value is ' + langval);
	for(t;t<=66;t++)
	{
		var get = document.getElementById(t);
		
		
		
	/*	if (langval == 'english')	
		{
			var rand = english[Math.floor(Math.random() * english.length)];
		}
	*/	
	
		if (langval == 'hindi')	
		{
			var rand = all[Math.floor(Math.random() * all.length)];
		}
		document.getElementById(t).innerHTML=rand;

		if (t%10 == 6)
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
	for(var i=0;i<36;i++)
	{
		var item = all[Math.floor(Math.random()*(all.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;
		j++;
	}
	}

/*	if(langval=='english')														
	{
	for(var i=0;i<36;i++)
	{
		var item = english[Math.floor(Math.random()*(english.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;
		j++;
	}
	}
*/
	document.getElementById("Score").innerHTML=  "क्रिपया " + "जांच " + "कीजिये " + "कि " + "आपका " + "शब्द " + "सही " + "है " + "या " + "नही |";
	score=0;
}
setlanguage();

function getdata(a,b)															
{
	a=a-1;
	b=b-1;
	var data='';
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	//word=word.concat(data); // this line is for cocat all selected words.	
	word=data;                // this line is only for recent word.
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
		for(var i=0;i<4;i++)
		{
		
			if(word==temp[i])
			{
			//flag=1;
			score=score+2;
			document.getElementById("Score").innerHTML="बधायि हो!! " + "आपकी " + "गणना " + "है " + score;		// Word found
			//break;
			}
			else
			{
				continue;
			}
		
		}
		
	}
}
	

