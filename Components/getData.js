import corpus from './readcorpus';
import word_translation from './wordtranslations';
import { MainList } from './MainList';
import NextPrev from './NextPrev';
import { Text, View } from 'react-native';
import IndexTable from './IndexTable'
import indice from './indice';
import license from './license';

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

const getData = (sRef, cvno, set_cvno) => {
    let info = cvno[2]
    if (info == 1) {
        return (
            <View>
                <Text style={{ margin: 10, color: 'black' }}>
                    This app is based on the dataset of grammatically annotated Quranic Verses, downloaded from corpus.quran.com.
                    {'\n'} {'\n'}
                    The word by word english translation Data is taken from data-quran repository which is
                    licensed under CC BY-NC-ND 4.0{'\n'}{'\n'}({`https://creativecommons.org/licenses/by-nc-nd/4.0/`}){'\n'}{'\n'}
                    and collected by Hablullah team from various sources, e.g. Tanzil, QuranEnc, etc.{'\n'}{'\n'}
                    Link: {`https://github.com/hablullah/data-quran`}{'\n'}{'\n'}
                    The font for the Arabic text is Scheherazade New {'\n'}
                    {'\n'}
                    Link: {`https://software.sil.org/scheherazade/download/`} {'\n'}{'\n'}
                </Text>
                <Text style={{ margin: 5, fontWeight: 'bold', color: 'black' }}> CORPUS.QURAN.COM License:</Text>
                <Text style={{ margin: 10, color: 'black' }}>{license}</Text>
            </View>)
    }
    let chapter = cvno[0]
    let verse = cvno[1]
    let word = []
    let str = '(' + chapter + ':' + verse + ':1:1' + ')'

    let index = corpus.findIndex((elem) => elem[0] === str)
    let index2 = index

    if (index == undefined || index == -1) {
        if (chapter > 114) {
            return <Text style={{ margin: 5, fontSize: 18, color: 'black' }}>There are only 114 chapters in the Holy Quran.</Text>
        }
        let v_no = indice.find(elem => elem[0] == chapter)
        if (v_no && verse > v_no[1]) {
            return <Text style={{ margin: 5, fontSize: 18, color: 'black' }}>
                There are only {v_no[1]} verses in in chapter {chapter}
            </Text>
        }
        return <Text style={{ margin: 5, fontSize: 22, color: 'black' }}>
            Invalid input{'\n'}
            Please only enter numbers{'\n'}
            <Text style={{ fontWeight: 'bold' }}>{'\n'}Chapter{'\t\t\t\t'}Verse</Text>
            <IndexTable />
        </Text>
    }

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
                console.log('this index is undefined' + cIndex + 'breaking loop')
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
            console.log('this index is undefined' + cIndex + 'breaking loop')
            break
        }

    }

    let components = []
    word.forEach((elem, index) => components.push(<MainList key={index} data={elem} />))

    let prev
    if (corpus[index2 - 1]) {
        prev = corpus[index2 - 1][0]
    }

    let next
    if (corpus[index]) {
        next = corpus[index][0]
    }

    components.push(<NextPrev
        key={'unique key'}
        prev={prev}
        next={next}
        scroller={sRef}
        set_cvno={set_cvno}
    />)
    return components
}

export default getData
