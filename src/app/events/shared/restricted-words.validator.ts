import { FormControl } from '@angular/forms'

export function restrictedWords(words){
    return (control: FormControl): {[key: string]: any} => {
        if(!words) return null
        
        var invalidWords = words.map(w => control.value.includes(w) ? w : null)
        .filter(w => w != null)
        //map function is looping over the key words and checking the controlsd value 
        //to see if it includes that word and then returning that word ( ? w part)
        //or null if its not found

        return invalidWords && invalidWords.length > 0
            ? {'restrictedWords': invalidWords.join(', ')}
            : null
    }
}