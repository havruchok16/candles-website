import sea from "../../src/img/seaSaltAndOrchid.png";
import pl from "../../src/img/plumAndRhubarb.png"; 
import tbvan from "../../src/img/tobaccoAndVanilla.png"; 
import tbcar from "../../src/img/tobaccoAndCaramel.png"; 

/* interface IBestsellerItem {
    image: String;
    name: String;
    price: number;
    isLiked: Boolean;
    priceValuta?: string; // TODO: if exist then use, else default byn
} */

export const BestsellerListData = [
    {
        imgUrl: sea,
        name: "Мор. соль / Орхидея",
        price: 20,
        lifeTime: 6,
        isLiked: false
    },
    {
        imgUrl: pl,
        name: "Слива / Ревень",
        price: 25,
        lifeTime: 8,
        isLiked: true
    },
    {
        imgUrl: tbvan,
        name: "Табак / Ваниль",
        price: 30,
        lifeTime: 5,
        isLiked: false
    },
    {
        imgUrl: tbcar,
        name: "Табак / Карамель",
        price: 35,
        lifeTime: 7,
        isLiked: false,
        // valute: "usd"
    }
]