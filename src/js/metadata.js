import Plist from './plist';

class Metadata {
    static parse(datas) {
        const allInfo = [];

        for (let i = 0; i < datas.samples.length; i++) {
            const data = datas.samples[i];
            allInfo.push({
                data: Metadata.toChar(data.data),
                pts: datas.samples[i].pts,
            });
        }

        if (allInfo.length) {
            if (allInfo[0].data.indexOf('<?xml') === -1) {
                return null;
            }

            allInfo[0].data = allInfo[0].data.substring(allInfo[0].data.indexOf('<?xml'));
            allInfo[0].data = allInfo[0].data.replace(' & ', ' &amp; ');

            const data = {};
            data.data = Plist.parse(allInfo[0].data);

            data.title = `${data.data.artistName} - ${data.data.titleName}`;

            data.start = allInfo[0].pts;
            const duration = parseInt(data.data.duration) / 1000;
            data.end = data.start + duration;

            return data;
        }

        return allInfo;
    }

    static toChar(arr) {
        let string = '';

        for (let i = 0; i < arr.length; i++) {
            const charNum = arr[i];

            string += String.fromCharCode(charNum);
        }

        return string;
    }
}

export default Metadata;
