import React, { useState, useEffect } from "react";
import styles from "./Meme.module.css";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ihzfe.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    console.log("Effect ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // useEffect(async () => {
  //   const res = await fetch("https://api.imgflip.com/get_memes");
  //   const data = await res.json();
  //   setAllMemes(data.data.memes);
  // }, []);

  const getMemeImage = () => {
    // const memesArray = allMemes.data.memes;
    const randomMeme = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomMeme].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <input
          className={styles.form__input}
          placeholder="Top text"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={changeHandler}
        />
        <input
          className={styles.form__input}
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandler}
        />
        <button className={styles.form__button} onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className={styles.meme}>
        <img className={styles.meme__img} src={meme.randomImage} alt="" />
        <h2 className={styles.meme__text_top}>{meme.topText}</h2>
        <h2 className={styles.meme__text_bottom}>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
