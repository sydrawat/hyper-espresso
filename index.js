// standard ANSI Colors
const black = 'rgb(53,53,53)';
const red = 'rgb(184,83,81)';
const green = 'rgb(172,193,103)';
const yellow = 'rgb(240,197,114)';
const blue = 'rgb(122,151,185)';
const magenta = 'rgb(194,150,214)';
const cyan = 'rgb(226,243,255)';
const white = 'rgb(237,238,235)';
const lightBlack = 'rgb(53,53,53)';
const lightRed = 'rgb(184,83,81)';
const lightGreen = 'rgb(172,193,103)';
const lightYellow = 'rgb(240,197,114)';
const lightBlue = 'rgb(122,151,185)';
const lightMagenta = 'rgb(194,150,214)';
const lightCyan = 'rgb(226,243,255)';
const lightWhite = 'rgb(237,238,235)';

const accentColor = blue;

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: accentColor,
    cursorAccentColor: lightWhite,
    foregroundColor: white,
    backgroundColor: black,
    borderColor: 'rgba(255,255,255, 0.2)',
    selectionColor: 'rgba(255,255,255, 0.2)',
    css: `
    ${config.css || ''}
    .tab_tab {
      border: 0;
      background-color: rgba(255, 255, 255, 0.04);
    }
    .tab_text {
      background-color: rgba(255, 255, 255, 0.04);
    }
    .tab_active {
      background-color: ${black};
    }
    .tab_textActive {
      background-color: ${black};
      border-top: 2px solid ${accentColor} !important;
    }
  `,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    }
  });
