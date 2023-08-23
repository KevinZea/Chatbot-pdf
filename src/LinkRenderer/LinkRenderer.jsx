import React from 'react';
import './LinkRenderer.css'

const LinkRenderer = ({ text }) => {
  const renderTextWithLinks = () => {
    const regex = /(?:https?|ftp):\/\/[\w-]+(?:\.[\w-]+)+(?:[\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?|www\.[\w-]+(?:\.[\w-]+)+(?:[\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
    let arrayText = []
    const parts = text.split('\n');
      for (let parte of parts){
          parte = parte + '\n'
          let aux = parte.split(' ')
          for (let a of aux){
            arrayText.push(a)
          }
      }
    // if (text.includes("\n")){
    //   const parts = text.split('\n');
    //   for (let parte of parts){
    //       parte = parte + '\n'
    //       let aux = parte.split(' ')
    //       for (let a of aux){
    //         arrayText.push(a)
    //       }
    //   }
    // }
    // else {
    //   arrayText = text.split(' ')
    // }

    return arrayText.map((part, index) => {

      if (regex.test(part)) {
        part = part.replace(/"/g, '')
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className='enlaces'>
            Click {" "}
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