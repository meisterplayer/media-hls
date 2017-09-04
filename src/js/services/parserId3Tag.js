/**
 * Follows the http://id3.org/id3v2.4.0-structure specification
 * @author Franklin Waller <fr.l.waller@gmail.com>
 */

import Id3Tag from '../models/Id3Tag';

/**
 * Our magic number, this represents 'ID3'.
 */
const MAGIC_NUMBER = new Uint8Array([
    0x49,
    0x44,
    0x33,
]);

/**
 * The size of our ID3 header.
 */
const HEADER_BYTE_SIZE = 10;

/**
 * The size of the ID3 frame id.
 * This is always 4 bytes and can look like this TTTX
 */
const FRAME_ID_SIZE = 4;

/**
 * The byte size of the "size" of the frame.
 */
const FRAME_SIZE_BYTES = 4;


/**
 * The frame flag size.
 */
const FRAME_FLAG_SIZE = 2;

/**
 * Empty byte indication
 */
const EMPTY_BYTE = 0xFF;

/**
 * Validates if this is a real ID3 tag.
 *
 * @param {Uint8Array} magicNumber
 * @returns {boolean} isValid
 */
function validateId3(magicNumber) {
    let isValid = true;

    MAGIC_NUMBER.forEach((byte, i) => {
        if (byte !== magicNumber[i]) {
            isValid = false;
        }
    });

    return isValid;
}

/**
 * Checks if an frameId is empty.
 *
 * @param {Array} frameId
 * @returns {boolean} empty
 */
function isEmpty(frameId) {
    // The frameId cannot contain a single empty byte
    // So we can be sure it's empty.
    return !!frameId.find(byte => byte === EMPTY_BYTE);
}

/**
 * Parses Id3 tags.
 *
 * @export
 * @param {Uint8Array} data
 * @throws {Error}
 * @returns {Array<Id3Tag>}
 */
export default function parseId3Tag(data) {
    const magicNumber = data.slice(0, 3);

    if (!validateId3(magicNumber)) {
        throw new Error('Invalid ID3 tag');
    }

    const buffer = Array.from(data);

    // We don't really care about the header for now
    // Let's just skip the header and get right into the good stuff.
    const afterHeaderBytes = buffer.splice(0, HEADER_BYTE_SIZE);
    const frames = [];

    do {
        const frameId = buffer.splice(0, FRAME_ID_SIZE);
        const frameSize = buffer.splice(0, FRAME_SIZE_BYTES).reduce((sum, value) => sum + value);
        const frameFlags = buffer.splice(0, FRAME_FLAG_SIZE);
        const frameBody = buffer.splice(0, frameSize);

        if (!isEmpty(frameId)) {
            frames.push({
                key: String.fromCharCode(...frameId),
                value: new Uint8Array(frameBody).buffer,
                flags: frameFlags,
            });
        }
    } while (buffer.length > 0);

    return frames.map(frame => new Id3Tag(frame.key, frame.value));
}
