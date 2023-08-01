import React from 'react';

const LinkRenderer = ({ text }) => {
  const renderTextWithLinks = () => {
    const regex = /(?:https?|ftp):\/\/[\w-]+(?:\.[\w-]+)+(?:[\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g;
    const parts = text.split(' ');
    return parts.map((part, index) => {
      if (regex.test(part)) {
        part = part.replace(/"/g, '')
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      } else {
        return <React.Fragment key={index}>{part + " "}</React.Fragment>;
      }
    });
  };

  return <div>{renderTextWithLinks()}</div>;
};

export default LinkRenderer;