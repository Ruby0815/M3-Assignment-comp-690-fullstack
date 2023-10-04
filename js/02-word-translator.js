let lang_code;
lang_code = prompt('Please Enter langage code ("es", "de", "en", and "fr") ');
if(lang_code === "es"){
    console.log('Hello World translated in Spnish is: Hola')
} else if(lang_code=== "de"){
    console.log('Hello World translated in German is: Hallo Welt')
} else if(lang_code=== "en"){
    console.log('Hello World translated in English is: Hello World')
} else if(lang_code=== "fr"){
    console.log('Hello World translated in French is: Bonjour le monde')
} else{
    console.log(`By default Hello world in English`)
}