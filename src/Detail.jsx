import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import { useParams } from "react-router-dom";
import { useState } from "react";

const detail = () => {
  let { idHero } = useParams();

  const [Hero, setHero] = useState([]);
  console.log(idHero);

  const getOneHero = async () => {
    const rqHero = doc(firestore, "Heroes", idHero);
    const snapHero = await getDoc(rqHero);
    if (snapHero.exists) {
      setHero(snapHero.data());
    }
    console.log(snapHero.data());
  };

  useEffect(() => {
    getOneHero();
  }, []);

  return (
    <div>
      <div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow">
          <img
            className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src={Hero.image}
          />
          <div className="text-center text-black mt-2 text-3xl font-medium">{Hero.HeroName}</div>
          <div className="text-center text-black mt-2 font-light text-sm">{Hero.RealName}</div>
          <div className="px-6 text-center text-black mt-2 font-light text-sm">
            <p>
                {Hero.Type}
            </p>
          </div>
          <hr className="mt-8" />

        </div>
      </div>
    </div>
  );
};

export default detail;
