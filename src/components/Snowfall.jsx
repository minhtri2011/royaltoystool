import React, { useEffect, useState } from 'react';
import './Snowfall.css'; // Import your CSS file for snowflakes

const Snowfall = () => {
  const [numFlakes] = useState(10);
  const [downSpeed] = useState(0.01);
  const [lrFlakes] = useState(10);

  const pictureSrc = "https://1.bp.blogspot.com/-CXx9jt2JMRk/Vq-Lh5fm88I/AAAAAAAASwo/XivooDn_oSY/s1600/hoamai.png";
  const pictureWidth = 20;
  const pictureHeight = 20;

  const [xcoords, setXcoords] = useState([]);
  const [ycoords, setYcoords] = useState([]);

  useEffect(() => {
    const tempXcoords = [];
    const tempYcoords = [];

    for (let x = 0; x < numFlakes; x++) {
      tempXcoords.push((x + 1) / (numFlakes + 1));
    }

    for (let x = 0; x < numFlakes; x++) {
      let snFlkTemp;
      do {
        snFlkTemp = Math.round((numFlakes - 1) * Math.random());
      } while (typeof ycoords[snFlkTemp] === 'number');
      tempYcoords[snFlkTemp] = x / numFlakes;
    }

    setXcoords(tempXcoords);
    setYcoords(tempYcoords);
  }, [numFlakes]);

  const flakeFall = () => {
    for (let x = 0; x < numFlakes; x++) {
      if (ycoords[x] * window.innerHeight > window.innerHeight - pictureHeight) {
        ycoords[x] = 0;
      }
      ycoords[x] += downSpeed;
    }
    setYcoords([...ycoords]);
  };

  useEffect(() => {
    const intervalId = setInterval(flakeFall, 100);
    return () => clearInterval(intervalId);
  }, [flakeFall]);


  return (
    <div className="snowfall-container !fixed w-screen h-screen top-0 left-0 ">
      {xcoords.map((xcoord, index) => (
        <div
          key={index}
          className="snowflake select-none"
          style={{
            top: `${(ycoords[index] * 100)}vh`,
            left: `${
              (xcoord * 100) - pictureWidth / 2 +
              (100 / ((numFlakes + 1) * 4)) *
                (Math.sin(lrFlakes * ycoords[index]) -
                  Math.sin(3 * lrFlakes * ycoords[index]))
            }vw`,
          }}
        >
          <img
            src={pictureSrc}
            alt="*"
            width={pictureWidth}
            height={pictureHeight}
          />
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
