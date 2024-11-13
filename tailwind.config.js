const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        // "node_modules/daisyui/dist/**/*.js",
        // "node_modules/react-daisyui/dist/**/*.js",
    ],
    important: true,
    theme: {
        fontFamily: {
            primary: [`'Nunito', sans-serif`],
            fontHead: [`'Paytone One', sans-serif`],
        },
        container: {
            padding: {
                // DEFAULT: '30px',
                lg: "0",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },
        backgroundPosition: {
            right40: " bottom right 40px",
        },
        extend: {
            colors: {
                primary: "#222222",
                secondary: "#F69946",
                tertiary: "#3A3330",
                nau: "#564741",
                naudam: "#2c241e",
                vang: "#F9F4EA",
                xam: "#898988",
                xamnhat: "#616161",
            },
            backgroundImage: {
                benefit: "url('./img/bg-section-4-2.png')",
                section3: "url('./img/bg-section-3.png')",
                pawSection1: "url('./img/img-vector-11.png')",
                pawSection2: "url('./img/img-vector-12.png')",
                bgGetItForFree: "url('./img/bg-section-22.png')",
                bgGetItForFree2: "url('./img/bg-section-9-1.png')",
                bgInfoBox: "url('./img/info-box-vet-care-decoration.png')",
                bgAddToCart: "url('./img/shopping-cart.png')",
            },
            boxShadow: {
                "3xl": "4px 3px 9px 0px rgba(0,0,0,0.1)",
                big: "12px 9px 38px 0px rgba(0, 0, 0, 0.1)",
            },
            transitionProperty: {
                duration: "400ms",
            },
        },
    },
    plugins: [require("daisyui")],
});
