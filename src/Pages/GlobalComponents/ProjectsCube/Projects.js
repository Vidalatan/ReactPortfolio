import pokeshop from './assets/pokeshop.png';
import dndyImgL from './assets/dndyLight.png';
import dndyImgD from './assets/dndyDark.png';
import nmn from './assets/NMN.png';
import opticCalcL from './assets/opticCalcLight.png';
import opticCalcD from './assets/opticCalcDark.png';
import readmeL from './assets/readmeLight.png';
import readmeD from './assets/readmeDark.png';
import weatherL from './assets/weatherDashboardLight.png';
import weatherD from './assets/weatherDashboardDark.png';


const Projects = 
{
  "0": 
  {
    "img": pokeshop,
    "darkImg": pokeshop,
    "repoURL": "https://github.com/Vidalatan/poke-shop",
    'liveURL': 'https://vidalatan.github.io/poke-shop/index.html'
  },
  "1": 
  {
    "img": dndyImgD,
    "darkImg": dndyImgL,
    "repoURL": "https://github.com/DNDYArt/DNDYArt",
    'liveURL': 'https://dndyfineart.herokuapp.com/'
  },
  "2": 
  {
    "img": nmn,
    "darkImg": nmn,
    "repoURL": "https://github.com/Nerds-Meet-Nerds/Nerds-Meet-Nerds",
    'liveURL': 'https://nerds-meet-nerds.herokuapp.com/'
  },
  "3": 
  {
    "img": opticCalcD,
    "darkImg": opticCalcL,
    "repoURL": "https://github.com/Vidalatan/Optic-Calculator",
    'liveURL': null
  },
  "4": 
  {
    "img": readmeD,
    "darkImg": readmeL,
    "repoURL": "https://github.com/Vidalatan/readme_maker",
    'liveURL': null
  },
  "5": 
  {
    "img": weatherL,
    "darkImg": weatherD,
    "repoURL": "https://github.com/Vidalatan/weather_dashboard",
    'liveURL': 'https://vidalatan.github.io/weather_dashboard/'
  }
}

export default Projects;