import './css/App.css';
import './css/uitilities.css';
import { useState } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import Button from "@material-ui/core/Button";
import Cloud from './Images/cloud.png';
import Ship from './Images/ship.png';
import Cycle from './Images/cycle.gif';

function App() {
  const [bg, setBg] = useState(true);

  const { ref: cycle, getAnimation: Cycleanum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(60px)" },
    ],
    timing: {
      duration: 2000,
      direction: "alternate",
      iterations: Infinity,
      easing: 'ease-in-out',
    }
  });

  const { ref: ship, getAnimation: shipanum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-900px) rotate(5deg)" },
      { transform: "translateX(-800px) rotate(-10deg)" },
      { transform: "translateX(-700px) rotate(5deg)" },
      { transform: "translateX(-600px) rotate(-10deg)" },
      { transform: "translateX(-500px) rotate(5deg)" },
      { transform: "translateX(-400px) rotate(-10deg)" },
      { transform: "translateX(-300px) rotate(5deg)" },
      { transform: "translateX(-200px) rotate(-10deg)" },
      { transform: "translateX(-100px) rotate(5deg)" },
      { transform: "translateX(0px) rotate(-10deg)" },

      { transform: "translateX(100px) rotate(5deg)" },
      { transform: "translateX(200px) rotate(-10deg)" },
      { transform: "translateX(300px) rotate(5deg)" },
      { transform: "translateX(400px) rotate(-10deg)" },
      { transform: "translateX(500px) rotate(5deg)" },
      { transform: "translateX(600px) rotate(-10deg)" },
      { transform: "translateX(700px) rotate(5deg)" },
      { transform: "translateX(800px) rotate(-10deg)" },
      // { transform: "translateX(900px) rotate(5deg)" },
    ],
    timing: {
      duration: 40000,
      iterations: Infinity,

    }
  });

  const { ref: cloud1, getAnimation: cloud1anum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(1100px)" },
      { transform: "translateX(-1100px)" },
    ],
    timing: {
      duration: 10000,
      // direction: "alternate",
      iterations: Infinity,
    }
  });
  const { ref: cloud2, getAnimation: cloud2anum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(1100px)" },
      { transform: "translateX(-1100px)" },
    ],
    timing: {
      duration: 10000,
      // direction: "alternate",
      iterations: Infinity,
      // easing: 'ease-in-out',
    }
  });

  const { ref: cloud3, getAnimation: cloud3anum } = useWebAnimations({
    keyframes: [
      { transform: "translateX(1100px)" },
      { transform: "translateX(-1100px)" },
    ],
    timing: {
      duration: 10000,
      // direction: "alternate",
      iterations: Infinity,
      // easing: 'ease-in-out',
    }
  });

  const animation1 = Cycleanum();
  const animation2 = cloud1anum();
  const animation3 = cloud2anum();
  const animation4 = cloud3anum();
  const animation5 = shipanum();

  const speedUp = () => {
    animation1.updatePlaybackRate(animation1.playbackRate * 1.1);
    animation2.updatePlaybackRate(animation2.playbackRate * 1.1);
    animation3.updatePlaybackRate(animation3.playbackRate * 1.1);
    animation4.updatePlaybackRate(animation4.playbackRate * 1.1);
    animation5.updatePlaybackRate(animation5.playbackRate * 1.1);
  }

  const slowDown = () => {
    animation1.updatePlaybackRate(animation1.playbackRate - 1.1);
    animation2.updatePlaybackRate(animation2.playbackRate - 1.1);
    animation3.updatePlaybackRate(animation3.playbackRate - 1.1);
    animation4.updatePlaybackRate(animation4.playbackRate - 1.1);
    animation5.updatePlaybackRate(animation5.playbackRate - 1.1);
  }

  const pause = () => {
    animation1.pause();
    animation2.pause();
    animation3.pause();
    animation4.pause();
    animation5.pause();
  }

  const play = () => {
    animation1.play();
    animation2.play();
    animation3.play();
    animation4.play();
    animation5.play();
  }
  return (
    <div className={`${bg ? 'daybg' : 'nightbg'}`}>
      <div className="w-64 h-64 absolute cloud1" ref={cloud1}>
        <img src={Cloud} height="100%" width="100%" alt="Cloud" />
      </div>
      <div className="w-64 h-64 absolute cloud2" ref={cloud2}>
        <img src={Cloud} height="100%" width="100%" alt="Cloud" />
      </div>
      <div className="w-64 h-64 absolute cloud3" ref={cloud3}>
        <img src={Cloud} height="100%" width="100%" alt="Cloud" />
      </div>
      <div className="w-32 h-32 absolute ship" ref={ship}>
        <img src={Ship} height="100%" width="100%" alt="Cloud" />
      </div>
      <div
        onClick={() => setBg(!bg)}
        className={`w-32 h-32 absolute both ${bg ? 'sun' : 'moon'}`}
      ></div>
      <div className="w-full h-64 absolute bottom-0 flex justify-center">
        <div className="w-64 h-64 absolute cycle">
          <img src={Cycle} ref={cycle} height="100%" width="100%" alt="Cycle" />
        </div>
      </div>
      <div className="button">
        <Button variant="outlined" onClick={slowDown}>
          <FastRewindRoundedIcon />
        </Button>
        <Button onClick={play}>
          <PlayArrowRoundedIcon />
        </Button>
        <Button onClick={pause}>
          <PauseCircleFilledRoundedIcon />
        </Button>
        <Button onClick={speedUp}>
          <FastForwardRoundedIcon />
        </Button>
      </div>
    </div>
  );
}

export default App;
