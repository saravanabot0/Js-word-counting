const id = (id) => document.getElementById(id);

let txtArea = id("textArea"); 
let speakButton = id("speak-button");
console.log(txtArea);

let inputValue, isSpeaking=true;



const store = [
  { ACount: id("Acount"), AValue: 0 },
  { BCount: id("Bcount"), BValue: 00 },
  { CCount: id("Ccount"), CValue: 00 },
  { DCount: id("Dcount"), DValue: 00 },
  { ECount: id("Ecount"), EValue: 00 },
  { FCount: id("Fcount"), FValue: 00 },
  { GCount: id("Gcount"), GValue: 00 },
  { HCount: id("Hcount"), HValue: 00 },
  { ICount: id("Icount"), IValue: 00 },
  { JCount: id("Jcount"), JValue: 00 },
  { KCount: id("Kcount"), KValue: 00 },
  { LCount: id("Lcount"), LValue: 00 },
  { MCount: id("Mcount"), MValue: 00 },
  { NCount: id("Ncount"), NValue: 00 },
  { OCount: id("Ocount"), OValue: 00 },
  { PCount: id("Pcount"), PValue: 00 },
  { QCount: id("Qcount"), QValue: 00 },
  { RCount: id("Rcount"), RValue: 00 },
  { SCount: id("Scount"), SValue: 00 },
  { TCount: id("Tcount"), TValue: 00 },
  { UCount: id("Ucount"), UValue: 00 },
  { VCount: id("Vcount"), VValue: 00 },
  { WCount: id("Wcount"), WValue: 00 },
  { XCount: id("Xcount"), XValue: 00 },
  { YCount: id("Ycount"), YValue: 00 },
  { ZCount: id("Zcount"), ZValue: 00 },
];

const special = [
  {letters: id("letterCount"), letterValue: 00},
  {words: id("wordsCount"), wordsValue: 00},
  {lines: id("linesCount"), linesValue: 00},
]

// for(let value in store) {
//     console.log(store[value]);
// }

console.log(store[0].ACount, store[0].AValue);

// for (let empty of store) {
//     console.log(Object.keys(empty)[1]);
// }

