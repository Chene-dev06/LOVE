import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function CuteFace({ mood = "happy" }) {
  const faces = {
    happy: "૮ ˶ᵔ ᵕ ᵔ˶ ა",
    annoyed: "૮(˶>﹏<˶)ა",
    nervous: "૮(｡•́︿•̀｡)ა",
    furious: "૮(╬ Ò﹏Ó)ა",
  };
  return <div className={`cute-face ${mood}`} aria-label={`${mood} cute face`}>{faces[mood]}</div>;
}

function FirstPage({ onYes }) {
  const [noCount, setNoCount] = useState(0);
  const noMessages = [
    "Ghadi noktlk dir WAH 😤",
    "Diiiiiiir WAH 😾",
    "Mazal katgol LA?! 🥺",
  ];

  return (
    <main className="screen">
      <div className="sparkle sparkle-one">✦</div>
      <div className="sparkle sparkle-two">♡</div>
      <section className="question-card first-card">
        <div className="tiny-label">A VERY IMPORTANT QUESTION</div>
        <div className="big-heart">💗</div>
        <h1>Tbghini ?</h1>
        <p className="soft-text">Jawb b sra7a… 👀</p>
        {noCount > 0 && (
          <div className="reaction-area">
            <CuteFace mood="annoyed" />
            <p className="reaction-message">{noMessages[Math.min(noCount - 1, noMessages.length - 1)]}</p>
          </div>
        )}
        <div className="button-row">
          <button className="btn btn-yes" onClick={onYes}>WAH 💕</button>
          <button className="btn btn-no" onClick={() => setNoCount((n) => n + 1)}>LA 🙄</button>
        </div>
      </section>
      <div className="bottom-note">made with a little bit of love ♡</div>
    </main>
  );
}

function SecondPage({ onYes }) {
  const [noCount, setNoCount] = useState(0);
  const moods = ["happy", "annoyed", "nervous", "furious"];
  const messages = ["", "Drok f YES 😒", "Ghadi Noktlk 😤", "Chouf ghir drok f YES khirlk 😡"];

  return (
    <main className="screen">
      <div className="sparkle sparkle-one">♡</div>
      <div className="sparkle sparkle-two">✧</div>
      <section className="question-card second-card">
        <div className="avatar-wrap">
          <CuteFace mood={moods[Math.min(noCount, 3)]} />
          {noCount >= 3 && <div className="angry-hands">✊🏻　✊🏻</div>}
        </div>
        <div className="tiny-label">ONE MORE THING…</div>
        <h1 className="fancy-question">T9bel message te3y ?</h1>
        <p className="soft-text">I have something from my heart to tell you 💌</p>
        {noCount > 0 && <p className="reaction-message">{messages[Math.min(noCount, 3)]}</p>}
        <div className="button-row">
          <button className="btn btn-yes" onClick={onYes}>Yes 💖</button>
          <button className="btn btn-no" onClick={() => setNoCount((n) => Math.min(n + 1, 3))}>No 😶</button>
        </div>
      </section>
      <div className="bottom-note">please choose wisely 🤭</div>
    </main>
  );
}

const loveMessage = `Bghit ngoulk ysra l'l ysra tg3oud toujours 3ziz w blastk mydiha HTA whde psq glbi Lik nta berk w whdek mtkhafch impossible nbghi ghirk ana ❤️‍🩹

Ida ncha3tk b klma wla geste smahli w bzaf mkanch 9asdi wlh jamais nwit ndirlk hja dourk wla nkhalik tkhmem BLI nta mthmnich wla hja machi important fhyati 💋

C'est vrai mnhdrch ghya w mnbghich ngoulk w n3berlk 3la cha nhas w cha nkhamem w cha nbghi BSH ça veut pas dire mdyrtlkch hsab fhyati 😚

Nbghik toujours m3aya w hdaya w nbghik toujours frhane w tdhk nchlh

Mnbghich swl7 chkil ydkhlo binatna w ydy3o binatna

BLK maranach kifkif BSH nchlh fel future nkouno kifkif forever w mntfar9och ♾️♥️

Nbghik 3omri w mt3wdtch tsa9sini asq nbghik ou nn psq Rak 3arf nmout 3lik lhobe ta3i nta 🫠😚

w mnbghich mn ghirk fdi dnya koun kyn kifach nwrilk kich Nbghik wlh ndkhlk glbi tchouf mhbtk 3andi 🥲

Sayi ntkhde mdasra ta3 klabe 9ra ghaya msg n3rfk hmar mt3rfch t9ra w mtfhmch lktba 😂`;

function FinalPage() {
  const [showKisses, setShowKisses] = useState(false);
  const kisses = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 7) % 96}%`,
    delay: `${(i % 10) * 0.16}s`,
    duration: `${2.4 + (i % 5) * 0.35}s`,
    size: `${1.2 + (i % 4) * 0.35}rem`,
    symbol: i % 3 === 0 ? "💋" : i % 3 === 1 ? "😘" : "💕",
  }));

  return (
    <main className="screen final-screen">
      {showKisses && (
        <div className="kiss-layer" aria-hidden="true">
          {kisses.map((kiss) => (
            <span key={kiss.id} className="floating-kiss" style={{
              left: kiss.left, animationDelay: kiss.delay,
              animationDuration: kiss.duration, fontSize: kiss.size
            }}>{kiss.symbol}</span>
          ))}
        </div>
      )}
      <section className="letter-card">
        <div className="letter-top">♡ A MESSAGE FROM MY HEART ♡</div>
        <div className="letter-icon">💌</div>
        <h1>Just for you</h1>
        <div className="letter-body">{loveMessage}</div>
        <div className="letter-signoff">With all my love ❤️</div>
        <button className="btn surprise-btn" onClick={() => setShowKisses(true)}>
          Haja for you 💋
        </button>
      </section>
      <div className="bottom-note">forever & always ♾️</div>
    </main>
  );
}

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="app-shell">
      {page === 0 && <FirstPage onYes={() => setPage(1)} />}
      {page === 1 && <SecondPage onYes={() => setPage(2)} />}
      {page === 2 && <FinalPage />}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
