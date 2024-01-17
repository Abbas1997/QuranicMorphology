let nouns = [
    ['PCPL', ' participle'],
    ['VN', ' verbal noun']
]

let mood = [
    ['MOOD:SUBJ', ' subjunctive mood'],
    ['MOOD:JUS', ' jussive mood']
]

function getMood(str) {
    let ret = ''
    str.forEach(elem => {
        let check = elem
        mood.forEach(elem1 => {
            if(elem1[0] == check) {
                ret = elem1[1]
            }
        })
    })
    return ret
}

function getNoun(str) {
    let ret = ''
    str.forEach(elem => {
        let check = elem
        nouns.forEach(elem1 => {
            if(elem1[0] == check) {
                ret = elem1[1]
            }
        })
    })
    return ret
}

let voice = [
    ['ACT', ' active'],
    ['PASS', ' passive']
]
function getVoice(str) {
    let ret = ''
    str.forEach(elem => {
        let check = elem
        voice.forEach(elem1 => {
            if(elem1[0] == check) {
                ret = elem1[1]
            }
        })
    })
    return ret
}

let _case = [
    ['GEN', ' genitive'],
    ['NOM', ' nominative'],
    ['ACC', ' accusative'],
    ['IMPF', ' imperfect'],
    ['PERF', ' perfect'],
    ['IMPV', ' imperative']
]

function getCase(str) {
    let ret = ''
    str.forEach(elem => {
        let check = elem
        _case.forEach(elem1 => {
            if(elem1[0] == check) {
                ret = elem1[1]
            }
        })
    })
    return ret
}

let gender = [
    ['M', ' masculine'],
    ['MP', ' masculine plural'],
    ['F', ' feminine'],
    ['FS', ' feminine singular'],
    ['FP', ' feminine plural'],
    ['MS', ' masculine singular'],
    ['FD', ' feminine dual'],
    ['MD', ' masculine dual'],
    ['P', ' plural']
]

function getGender(str) {
    let ret = ''
    str.forEach(elem => {
        let check = elem
        gender.forEach(elem1 => {
            if(elem1[0] == check) {
                ret = elem1[1]
            }
        })
    })
    return ret
}

function abr(str) {
    if (str == 'l') {
        return 'lām'
    }
    if(str == 'ka') {
        return str
    }
    if (str == 'bi') {
        return 'bi'
    }
    if(str == 'w') {
        return 'wa (oath)'
    }
    if(str == 'ta') {
        return 'ta (oath)'
    }
}

let forms = [
    ['(X)', ' (form X)'],
    ['(IV)', ' (form IV)'],
    ['(VIII)', ' (form VIII)'],
    ['(III)', ' (form III)'],
    ['(II)', ' (form II)'],
    ['(VI)', ' (form VI)'],
    ['(V)', ' (form V)'],
    ['(VII)', ' (form VII)'],
    ['(XII)', ' (form XII)'],
    ['(IX)', ' (form IX)'],
    ['(XI)', ' (form XI)']
]

function getForm(str) {
    let ret = ''
    str.forEach(elem => {
        let check = elem
        forms.forEach(elem1 => {
            if(elem1[0] == check) {
                ret = elem1[1]
            }
        })
    })
    return ret
}

let pron = [
    ['2MS', ' 2nd person masculine singular'],
    ['1P', ' 1st person plural'],
    ['3MP', ' 3rd person masculine plural'],
    ['3MS', ' 3rd person masculine singular'],
    ['2MP', ' 2nd person masculine plural'],
    ['3FS', ' 3rd person feminine singular'],
    ['3FP', ' 3rd person feminine plural'],
    ['1S', ' 1st person singular'],
    ['2D', ' 2nd person dual'],
    ['3D', ' 3rd person dual'],
    ['2MD', ' 2nd person masculine dual'],
    ['3FD', ' 3rd person feminine dual'],
    ['2FS', ' 3rd person feminine singular'],
    ['2FP', ' 2nd person feminine plural'],
    ['2FD', ' 2nd person feminine dual']
]

function pronoun(str) {
    let ret = ''
    str.forEach(elem => {
        let check = elem
        if(elem.split(':')[0] == 'PRON') {
            check = elem.split(':')[1]
        }
        pron.forEach(elem1 => {
            if(elem1[0] == check) {
                ret = elem1[1]
            }
        })
    })
    return ret
}

