import { createStitches } from '@stitches/react';

// breakpoints based on
// https://gs.statcounter.com/screen-resolution-stats/
const { styled, css, keyframes } = createStitches({
  media: {
    sm: '(min-width: 360px)',
    md: '(min-width: 640px)',
    lg: '(min-width: 768px)',
    xl: '(min-width: 1366px)',
    xxl: '(min-width: 1920px)',
  },
});

export {
  styled as customStyled,
  css as customCss,
  keyframes as customKeyframes,
};
