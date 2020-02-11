import axios from 'axios'

const BIBLE_URL = 'https://api.biblia.com/v1/bible/content/RVA.html'
const BIBLE_STYLE = '&style=fullyFormatted'
const KEY_BIBLE_URL = 'fd37d8f28e95d3be8cb4fbc37e15e18e'

class BibleUtils {
    static getVerse = async function(passage = 'Genesis1') {
        const url = `${BIBLE_URL}?passage=${passage}${BIBLE_STYLE}&key=${KEY_BIBLE_URL}`
        const response = await axios.get(url)
        const text = BibleUtils.changeColor(response.data)
        return text
    }

    static changeColor = text => {
        const search = 'rgb(255, 0, 0);'
        const replacement = 'plum'
        return text.split(search).join(replacement)
    }
}

export default BibleUtils
