import { createGlobalStyle } from "styled-components";
import CarroisGothicSc from "../fonts/Carrois_Gothic_SC/CarroisGothicSC-Regular.ttf";
import DawningOfANewDayRegular from "../fonts/Dawning_of_a_New_Day/DawningofaNewDay-Regular.ttf";
import MarckScript from "../fonts/Marck_Script/MarckScript-Regular.ttf";
import MedievalSharp from "../fonts/MedievalSharp/MedievalSharp-Regular.ttf";
import PathwayGothicOne from "../fonts/Pathway_Gothic_One/PathwayGothicOne-Regular.ttf";
import RougeScript from "../fonts/Rouge_Script/RougeScript-Regular.ttf";
import SyneTactile from "../fonts/Syne_Tactile/SyneTactile-Regular.ttf";
import VampiroOne from "../fonts/Vampiro_One/VampiroOne-Regular.ttf";
import Vitoriana from "../fonts/Victoriana/victoriana.ttf";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-white-1: #ffffff;
        --color-black-1: #000000;
        --color-yellow-1: #cdb35b;
        --color-yellow-2: #b29c5b;
        --color-red-1: #701b19;
    }
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: unset;
    }
    @font-face {
        font-family: 'CarroisGothicSc';
        font-style: normal;
        font-weight: normal;
        src: url(${CarroisGothicSc}) format("truetype");
    }
    @font-face {
        font-family: 'DawningOfANewDayRegular';
        font-style: normal;
        font-weight: normal;
        src: url(${DawningOfANewDayRegular}) format("truetype");
    }
    @font-face {
        font-family: 'MarckScript';
        font-style: normal;
        font-weight: normal;
        src: url(${MarckScript}) format("truetype");
    }
    @font-face {
        font-family: 'MedievalSharp';
        font-style: normal;
        font-weight: normal;
        src: url(${MedievalSharp}) format("truetype");
    }
    @font-face {
        font-family: 'PathwayGothicOne';
        font-style: normal;
        font-weight: normal;
        src: url(${PathwayGothicOne}) format("truetype");
    }
    @font-face {
        font-family: 'RougeScript';
        font-style: normal;
        font-weight: normal;
        src: url(${RougeScript}) format("truetype");
    }
    @font-face {
        font-family: 'SyneTactile';
        font-style: normal;
        font-weight: normal;
        src: url(${SyneTactile}) format("truetype");
    }
    @font-face {
        font-family: 'VampiroOne';
        font-style: normal;
        font-weight: normal;
        src: url(${VampiroOne}) format("truetype");
    }
    @font-face {
        font-family: 'Vitoriana';
        font-style: normal;
        font-weight: normal;
        src: url(${Vitoriana}) format("truetype");
    }
    html, body {
        margin: auto;
        scroll-behavior: smooth; 
        font-family: 'CarroisGothicSc';
    }
`;

export default GlobalStyle;