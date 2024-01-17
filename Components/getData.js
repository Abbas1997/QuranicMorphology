import corpus from './readcorpus';
import word_translation from './wordtranslations';
import { MainList } from './MainList';
import NextPrev from './NextPrev';
import SelectionMenu from './SelectionMenu';

function checkVerse(tag, chapter, verse) {
    let CVno = tag.replace('(', '').replace(')', '').split(':')
    //console.log(CVno)
    let result = CVno[0] == chapter && CVno[1] == verse
    //console.log(result)
    return result
}

function checkWord(tag, chapter, verse, noWord) {
    let CVWno = tag.replace('(', '').replace(')', '').split(':')
    let result = CVWno[0] == chapter && CVWno[1] == verse && CVWno[2] == noWord
    return result
}

function getDataLight(cvno) {
    let chapter = cvno[0]
    let verse = cvno[1]
    let word = []
    let str = '(' + chapter + ':' + verse + ':1:1' + ')'

    let index = corpus.findIndex((elem) => elem[0] === str)

    if (index == undefined || index == -1) {
        return chapter + ',' + verse
    }
    else {
        return 1
    }
}

const getData = (sRef, cvno, set_cvno) => {

    let chapter = cvno[0]
    let verse = cvno[1]
    let word = []
    let str = '(' + chapter + ':' + verse + ':1:1' + ')'

    let index = corpus.findIndex((elem) => elem[0] === str)
    let index2 = index

    while (checkVerse(corpus[index][0], chapter, verse) && index < 128219) {

        let data = []
        let data1 = []
        let data2 = []
        let data3 = []
        let line = corpus[index]

        let strt = line[0].replace('(', '').replace(')', '')
        let trans = word_translation.find(elem => elem[0] == strt)
        trans = trans[1]
        

        let cWord = strt.split(':')[2]

        let cIndex = index + 1
        data.push(line[0])
        data.push(trans)
        data1.push(line[1])
        data2.push(line[2])
        data3.push(line[3])

        while (checkWord(corpus[cIndex][0], chapter, verse, cWord) && index < 128219) {

            let line = corpus[cIndex]
            data1.push(line[1])
            data2.push(line[2])
            data3.push(line[3])
            cIndex++
            index++

            if (corpus[cIndex] === undefined) {
                //console.log('this index is undefined' + cIndex + 'breaking loop')
                break
            }

        }
        data.push(data1)
        data.push(data2)
        data.push(data3)
        data.push(false)

        word.push(data)

        index++
        if (corpus[cIndex] === undefined) {
            //console.log('this index is undefined' + cIndex + 'breaking loop')
            break
        }

    }

    let components = [] 
    let prev = false
    if (corpus[index2 - 1]) {
        prev = corpus[index2 - 1][0]
    }

    let next = false
    if (corpus[index]) {
        next = corpus[index][0]
    }

    //width={width}
    components.push(<SelectionMenu key={'u1'} cvno={cvno}  set_cvno={set_cvno} Next={next} Prev={prev} scroller={sRef}/>)
    word.forEach((elem, index) => components.push(<MainList key={index} data={elem} />))

    components.push(<NextPrev
        key={'unique key'}
        prev={prev}
        next={next}
        scroller={sRef}
        set_cvno={set_cvno}
    />)
    return components
}

export {getData}
