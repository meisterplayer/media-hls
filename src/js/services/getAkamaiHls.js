import loadScript from '@npm-wearetriple/load-script';

export default async function getAkamaiHls(hlsJsConfig, meisterConfig) {
    const scriptUrl = meisterConfig.akamaiScriptUrl || 'https://media-acceleration-host.akamaized.net/sdk/js/stable/hlsjs.min.js';
    await loadScript('akamai-hls', scriptUrl);
    const maConfig = Object.assign({}, meisterConfig.akamaiConfig);
    const maWrapper = new window.MediaAccelerationHlsJsWrapper(maConfig, hlsJsConfig);

    return maWrapper.getPlayer();
}
