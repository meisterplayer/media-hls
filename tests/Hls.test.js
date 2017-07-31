import '@meisterplayer/meister-mock';
import Hls from '../src/js/Hls';

const PLUGIN_NAME = 'Hls';
const SUPPORTED_TYPES = ['m3u8', 'm3u'];

describe('Hls class', () => {
    test(`pluginName should be ${PLUGIN_NAME}`, () => {
        expect(Hls.pluginName).toBe(PLUGIN_NAME);
    });

    test('pluginVersion should return a version string', () => {
        // Version should match the SemVer pattern (e.g. 2.11.9)
        expect(Hls.pluginVersion).toMatch(/\d+\.\d+\.\d+/);
    });
});

