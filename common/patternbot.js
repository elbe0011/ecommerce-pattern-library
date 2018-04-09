(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {};

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const correctHrefPaths = function (html) {
    const hrefSearch = /href\s*=\s*"\.\.\/\.\.\//g;
    const srcSearch = /src\s*=\s*"\.\.\/\.\.\//g;
    const urlSearch = /url\((["']*)\.\.\/\.\.\//g;

    return html
      .replace(hrefSearch, 'href="../')
      .replace(srcSearch, 'src="../')
      .replace(urlSearch, 'url($1../')
    ;
  };

  const buildAccurateSelectorFromElem = function (elem) {
    let theSelector = elem.tagName.toLowerCase();

    if (elem.id) theSelector += `#${elem.id}`;
    if (elem.getAttribute('role')) theSelector += `[role="${elem.getAttribute('role')}"]`;
    if (elem.classList.length > 0) theSelector += `.${[].join.call(elem.classList, '.')}`;

    theSelector += ':first-of-type';

    return theSelector;
  };

  /**
   * This is an ugly mess: Blink does not properly render SVGs when using DOMParser alone.
   * But, I need DOMParser to determine the correct element to extract.
   *
   * I only want to get the first element within the `<body>` tag of the loaded document.
   * This dumps the whole, messy, HTML document into a temporary `<div>`,
   * then uses the DOMParser version, of the same element, to create an accurate selector,
   * then finds that single element in the temporary `<div>` using the selector and returns it.
   */
  const htmlStringToElem = function (html) {
    let theSelector = '';
    const tmpDoc = document.createElement('div');
    const finalTmpDoc = document.createElement('div');
    const doc = (new DOMParser()).parseFromString(html, 'text/html');

    tmpDoc.innerHTML = html;
    theSelector = buildAccurateSelectorFromElem(doc.body.firstElementChild);
    finalTmpDoc.appendChild(tmpDoc.querySelector(theSelector));

    return finalTmpDoc;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(correctHrefPaths(patternDetails.html));
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    let allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot location pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library
 * @version 1523254128756
 */
const patternManifest_1523254128756 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility",
      "print"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility;print",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 4,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 4,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 4,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 4,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,4,0,0,0;s,4,25,0,0;m,4,38,1,1;l,4,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.067
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.125
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.125
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.125
      }
    ],
    "typografierUrl": "0,100,1.3,1.067,0;38,110,1.4,1.125,1;60,120,1.5,1.125,1;90,130,1.5,1.125,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#1f333a",
            "hex": "#1f333a",
            "rgba": "rgba(31, 51, 58, 1)"
          },
          {
            "name": "--color-primary-light",
            "namePretty": "Primary light",
            "raw": "#91b6bc",
            "hex": "#91b6bc",
            "rgba": "rgba(145, 182, 188, 1)"
          }
        ],
        "secondary": [
          {
            "name": "--color-secondary",
            "namePretty": "Secondary",
            "raw": "#94cc84",
            "hex": "#94cc84",
            "rgba": "rgba(148, 204, 132, 1)"
          }
        ],
        "neutral": [
          {
            "name": "--color-neutral-beige",
            "namePretty": "Neutral beige",
            "raw": "#e2e2e2",
            "hex": "#e2e2e2",
            "rgba": "rgba(226, 226, 226, 1)"
          }
        ],
        "accent": [
          {
            "name": "--color-accent-black",
            "namePretty": "Accent black",
            "raw": "black",
            "hex": "#000000",
            "rgba": "rgba(0, 0, 0, 1)"
          },
          {
            "name": "--color-accent-gold",
            "namePretty": "Accent gold",
            "raw": "#c4a57e",
            "hex": "#c4a57e",
            "rgba": "rgba(196, 165, 126, 1)"
          }
        ]
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Lato",
          "raw": "\"Lato\", arial, sans-serif",
          "weights": {
            "300": {
              "weight": "300",
              "hasNormal": true,
              "hasItalic": true
            },
            "900": {
              "weight": "900",
              "hasNormal": true,
              "hasItalic": true
            },
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": true
            },
            "bold": {
              "weight": "bold",
              "hasNormal": true,
              "hasItalic": true
            }
          }
        },
        "secondary": {
          "name": "--font-secondary",
          "namePretty": "Pt Serif",
          "raw": "\"PT serif\", serif",
          "weights": {
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": true
            },
            "bold": {
              "weight": "bold",
              "hasNormal": true,
              "hasItalic": true
            }
          }
        },
        "accent": []
      },
      "coloursRaw": {
        "--color-primary": "#1f333a",
        "--color-primary-light": "#91b6bc",
        "--color-secondary": "#94cc84",
        "--color-accent-black": "black",
        "--color-accent-gold": "#c4a57e",
        "--color-neutral-beige": "#e2e2e2"
      },
      "fontsRaw": {
        "--font-primary": "\"Lato\", arial, sans-serif",
        "--font-secondary": "\"PT serif\", serif"
      }
    },
    "readme": {
      "attributes": {
        "name": "d. n. a.",
        "fontUrl": "https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i|PT+Serif:400,400i,700,700i",
        "backgroundColour": "#fff",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      },
      "bodyRaw": "",
      "bodyBasic": ""
    },
    "icons": [
      "icon-cart",
      "icon-down",
      "icon-facebook",
      "icon-heart",
      "icon-insta",
      "icon-dna",
      "icon-left",
      "icon-man",
      "icon-paw",
      "icon-twitter",
      "icon-up",
      "icon-right",
      "icon-cart",
      "icon-heart",
      "icon-facebook",
      "icon-insta",
      "icon-dna",
      "icon-twitter",
      "icon-paw",
      "icon-man"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/common/grid.css",
      "typografier": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/common/type.css",
      "modulifier": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/common/modules.css",
      "theme": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/images/logo.svg",
      "size64": false,
      "size32": false,
      "size16": false,
      "sizeLargeLocal": "logo.svg"
    },
    "patterns": [
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/banners",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/buttons",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/footer",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/header",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/parallax",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/sections",
      "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/side-nav"
    ],
    "pages": [
      {
        "name": "home.html",
        "namePretty": "Home",
        "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/pages/home.html"
      }
    ]
  },
  "userPatterns": [
    {
      "name": "banners",
      "namePretty": "Banners",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/banners",
      "html": [
        {
          "name": "image-banner",
          "namePretty": "Image banner",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/banners/image-banner.html",
          "localPath": "patterns/banners/image-banner.html"
        },
        {
          "name": "straight-banner",
          "namePretty": "Straight banner",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/banners/straight-banner.html",
          "localPath": "patterns/banners/straight-banner.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "image-banner",
          "namePretty": "Image banner",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/banners/image-banner.css",
          "localPath": "patterns/banners/image-banner.css"
        }
      ]
    },
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/buttons",
      "html": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/buttons/buttons.html",
          "localPath": "patterns/buttons/buttons.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards",
      "html": [
        {
          "name": "button-card",
          "namePretty": "Button card",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards/button-card.html",
          "localPath": "patterns/cards/button-card.html"
        },
        {
          "name": "image-card",
          "namePretty": "Image card",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards/image-card.html",
          "localPath": "patterns/cards/image-card.html"
        },
        {
          "name": "overlap-card",
          "namePretty": "Overlap card",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards/overlap-card.html",
          "localPath": "patterns/cards/overlap-card.html"
        },
        {
          "name": "product-card",
          "namePretty": "Product card",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards/product-card.html",
          "localPath": "patterns/cards/product-card.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "button-card",
          "namePretty": "Button card",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards/button-card.css",
          "localPath": "patterns/cards/button-card.css"
        },
        {
          "name": "product-card",
          "namePretty": "Product card",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/cards/product-card.css",
          "localPath": "patterns/cards/product-card.css"
        }
      ]
    },
    {
      "name": "footer",
      "namePretty": "Footer",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/footer",
      "html": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/footer/footer.html",
          "localPath": "patterns/footer/footer.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/footer/README.md",
          "localPath": "patterns/footer/README.md"
        }
      ],
      "css": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/footer/footer.css",
          "localPath": "patterns/footer/footer.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms",
      "html": [
        {
          "name": "checkbox",
          "namePretty": "Checkbox",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms/checkbox.html",
          "localPath": "patterns/forms/checkbox.html"
        },
        {
          "name": "dropdown",
          "namePretty": "Dropdown",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms/dropdown.html",
          "localPath": "patterns/forms/dropdown.html"
        },
        {
          "name": "email-input",
          "namePretty": "Email input",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms/email-input.html",
          "localPath": "patterns/forms/email-input.html"
        },
        {
          "name": "password-input",
          "namePretty": "Password input",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms/password-input.html",
          "localPath": "patterns/forms/password-input.html"
        },
        {
          "name": "radio-buttons",
          "namePretty": "Radio buttons",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms/radio-buttons.html",
          "localPath": "patterns/forms/radio-buttons.html"
        },
        {
          "name": "text-input",
          "namePretty": "Text input",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms/text-input.html",
          "localPath": "patterns/forms/text-input.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "input-field",
          "namePretty": "Input field",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/forms/input-field.css",
          "localPath": "patterns/forms/input-field.css"
        }
      ]
    },
    {
      "name": "header",
      "namePretty": "Header",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/header",
      "html": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/header/header.html",
          "localPath": "patterns/header/header.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/header/README.md",
          "localPath": "patterns/header/README.md"
        }
      ],
      "css": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/header/header.css",
          "localPath": "patterns/header/header.css"
        }
      ]
    },
    {
      "name": "parallax",
      "namePretty": "Parallax",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/parallax",
      "html": [
        {
          "name": "parallax",
          "namePretty": "Parallax",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/parallax/parallax.html",
          "localPath": "patterns/parallax/parallax.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "parallax",
          "namePretty": "Parallax",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/parallax/parallax.css",
          "localPath": "patterns/parallax/parallax.css"
        }
      ]
    },
    {
      "name": "sections",
      "namePretty": "Sections",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/sections",
      "html": [
        {
          "name": "sections",
          "namePretty": "Sections",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/sections/sections.html",
          "localPath": "patterns/sections/sections.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "sections",
          "namePretty": "Sections",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/sections/sections.css",
          "localPath": "patterns/sections/sections.css"
        }
      ]
    },
    {
      "name": "side-nav",
      "namePretty": "Side nav",
      "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/side-nav",
      "html": [
        {
          "name": "side-nav",
          "namePretty": "Side nav",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/side-nav/side-nav.html",
          "localPath": "patterns/side-nav/side-nav.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "side-nav",
          "namePretty": "Side nav",
          "path": "/Users/Glenis/OneDrive - Algonquin College/Semester 4/Web Dev 4/ecommerce-pattern-library/patterns/side-nav/side-nav.css",
          "localPath": "patterns/side-nav/side-nav.css"
        }
      ]
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1523254128756);
}());