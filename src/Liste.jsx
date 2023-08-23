import React, { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { query, getDocs, collection } from "firebase/firestore";
import InfoHeroes from "./common/InfoHeroes";
import Hero from ''

const Liste = () => {
  const [Heroes, setHeroes]   = useState([]);
  const [Loading, setLoading]  = useState(false);  //lancement de l'affichage du chargement

//déclaration d'une fonction flèchée asynchrone getHeroes
  const getHeroes = async () => {

    setLoading(true);  //début du chargement


    const rqHeroes = query(collection(firestore, "Heroes"));
    const snapHeroes = await getDocs(rqHeroes);
    console.log(snapHeroes);

    if (!snapHeroes.empty) {
//vérification que snapHeroes n'est pas vide

//formatage de la liste des Heroes
      const dataHeroes = snapHeroes.docs.map((itemHero) => {
        return { id: itemHero.id, ...itemHero.data() };
      });
      console.log(dataHeroes);
      //Mise à jour de la liste des Heoroes
      setHeroes(dataHeroes);
    }

    setLoading(false);  //fin du chargement
    //contrôle de l'existence des résultats
  };
  useEffect(() => {
    getHeroes();
  }, []);

  //affichage de la liste
  return <div> Liste
    <br/>
          {Loading ? 'chargement' : (
        Heroes.map((itemHero) => (
          <InfoHeroes key={InfoHeroes.id} data={itemHero} />
        ))
      )}
  </div>;
};

export default Liste;
