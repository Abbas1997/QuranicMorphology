var b_letters = [
    'b', 'i', 's', 'o', 'm', '{', 'l', '~', 'a', 'h', 'r', 'H',
    '`', 'n', 'y', 'd', 'u', 'E', 'k', 'w', '<', 'A', 't', 'S',
    'T', 'q', '*', '>', 'g', 'D', '^', 'f', 'F', 'Y', '&', 'p',
    'z', '\'', 'x', '@', '}', 'N', '$', 'Z', '[', 'j', 'v', ',',
    'K', '.', '_', '#', ']', ':', '"', '-', '+', '!', '%', ';'
]

var unicodes = [
    '\u0628', '\u0650', '\u0635', '\u0652', '\u0645', '\u0671', '\u0644',
    '\u0651', '\u064E', '\u0647', '\u0631', '\u062D', '\u0670', '\u0646',
    '\u064A', '\u062F', '\u064F', '\u0639', '\u0643', '\u0648', '\u0625', 
    '\u0627', '\u062A', '\u0635', '\u0637', '\u0642', '\u0630', '\u0623',
    '\u063A', '\u0636', '\u0653', '\u0641', '\u064B', '\u0649', '\u0624',
    '\u0629', '\u0632', '\u0621', '\u062E', '\u06DF', '\u0626', '\u064C',
    '\u0634', '\u0638', '\u06E2', '\u062C', '\u062B', '\u06E5', '\u064D',
    '\u06E6', '\u0640', '\u0654', '\u06ED', '\u06DC', '\u06E0', '\u06EA',
    '\u06EB', '\u06E8', '\u06EC', '\u06E3', 
]

var unicodes1 = [
    0x0628, 0x0650, 0x0633, 0x0652, 0x0645, 0x0671, 0x0644,
    0x0651, 0x064E, 0x0647, 0x0631, 0x062D, 0x0670, 0x0646,
    0x064A, 0x062F, 0x064F, 0x0639, 0x0643, 0x0648, 0x0625, 
    0x0627, 0x062A, 0x0635, 0x0637, 0x0642, 0x0630, 0x0623,
    0x063A, 0x0636, 0x0653, 0x0641, 0x064B, 0x0649, 0x0624,
    0x0629, 0x0632, 0x0621, 0x062E, 0x06DF, 0x0626, 0x064C,
    0x0634, 0x0638, 0x06E2, 0x062C, 0x062B, 0x06E5, 0x064D,
    0x06E6, 0x0640, 0x0654, 0x06ED, 0x06DC, 0x06E0, 0x06EA,
    0x06EB, 0x06E8, 0x06EC, 0x06E3, 
]


const converter = (string) => {
    //let newString = string
    let arrayc = []
    for (let i = 0; i < string.length; i++) {
        if(b_letters.indexOf(string[i]) != -1) {
            arrayc.push(unicodes1[b_letters.indexOf(string[i])])                                                                                                                                   
        }
        //else {console.log('no match for: ' + string[i])}
    }
    //console.log(string + ': ' + String.fromCharCode(...arrayc))
    return String.fromCharCode(...arrayc)
}


//console.log(b_letters.length)
//console.log(unicodes.length)

//var string = '>anoEamo'

/*const converter =function converter(string) {
    let newString = string
    for (let i = 0; i < string.length; i++) {
        if(b_letters.indexOf(string[i])) {
            //console.log(b_letters.indexOf(string[i]))
            newString = newString.replace(string[i], unicodes[b_letters.indexOf(string[i])])
            console.log(newString + ' ' +
                 b_letters.indexOf(string[i]) + ' ' +
                 b_letters[b_letters.indexOf(string[i])] + ' ' +
                 unicodes[b_letters.indexOf(string[i])])
        }
        else {
            console.log('no match')
        }
    }
    return newString
}*/


export default converter


