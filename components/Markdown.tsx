import React from 'react';
import emoji from 'emoji-dictionary';
import Code from './Code';
import ReactMarkdown from 'react-markdown/with-html';

// Emoji support https://github.com/remarkjs/react-markdown/issues/61
const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: '100%' }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
          text: emojiSupport,
        }}
        escapeHtml={false}
      />
    </div>
  );
};
