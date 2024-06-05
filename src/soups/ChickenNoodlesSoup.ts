import { TemplateSoup } from "../models/TemplateSoup";

export class ChickenNoodlesSoup extends TemplateSoup {
    protected prepareIngridients() {
        console.log('Обжариваем лапшу на сковородке');
    }

    protected cookTheMeat() {
        console.log('Варим мясо');
    }

    protected addIngridientsToPot() {
        console.log('Добавляем к мясу макароны');
    }
    protected languor() {
        console.log('Варим 10 минут');
    }
}