import { createGlobalStyle } from "styled-components";

const bodyColor = props => props.theme.colors.primary800;

const GlobalStyles = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: ${bodyColor};
        font-size: 16px;
        font-weight: 400;
        font-family: 'Raleway', sans-serif;
        letter-spacing: 1px;
    }

    /* width */
    ::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: ${p => p.theme.colors.primary100}; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${p => p.theme.colors.primary300}; 
    border-radius: 2rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${p => p.theme.colors.primary500}; 
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 700;
    }

    h1 {
        font-size: clamp(4.8rem, 4.2462rem + 1.5385vw, 6.4rem);
    }

    h2 {
        font-size: clamp(3.2rem, 2.6462rem + 1.5385vw, 4.8rem);
    }

    h3 {
        font-size: clamp(2.4rem, 2.1231rem + 0.7692vw, 3.2rem);
    }

    h4 {
        font-size: clamp(2rem, 1.8615rem + 0.3846vw, 2.4rem);
    }

    h5 {
        font-size: clamp(1.6rem, 1.4615rem + 0.3846vw, 2rem);
    }

    h6 {
        font-size: clamp(1.2rem, 1.0615rem + 0.3846vw, 1.6rem);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    section {
        padding-top: clamp(2rem, 1.3077rem + 1.9231vw, 4rem);
        padding-bottom: clamp(2rem, 1.3077rem + 1.9231vw, 4rem);


    }

    footer {
        color: ${p => p.theme.colors.primary200};
        background-color: ${p => p.theme.colors.primary900};
    }

.swiper-button-next,
.swiper-button-prev {
   background-color: rgba(29, 150, 226, .6);
   padding: 1.6rem;
   border-radius: 50%;
   color: white;

   
}

.swiper-button-prev::after {
    margin-left: -.4rem;

}

.swiper-button-next::after {
    margin-left: .4rem;

}

.swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, .4);
    opacity: 1;
}

.swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 1);
opacity: 1;
}

:root {
    --swiper-navigation-size: 2rem;
}
    
`;

export default GlobalStyles;
