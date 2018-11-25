import sunny1 from "../assets/sunny/1.jpg";
import rainy1 from "../assets/rainy/1.jpg";
import cloudy1 from "../assets/cloudy/1.jpg";
import snowy1 from "../assets/snowy/1.jpg";
import mist1 from "../assets/mist/1.jpg";
import thuderstorm1 from "../assets/thunderstorm/1.jpg";
import default1 from "../assets/default.jpg";


const selectBackgroundImage = (type) => {
  const TYPE_TO_IMG = {
    "clear": [
      sunny1
    ],
    "rain": [
      rainy1
    ],
    "clouds": [
      cloudy1
    ],
    "snow": [
      snowy1
    ],
    "mist": [
      mist1
    ],
    "thuderstorm": [
      thuderstorm1
    ],
    "drizzle": [
      rainy1
    ],
    "default": [
      default1
    ],
  };

  if (Object.keys(TYPE_TO_IMG).includes(type)) {
    return TYPE_TO_IMG[type][0]
  } else {
    // fallback
    return TYPE_TO_IMG["default"];
  }
}

export default selectBackgroundImage;