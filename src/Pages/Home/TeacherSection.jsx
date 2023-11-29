


import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TeacherSection= () => {
  return (
    <div>
         <div className="text-center my-4">
                <h1 className="text-3xl mt-7 font-bold">OUR<span 
              className="text-green-500"> TEACHER</span></h1>
               <h1 className="text-center mt-3 mx-auto w-20 border-2 border-green-600"></h1>
              </div>
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-green-500 font-medium">
          Stay with us
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
         Change your career 
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Our web development online class is led by a dynamic team of experienced instructors committed to guiding you through an enriching learning journey. At the helm is our lead instructor, bringing a wealth of industry experience and a passion for teaching. 
        </p>

      </div>
      <ShuffleGrid />
    </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://i.ibb.co/jZt19Y0/donator-10.png",
  },
  {
    id: 2,
    src: "https://i.ibb.co/gmcSn0P/donator-9.png",
  },
  {
    id: 3,
    src: "https://i.ibb.co/8PhnPPn/donator-8.png",
  },
  {
    id: 4,
    src: "https://i.ibb.co/Nj8g09R/donator-6.png",
  },
  {
    id: 5,
    src: "https://i.ibb.co/9VrXH9m/author5-jpg.png",
  },
  {
    id: 6,
    src: "https://i.ibb.co/8rgpmws/author2-jpg.png",
  },
  {
    id: 7,
    src: "https://i.ibb.co/VHY7GLn/author4-jpg.png",
  },
  {
    id: 8,
    src: "https://i.ibb.co/LRxy0Lx/author1-jpg.png",
  },
  {
    id: 9,
    src: "https://i.ibb.co/fQD3fBk/author3-jpg.png",
  },
  
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default TeacherSection;