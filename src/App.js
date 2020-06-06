/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const textStyle = css({ fontSize: 24 });

const App = () => {
  return (
    <div
      css={{
        backgroundColor: '#A7CCED',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 css={{ margin: 0, fontSize: 58 }}>
        Should I use regex?{' '}
        <span role="img" aria-label="Thinking face">
          🤔
        </span>
      </h1>
      <section css={{ marginTop: 16, marginBottom: 16 }}>
        <p css={textStyle}>
          To determine if a regular expression is right for your use case, ask
          yourself the following:
        </p>
        <p css={[textStyle, { textAlign: 'center' }]}>
          &mdash; Will using a regex here help dismantle white supremacy?
        </p>
        <p css={textStyle}>
          If the answer to any of these questions is yes, go for it!
        </p>
      </section>
      <section>
        <ul css={{ listStyle: 'none', textAlign: 'center' }}>
          <li>
            <a
              href="https://support.eji.org/give/153413/#!/donation/checkout"
              css={textStyle}
            >
              Support the Equal Justice Initiative
            </a>
          </li>
          <li>
            <a
              href="https://www.versobooks.com/lists/4732-abolition-and-black-struggle"
              css={textStyle}
            >
              #AbolishThePolice
            </a>
          </li>
          <li>
            <a href="https://unitedwedream.org/abolishice/" css={textStyle}>
              #AbolishICE
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
