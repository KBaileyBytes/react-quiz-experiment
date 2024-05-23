import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMedal, 
    faMasksTheater, 
    faLightbulb, 
    faMosque, 
    faFilm, 
    faFlask, 
    faMusic, 
    faLandmark, 
    faEarthAmericas, 
    faUtensils 
} from "@fortawesome/free-solid-svg-icons";

const categoryIcons = {
    arts_and_literature: faMasksTheater,
    film_and_tv: faFilm,
    food_and_drink: faUtensils,
    general_knowledge: faLightbulb,
    geography: faEarthAmericas,
    history: faLandmark,
    music: faMusic,
    science: faFlask,
    society_and_culture: faMosque,
    sport_and_leisure: faMedal,
};

export default function CategoryIcon({ category }) {
    const icon = categoryIcons[category];
    return icon ? <FontAwesomeIcon icon={icon} size="3x" /> : <span>No icon found</span>;
}