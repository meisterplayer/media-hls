import Xml from './Xml';

class Plist {
    static parse(data) {
        const parsedData = Xml.parse(data);
        const dict = parsedData.getElementsByTagName('dict')[0];

        const children = Xml.getChildren(dict);
        let prevKey = '';
        const result = {};

        for (let i = 0; i < children.length; i += 1) {
            const tag = children[i];

            if (tag.tagName === 'key') {
                prevKey = tag.textContent;
            } else {
                result[prevKey] = tag.textContent;
            }
        }
        return result;
    }
}

export default Plist;
