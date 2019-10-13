import { css } from 'lit-element';

export const googleFont = css`
    /* hebrew */
    @font-face {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Heebo'), local('Heebo-Regular'), url(https://fonts.gstatic.com/s/heebo/v5/NGS6v5_NC0k9P9H0TbFhsqMA6aw.woff2) format('woff2');
      unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
    }
    /* latin */
    @font-face {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Heebo'), local('Heebo-Regular'), url(https://fonts.gstatic.com/s/heebo/v5/NGS6v5_NC0k9P9H2TbFhsqMA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`;

export const materialIcons = css`
    /* fallback */
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
    }

`;