// Current language
export let currentLanguage = "it";

// Dictionary files
const dictionaries = {
    it: "./phonitalia.json",  //  it: "./dictionary/phonitalia.json",
    en: "./phonenglish.json",
    de: "./phongerman.json",
    fr: "./phonfrench.json"
};

// eSpeak voices
const voices = {
    it: "it",
    en: "en",
    de: "de",
    fr: "fr"
};

export function setLanguage(lang){
    currentLanguage = lang;
}

export function getDictionaryFile(){
    return dictionaries[currentLanguage];
}

export function getVoice(){
    return voices[currentLanguage];
}
