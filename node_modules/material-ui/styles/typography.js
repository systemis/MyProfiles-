'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createTypography;
//  weak

var defaultConstants = {
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500
};

function createTypography(palette) {
  var constants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultConstants;

  return _extends({}, constants, {
    display4: {
      fontSize: 112,
      fontWeight: constants.fontWeightLight,
      fontFamily: constants.fontFamily,
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: palette.text.secondary
    },
    display3: {
      fontSize: 56,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: palette.text.secondary
    },
    display2: {
      fontSize: 45,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '48px',
      color: palette.text.secondary
    },
    display1: {
      fontSize: 34,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '40px',
      color: palette.text.secondary
    },
    headline: {
      fontSize: 24,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '32px',
      color: palette.text.primary
    },
    title: {
      fontSize: 21,
      fontWeight: constants.fontWeightMedium,
      fontFamily: constants.fontFamily,
      lineHeight: 1,
      color: palette.text.primary
    },
    subheading: {
      fontSize: 16,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '24px',
      color: palette.text.primary
    },
    body2: {
      fontSize: 14,
      fontWeight: constants.fontWeightMedium,
      fontFamily: constants.fontFamily,
      lineHeight: '24px',
      color: palette.text.primary
    },
    body1: {
      fontSize: 14,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '20px',
      color: palette.text.primary
    },
    caption: {
      fontSize: 12,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: 1,
      color: palette.text.secondary
    },
    materialIcon: {
      fontFamily: 'Material Icons',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 24,
      display: 'inline-block',
      lineHeight: 1,
      textTransform: 'none'
    }
  });
}