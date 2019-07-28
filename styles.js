import { css } from 'lit-element';

export const seedButtonStyle = css`

    @import url('https://fonts.googleapis.com/css?family=Heebo&display=swap');

    .sd-btn {
        font-family: 'Heebo', sans-serif !important;
        background-color: white;
        font-weight: bolder;
        font-size: 1rem;
        font-weight: 300;
        margin: 2px;
        padding: 12px;
        color: #3b3b3b;
        border: none;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        cursor: pointer;
        transition: background-color .2s;
    }

    .sd-btn:hover {
        background-color: #dedede;
    }

    .red {
        background-color: #de3d4c;
        color: white;
    }

    .red:hover {
        background-color: #bb3440;
    }

    .green {
        background-color: #6ea230;
        color: white;
    }

    .green:hover {
        background-color: #5e8b28;
    }

    .blue {
        background-color: #2dabb4;
        color: white;
    }

    .blue:hover {
        background-color: #239aa3;
    }
`;
