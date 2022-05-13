// This is how reusable code is made, those small little square sections are this code just recycled
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false, // Setting this to true triggers image to be placed on other side of screen
    img: require('../../images/svg-1.svg').default, // Using this require way is a workaround to getting things to work as resuable
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn More',
    imgStart: true, // Setting this to true triggers image to be placed on other side of screen
    img: require('../../images/svg-2.svg').default, // Using this require way is a workaround to getting things to work as resuable
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Start Now',
    imgStart: false, // Setting this to true triggers image to be placed on other side of screen
    img: require('../../images/svg-3.svg').default, // Using this require way is a workaround to getting things to work as resuable
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true
};