const getDescription = (tag, desc) => {

    if(tag == 'N') {
        let tags = desc.split('|')
        let str = ''
        str += pronoun(tags)
        str += getCase(tags)
        str +=  getGender(tags)
        if(tags.includes('INDEF')) {
            str += ' indefinite'
        }
        str += getForm(tags)
        str += getVoice(tags)
        let n = getNoun(tags)
        if (n != '') {
            str += n + '\n'
        } else {
            str += ' noun\n'
        }
        return str
    }

    if ( tag == 'INL') {
        let str ='Quranic Initials \n'

        return str
    }

    
    if ( tag == 'REM') {
        let str =''
        let tags = desc.split('|')
        if(tags[0]== 'PREFIX') {
            str = 'Prefixed resumption particle \n'
        }
        else {
            str = 'Resumption particle \n'
        }
        return str
    }
    
    
    if ( tag == 'ACC') {

        
        let str ='Accusative particle \n'

        return str
    }
    
    
    if ( tag == 'EQ') {
        let str ='prefixed equalization particle \n'

        return str
    }
    
    
    if ( tag == 'CIRC') {
        let str ='prefixed circumstantial particle \n'

        return str
    }
    
    
    if ( tag == 'RES') {
        let str ='restriction particle \n'

        return str
    }
    
    
    if ( tag == 'PRO') {
        let str ='prohibition particle \n'

        return str
    }
    
    
    if ( tag == 'PREV') {

        let tags = desc.split('|')

        let str =' preventive particle mā\n';
        return str
    }
    
    
    if ( tag == 'INC') {
        let str ='inceptive particle \n'

        return str
    }
    
    
    if ( tag == 'AMD') {
        let str ='amendment particle \n'

        return str
    }
    
    
    if ( tag == 'SUB') {
        let str ='subordinating conjunction \n'

        return str
    }
    
    
    if ( tag == 'EMPH') {

        let tags = desc.split('|')
        let str =''
        function getEmph(emph) {
            if (emph == 'n') {
                return 'nūn'
            }
            if (emph == 'l') {
                return 'lām'
            }
        }
        if (tags[0] == 'PREFIX') {
            str = 'emphatic prefix ' +
                    getEmph(tags[tags.length-1][0]) + '\n'
        }
        else {
            str = 'emphatic suffix ' +
                    getEmph(tags[tags.length-1].split(':')[0].replace('+', '')) + '\n'
        }
        return str
    }
    
    
    if ( tag == 'VOC') {
        let tags = desc.split('|')
        let str =''

        if (tags[0] == 'PREFIX') {
            str = 'vocative prefix ' +
                    tags[tags.length-1].replace('+', '') + '\n'
        }
        else {
            str = 'vocative suffix \n'
        }
        
        return str
    }
    
    
    if ( tag == 'RSLT') {
        let str ='prefixed result particle \n'

        return str
    }
    
    
    if ( tag == 'EXL') {
        let str ='explanation particle \n'

        return str
    }
    
    
    if ( tag == 'EXP') {
        let str ='exceptive particle \n'

        return str
    }
    
    
    if ( tag == 'CAUS') {
        let str ='prefixed particle of cause \n'

        return str
    }
    
    
    if ( tag == 'CERT') {
        let str ='particle of certainty \n'

        return str
    }
    
    
    if ( tag == 'PRP') {
        let str ='prefixed particle of purpose lām \n'

        return str
    }
    
    
    if ( tag == 'ANS') {
        let str ='answer particle \n'

        return str
    }
    
    
    if ( tag == 'RET') {
        let str ='retraction particle \n'

        return str
    }
    
    
    if ( tag == 'P') {
        let str =''
        let tags = desc.split('|')
        if(tags.length == 3) {
            str = 'preposition \n'
        }
        if(tags.length == 2) {
            let abrInput
            if(tags[1].split(':').length == 2) {
                abrInput = tags[1].split(':')[0]
            }
            else {
                abrInput = tags[1].replace('+', '')
            }
            if (tags[0] == 'PREFIX') {
                
                str = 'prefixed preposition ' + 
                    abr(abrInput) + 
                    '\n'
            }
            if (tags[0] == 'SUFFIX') {
                str = 'suffixed preposition '+
                    abr(abrInput) + 
                    '\n'
            }
        }

        return str
    }
    
    
    if ( tag == 'EXH') {
        let str ='exhortation particle \n'

        return str
    }
    
    
    if ( tag == 'INT') {
        let str ='particle of interpretation \n'

        return str
    }
    
    
    if ( tag == 'IMPV') {
        let str ='prefixed imperative particle lām \n'

        return str
    }
    
    
    if ( tag == 'COM') {
        let str ='prefixed comitative particle \n'

        return str
    }
    
    
    if ( tag == 'SUR') {
        let str ='surprise particle \n'

        return str
    }
    
    
    if ( tag == 'AVR') {
        let str ='aversion particle \n'

        return str
    }
    
    
    if ( tag == 'PRON') {
        let tags = desc.split('|')
        let str = pronoun(tags) + ' pronoun \n'
        return str
    }
    
    
    if ( tag == 'IMPN') {
        let str ='imperative verbal noun \n'

        return str
    }
    
    
    if ( tag == 'FUT') {

        let str =''
        let tags = desc.split('|')
        if(tags.length == 2) {
            str = 'prefixed future particle \n'
        }
        else {
            str = 'future particle \n'
        }
        return str
    }
    
    
    if ( tag == 'COND') {
        let str =''
        let tags = desc.split('|')
        if (tags.length == 3) {
            str = 'conditional particle \n'
        }
        else {
            str = getGender(tags) + ' conditional noun \n'
        }

        return str
    }
    
    
    if ( tag == 'LOC') {

        let tags = desc.split('|')
        let str = ''
        str += getCase(tags)
        str +=  getGender(tags)
        str += getVoice(tags)
        let n = getNoun(tags)
        if (n != '') {
            str += n + '\n'
        } else {
            str += ' location adverb\n'
        }

        
        return str
    }
    
    
    if ( tag == 'INTG') {
        let str =''
        let tags = desc.split('|')
        if(tags.length == 2 ) {
            str = ' prefixed interrogative alif \n'
        } else {
            str += getCase(tags) + ' interrogative noun\n'
        }
        return str
    }
    
    
    if ( tag == 'SUP') {
        let str =''
        let tags = desc.split('|')
        if(tags.length == 2 ) {
            str = ' prefixed supplemental particle \n'
        } else {
            str += ' supplemental particle\n'
        }
        return str
    }
    
    
    if ( tag == 'T') {
        let tags = desc.split('|')
        let str = ''
        str += getCase(tags)
        str +=  getGender(tags)
        if(tags.includes('INDEF')) {
            str += ' indefinite'
        }
        str += ' time adverb\n'     
        return str
    }
    
    
    if ( tag == 'DEM') {
        let tags = desc.split('|')
        let str =  getGender(tags) + ' demonstrative pronoun \n'
        return str
    }
    
    
    if ( tag == 'NEG') {
        let str =' negative particle \n'

        return str
    }
    
    
    if ( tag == 'REL') {
        let tags = desc.split('|')
        let str =  getGender(tags) + ' relative pronoun \n'

        return str
    }
    
    
    if ( tag == 'CONJ') {
        let tags = desc.split('|')
        if(tags.length == 3) {
            str = ' coordinating conjunction \n'
        }
        if(desc == 'PREFIX|f:CONJ+') {
            str = ' prefixed conjunction fa (and) \n'
        }
        if (desc == 'PREFIX|w:CONJ+') {
            str = ' prefixed conjunction wa (and) \n'
        }

        return str
    }
    
    
    if ( tag == 'V') {
        let str =''
        let tags = desc.split('|')
        str += pronoun(tags)
        str += getVoice(tags)
        str += getForm(tags)
        str += getCase(tags)
        let m = getMood(tags)
        if(m != '') {
            str += ' verb, ' + m + '\n'
        }
        else {
            str += ' verb\n'
        }

        return str
    }
    
    
    if ( tag == 'ADJ') {
        let tags = desc.split('|')
        let str = ''
        str += pronoun(tags)
        str += getCase(tags)
        str +=  getGender(tags)
        if(tags.includes('INDEF')) {
            str += ' indefinite'
        }
        str += getForm(tags)
        str += getVoice(tags)
        let n = getNoun(tags)
        if (n != '') {
            str += n + '\n'
        } else {
            str += ' adjective\n'
        }
        return str
    }
    
    if(tag == 'PN') {
        let tags = desc.split('|')
        let str = ''
        str += pronoun(tags)
        str += getCase(tags)
        str +=  getGender(tags)
        if(tags.includes('INDEF')) {
            str += ' indefinite'
        }
        str += getForm(tags)
        str += getVoice(tags)
        let n = getNoun(tags)
        if (n != '') {
            str += n + '\n'
        } else {
            str += ' proper noun\n'
        }
        return str
    }
}


export default getDescription