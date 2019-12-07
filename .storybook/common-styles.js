import { css } from 'lit-element';

export const storyCommonStyles = css`
  .tags-container {
    display: flex;
    flex-direction: column;
    white-space: pre;
    font-family: 'Ubuntu', sans-serif;
    overflow: scroll;
    margin-bottom: 50px;
  }

  .tags-container > span {
    color: #688286;
    font-size: 15px;
    padding: 10px;
    width: fit-content;
    background-color: #2f2e2e;
    margin-bottom: 5px;
  }

  .light-txt {
    color: #53f7ef;
  }
`;
