import { ChickenNoodlesSoup } from '../../soups/ChickenNoodlesSoup';
import { OkroshkaSoup } from '../../soups/OkroshkaSoup';
import { TheSoup } from '../../soups/TheSoup';

export const RecipesPage = () => {

    const cookOkroshka = () => {
        const okroshka = new OkroshkaSoup();
        okroshka.cookSoup();
    };

    const cookTheSoup = () => {
        const theSoup = new TheSoup();
        theSoup.cookSoup();
    };

    const cookChickenNoodles = () => {
        const okroshka = new ChickenNoodlesSoup();
        okroshka.cookSoup();
    };

    return (
        <div>
            Выберите блюдо
            <button onClick={cookOkroshka}>Окрошка</button>
            <button onClick={cookTheSoup}>Суп</button>
            <button onClick={cookChickenNoodles}>Куриная лапша</button>
        </div>
    );
};
