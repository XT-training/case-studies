/* Based on the template in Web Starter Kit :
https://github.com/google/web-starter-kit/blob/master/app/index.html
*/
import chromeFavicon from '../images/site/chrome-ninja192-precomposed.png';
import appleFavicon from '../images/site/apple-ninja152-precomposed.png';
import msFavicon from '../images/site/ms-ninja144-precomposed.png';
import favicon from '../images/site/favicon.png';

const metaAssets = () => [
    { charset: 'utf-8' },
    { name: 'description', content: 'Theater ' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    // Add to homescreen for Safari on IOS
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'Cinema Experience' },
    // { name: 'msapplication-TileImage', content: msFavicon },
    { name: 'msapplication-TileColor', content: '#3372DF' }
];

const linkAssets = () => {
    const links = [
        // { rel: 'icon', href: favicon },
        // { rel: 'icon', sizes: '192x192', href: chromeFavicon },
        // { rel: 'apple-touch-icon', sizes: '152x152', href: appleFavicon }
    ];

    return links;
};

export const title = 'Cinema Experience';
export const meta = metaAssets();
export const link = linkAssets();
