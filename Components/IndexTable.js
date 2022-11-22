import indice from './indice'
import { Text } from 'react-native'

function getTable () {
    let table = []
    indice.forEach(elem => {
        table.push(<Text key={elem[0]}>{'\n'}{elem[0]}{'\t\t\t\t\t\t\t\t\t\t\t\t\t\t'}{elem[1]}{'\n'}</Text>)
    })
    return table
}

const IndexTable = () => {
    return getTable()
}

export default IndexTable