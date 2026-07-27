// Current language
export let currentLanguage = "it";

// Dictionary files
const dictionaries = {
    it: "./dictionary/phonitalia.json",
    en: "./dictionary/phonenglish.json",
    de: "./dictionary/phongerman.json",
    fr: "./dictionary/phonfrench.json"
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
