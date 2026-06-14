import React from 'react';

export default function CustomButton() {
  return (
    <>
      {/* Injecting styles directly for animations and hover pseudo-classes */}
      <style>{`
        .uiverse-btn {
          position: relative;
          width: 11em;
          height: 4em;
          outline: none;
          transition: 0.1s;
          background-color: transparent;
          border: none;
          font-size: 13px;
          font-weight: bold;
          color: #ddebf0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .uiverse-clip {
          --color: #2761c3;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          border: 5px double var(--color);
          box-shadow: inset 0px 0px 15px #195480;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }

        .uiverse-arrow {
          position: absolute;
          transition: 0.2s;
          background-color: #2761c3;
          top: 35%;
          width: 11%;
          height: 30%;
        }

        .uiverse-leftArrow {
          left: -13.5%;
          clip-path: polygon(100% 0, 100% 100%, 0 50%);
          -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
        }

        .uiverse-rightArrow {
          clip-path: polygon(100% 49%, 0 0, 0 100%);
          -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
          left: 102%;
        }

        .uiverse-btn:hover #rightArrow {
          background-color: #27c39f;
          left: -15%;
          animation: 0.6s ease-in-out both infinite alternate rightArrow8;
        }

        .uiverse-btn:hover #leftArrow {
          background-color: #27c39f;
          left: 103%;
          animation: 0.6s ease-in-out both infinite alternate leftArrow8;
        }

        .uiverse-corner {
          position: absolute;
          width: 4em;
          height: 4em;
          background-color: #2761c3;
          box-shadow: inset 1px 1px 8px #2781c3;
          transform: scale(1) rotate(45deg);
          transition: 0.2s;
        }

        #rightTop { top: -1.98em; left: 91%; }
        #leftTop { top: -1.96em; left: -3.0em; }
        #leftBottom { top: 2.10em; left: -2.15em; }
        #rightBottom { top: 45%; left: 88%; }

        .uiverse-btn:hover #leftTop {
          animation: 0.1s ease-in-out 0.05s both changeColor8, 0.2s linear 0.4s both lightEffect8;
        }

        .uiverse-btn:hover #rightTop {
          animation: 0.1s ease-in-out 0.15s both changeColor8, 0.2s linear 0.4s both lightEffect8;
        }

        .uiverse-btn:hover #rightBottom {
          animation: 0.1s ease-in-out 0.25s both changeColor8, 0.2s linear 0.4s both lightEffect8;
        }

        .uiverse-btn:hover #leftBottom {
          animation: 0.1s ease-in-out 0.35s both changeColor8, 0.2s linear 0.4s both lightEffect8;
        }

        .uiverse-btn:hover .uiverse-corner {
          transform: scale(1.25) rotate(45deg);
        }

        .uiverse-btn:hover .uiverse-clip {
          animation: 0.2s ease-in-out 0.55s both greenLight8;
          --color: #27c39f;
        }

        @keyframes changeColor8 {
          from { background-color: #2781c3; }
          to { background-color: #27c39f; }
        }

        @keyframes lightEffect8 {
          from { box-shadow: 1px 1px 5px #27c39f; }
          to { box-shadow: 0 0 2px #27c39f; }
        }

        @keyframes greenLight8 {
          to { box-shadow: inset 0px 0px 32px #27c39f; }
        }

        @keyframes leftArrow8 {
          from { transform: translate(0px); }
          to { transform: translateX(10px); }
        }

        @keyframes rightArrow8 {
          from { transform: translate(0px); }
          to { transform: translateX(-10px); }
        }
      `}</style>

      <button className="uiverse-btn">
        P L A Y
        <div id="clip" className="uiverse-clip">
          <div id="leftTop" className="uiverse-corner"></div>
          <div id="rightBottom" className="uiverse-corner"></div>
          <div id="rightTop" className="uiverse-corner"></div>
          <div id="leftBottom" className="uiverse-corner"></div>
        </div>
        <span id="rightArrow" className="uiverse-arrow uiverse-rightArrow"></span>
        <span id="leftArrow" className="uiverse-arrow uiverse-leftArrow"></span>
      </button>
    </>
  );
}