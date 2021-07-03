import { create } from 'jss'
import preset from 'jss-preset-default'
const jss = create(preset())

const sheet = jss.createStyleSheet({ primary: {
    width: '100%',
    height: '100%'
}}, { generateId: () => 'primary' }).toString()
console.log(sheet)