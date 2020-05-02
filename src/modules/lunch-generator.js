import { generateKeyPair } from "crypto"

class lunchGenerator {
    constructor() {
        this.lunchArray = [
            {
                lunchName: 'Fish tacos',
                lunchImage: '..images/fish-tacos.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/53729/fish-tacos'
            },
            {
                lunchName: 'Frozen vegetable stir-fry',
                lunchImage: '..images/frozen-vegetable-stir-fry.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/222658/frozen-vegetable-stir-fry'
            },
            {
                lunchName: 'Philly cheesesteak sandwich with garlic mayo',
                lunchImage: '..images/philly-cheesesteak-sandwich-with-garlic-mayo.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/51856/philly-cheesesteak-sandwich-with-garlic-mayo'
            },
            {
                lunchName: 'Refreshing lentil salad',
                lunchImage: '..images/refreshing-lentil-salad.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/215280/refreshing-lentil-salad'
            },
            {
                lunchName: 'Authentic German potato salad',
                lunchImage: '..images/authentic-german-potato-salad.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/83097/authentic-german-potato-salad/'
            },
            {
                lunchName: 'Quinoa black bean burgers',
                lunchImage: '..images/quinoa-black-bean-burgers.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/220661/quinoa-black-bean-burgers/'
            },
            {
                lunchName: 'Zesty quinoa salad',
                lunchImage: '..images/zesty-quinoa-salad',
                lunchLink: 'https://www.allrecipes.com/recipe/229156/zesty-quinoa-salad/'
            },
            {
                lunchName: 'Reuben sandwich',
                lunchImage: '..images/reuben-sandwich.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/32161/reuben-sandwich/'
            },
            {
                lunchName: 'Five can soup',
                lunchImage: '..images/five-can-soup.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/239736/five-can-soup/'
            },
            {
                lunchName: 'Skillet chili',
                lunchImage: '..images/skillet-chili.jpg',
                lunchLink: 'https://www.allrecipes.com/recipe/13092/skillet-chili'
            },
        ];
    }

    randomize() {
        let i,j,k;
        for (let i = this.lunchArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = this.lunchArray[i]
            this.lunchArray[i] = this.lunchArray[j]
            this.lunchArray[j] = k                          
        };
    };
    
    generate() {
        window.onload = () => {
        const button = document.getElementById('upper-box');
        button.addEventListener('click', () => {
                this.randomize();
                document.getElementById("lower-box").classList.add('show');
                document.getElementById('name-placeholder').innerHTML = this.lunchArray[0].lunchName;
                document.getElementById('image-placeholder').setAttribute('src',this.lunchArray[0].lunchImage);
                document.getElementById('link-placeholder').setAttribute('href',this.lunchArray[0].lunchLink);
            }
                )};
        }
    
    }


export const lunch = new lunchGenerator();