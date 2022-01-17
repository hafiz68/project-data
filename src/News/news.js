import React from "react";
import "./news.css";
import { AiOutlineArrowRight } from "react-icons/ai";


const News = () => {
  return (
    <>
        <div className="news-background-color">

    <div className="container">

      <h1 className="news_heading__style" id="#news">NEWS</h1>

      <div className="col-md-12 row news_image__section ">
        <div className="col-md-8 row news_largeColumn__styleFirst">
          <p>
            Frédéric Chesnais (Atari) : <br /> Le pionnier du jeu vidéo Atari{" "}
            <br /> se lance dans la blockchain - 28/04
          </p>

          <p>
            Ce mercredi 28 avril, Frédéric Chesnais, PDG d’Atari, <br /> est
            revenu sur la nouvelle organisation del'éditeur de <br /> jeux vidéo
            Atari, notamment son lancement dans la blockchain, dans...{" "}
          </p>
          <button className="news_button_style">Read More </button>
        </div>
        <div className="col-md-4 row news_smallColumn__styleFirst">
          <p>
            Atari Bets On Crypto : <br /> Ahead Of First New Console <br /> In
            Over 20 Years
          </p>

          <p>
            TOPLINE Weeks before releasing <br /> its first new console in over
            20 years, <br /> Atari is setting out to dominate the videogame
            industry’s crypto market with the ...
          </p>
          <button className="news_button_style">Read More </button>
        </div>
      </div>

      <div className="col-md-12 row news-second-content-section">
        <div className="col-md-4 row news_smallColumn__styleSecond">
          <p>
            Atari creates line of <br /> digital sneakers for <br /> the virtual
            world{" "}
          </p>

          <p>
            {" "}
            Atari CEO Fred Chesnais oversaw g <br /> the creation of an Atari
            cryptocurrency to <br /> power the future of the interactive...
          </p>
          <button className="news_button_style">Read More </button>
        </div>
        <div className="col-md-8 row news_largeColumn__styleSecond">
          <p>
            La grande interview de : <br /> Frédéric Chesnais (Atari)
          </p>

          <p>
            Vendredi 30 avril 2021, <br /> SMART TECH reçoit Frédéric <br />{" "}
            Chesnais (Président-directeur, Atari){" "}
          </p>
          <button className="news_button_style">Read More </button>
        </div>
      </div>

      <div className="col-md-12 row news_third__section ">
        <div className="col-md-8 row news_largeColumn__styleThird">
          <p>
            Frédéric Chesnais (Atari) : <br /> Le pionnier du jeu vidéo Atari{" "}
            <br /> se lance dans la blockchain - 28/04
          </p>

          <p>
            Ce mercredi 28 avril, Frédéric Chesnais, PDG d’Atari, <br /> est
            revenu sur la nouvelle organisation del'éditeur de <br /> jeux vidéo
            Atari, notamment son lancement dans la blockchain, dans...{" "}
          </p>
          <button className="news_button_style">Read More </button>
        </div>
        <div className="col-md-4 row news_smallColumn__styleThird">
          <p>
            Atari Bets On Crypto : <br /> Ahead Of First New Console <br /> In
            Over 20 Years
          </p>

          <p>
            TOPLINE Weeks before releasing <br /> its first new console in over
            20 years, <br /> Atari is setting out to dominate the videogame
            industry’s crypto market with the ...
          </p>
          <button className="news_button_style">Read More </button>
        </div>
      </div>

      <div className="col-md-12 row news_four_section">
        <div className="col-md-4 row news_smallColumn__styleFour">
          <p>
            Atari creates line of <br /> digital sneakers for <br /> the virtual
            world{" "}
          </p>

          <p>
            {" "}
            Atari CEO Fred Chesnais oversaw g <br /> the creation of an Atari
            cryptocurrency to <br /> power the future of the interactive...
          </p>
          <button className="news_button_style">Read More </button>
        </div>
        <div className="col-md-8 row news_largeColumn__styleFour">
          <p>
            La grande interview de : <br /> Frédéric Chesnais (Atari)
          </p>

          <p>
            Vendredi 30 avril 2021, <br /> SMART TECH reçoit Frédéric <br />{" "}
            Chesnais (Président-directeur, Atari){" "}
          </p>
          <button className="news_button_style">Read More </button>
        </div>
      </div>
      </div>
      </div>


    </>
  );
};

export default News;