const handleSubmit = (e) => {
  e.preventDefault();
  console.dir(e.target[0]);

  inputValue = e.target[0].value.toLowerCase();



  // Count the number of line breaks in the text
  const lineBreaksCount = (inputValue.match(/\n/g) || []).length;

  // Add 1 to account for the last line which might not have a line break
  const lineCount = lineBreaksCount + 1;

  console.log('Line Count:', lineCount);

  


  const arrList = ["AValue","BValue","CValue","DValue","EValue","FValue","GValue","HValue","IValue","JValue","KValue","LValue","MValue","NValue","OValue","PValue","QValue","RValue","SValue","TValue","UValue","VValue","WValue","XValue","YValue","ZValue"]

  for( let empty of store) {
    for(let check of arrList) {
        if(Object.keys(empty)[1] === check){
            empty[check] = 0 + "0";
            // console.log(Object.values(empty)[0]);
            Object.values(empty)[0].innerHTML = empty[check] ;
            Object.values(empty)[0].style = "color: black;"
            break; 
        }
    }
  }
 console.log(store,"#");

  const alphabetCount = (index, id, item) => {
    store[index][item]++;
    // console.log(store[index][item]);
    store[index][id].innerHTML = store[index][item] < 10 ? "0" + store[index][item] : store[index][item];
    // console.log(store[index][id],store[index][item])
    store[index][id].style = "color:yellow;";
    return store[index][id].innerHTML;
  };
  console.log(store,"##");

  let letterPattern = /\w/g; /*The \w metaCharacter matches word characters.
  A word character is a character a-z, A-Z, 0-9, including _ (underscore). */

  let letterCount = inputValue.match(letterPattern);
  
  let wordCount = inputValue.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" "); 
  // console.log(wordCount,"wordCount");
  /* /[^\w\s]|_/g:
  [\w\s] matches word characters (alphanumeric characters and underscores) and whitespace.
  [^...] matches any character that is not within the specified set.
  _ matches underscores.
  /[^\w\s]|_/g matches any character that is not a word character or whitespace or underscores globally.
  /\s+/g:
  \s+ matches one or more whitespace characters globally. */

  special[0].letters.innerHTML =   letterCount.length < 10 ? "0" + letterCount.length : letterCount.length;
  
  special[1].words.innerHTML = wordCount.length < 10 ? "0" + wordCount.length : wordCount.length;

  for (let letter of inputValue) {
    // console.log("letter");
    switch (letter) {
      case "a":
        alphabetCount(0, "ACount", "AValue");
        break;
      case "b":
        alphabetCount(1, "BCount", "BValue");
        break;
      case "c":
        alphabetCount(2, "CCount", "CValue");
        break;
      case "d":
        alphabetCount(3, "DCount", "DValue");
        break;
      case "e":
        alphabetCount(4, "ECount", "EValue");
        break;
      case "f":
        alphabetCount(5, "FCount", "FValue");
        break;
      case "g":
        alphabetCount(6, "GCount", "GValue");
        break;
      case "h":
        alphabetCount(7, "HCount", "HValue");
        break;
      case "i":
        alphabetCount(8, "ICount", "IValue");
        break;
      case "j":
        alphabetCount(9, "JCount", "JValue");
        break;
      case "k":
        alphabetCount(10, "KCount", "KValue");
        break;
      case "l":
        alphabetCount(11, "LCount", "LValue");
        break;
      case "m":
        alphabetCount(12, "MCount", "MValue");
        break;
      case "n":
        alphabetCount(13, "NCount", "NValue");
        break;
      case "o":
        alphabetCount(14, "OCount", "OValue");
        break;
      case "p":
        alphabetCount(15, "PCount", "PValue");
        break;
      case "q":
        alphabetCount(16, "QCount", "QValue");
        break;
      case "r":
        alphabetCount(17, "RCount", "RValue");
        break;
      case "s":
        alphabetCount(18, "SCount", "SValue");
        break;
      case "t":
        alphabetCount(19, "TCount", "TValue");
        break;
      case "u":
        alphabetCount(20, "UCount", "UValue");
        break;
      case "v":
        alphabetCount(21, "VCount", "VValue");
        break;
      case "w":
        alphabetCount(22, "WCount", "WValue");
        break;
      case "x":
        alphabetCount(23, "XCount", "XValue");
        break;
      case "y":
        alphabetCount(24, "YCount", "YValue");
        break;
      case "z":
        alphabetCount(25, "ZCount", "ZValue");
        break;
      default:
        // console.log(letter,"Invalid...");
    }
  }
};

// Create a new SpeechSynthesisUtterance object
let utterance = new SpeechSynthesisUtterance();

// Set the text and voice of the utterance
utterance.text = inputValue;
utterance.voice = window.speechSynthesis.getVoices()[7];

// Add an event listener to the speak button
speakButton.addEventListener("click", function() {
  // Get the text from the text area
  // let text = textArea.value;

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = inputValue;
  utterance.voice = window.speechSynthesis.getVoices()[7];

  // console.log( utterance.voice);
  window.speechSynthesis.getVoices().forEach((voice,i)=> console.log(voice,"voice"));
  // for(let abc of speechSynthesis.getVoices()) {
  //   console.log(abc,"voice");
  // }

  console.log(utterance, "window");

  // Speak the utterance
  window.speechSynthesis.speak(utterance);

  
  if(inputValue.length>0) {
    if(isSpeaking) {
      utterance.onresume = true;
      // alert("coming#")
      isSpeaking = false;
      speakButton.innerHTML = "Play"

    }else {
      utterance.onpause=true;
      // alert("coming##");
      isSpeaking = false;
      speakButton.innerHTML = "Pause"
    }
    
  } 
   
  });
