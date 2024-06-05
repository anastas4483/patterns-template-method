import { TemplateSoup } from "../models/TemplateSoup";

export class OkroshkaSoup extends TemplateSoup {
    protected prepareIngridients() {
        console.log('Нарезаем огурец, яйцо, редиска, зелень');
    }

    protected cookTheMeat() {
        console.log('Нарезаем колбаску кубиками');
    }

    protected addIngridientsToPot() {
        console.log('Закидываем все в кострюлю в хаотичном порядке');
    }

    protected languor() {
    }
}