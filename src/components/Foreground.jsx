
import React, { useRef, useState } from 'react';

import Card from './Card.jsx';

function Foreground() {
  const ref = useRef(null);

  
  const [data, setData] = useState([
    {
      id: "1", 
      desc: "This is a sample card with a green tag.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      id: "2", 
      desc: "This one has a blue tag for uploading.",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      id: "3", 
      desc: "This card has no tag and a close button.",
      filesize: "1.2mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ]);

  return (
    <div
      ref={ref}
      className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'
    >
    
      {data.map((item) => (
        <Card data={item} reference={ref} key={item.id} />
      ))}
    </div>
  );
}

export default Foreground;