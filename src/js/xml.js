class Xml {
    static parse(content) {
        let parseXml = () => {};

        if (typeof window.DOMParser !== 'undefined') {
            parseXml = function (xmlStr) {
                return (new window.DOMParser()).parseFromString(xmlStr, 'text/xml');
            };
        } else if (typeof window.ActiveXObject !== 'undefined' && new window.ActiveXObject('Microsoft.XMLDOM')){
            parseXml = function (xmlStr) {
                const xmlDoc = new window.ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = 'false';
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else throw new Error('No XML parser found');

        return parseXml(content);
    }

    static getChildren(element) {
        if (element.children === undefined) {
            const childNodes = element.childNodes;
            const children = [];
            for (let i = 1; i < childNodes.length; i += 2) { // take every second element
                children.push(childNodes[i]);
            }
            return children;
        }
        return element.children;
    }
}

export default Xml;
