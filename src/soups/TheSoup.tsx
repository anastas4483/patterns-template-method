import { TemplateSoup } from "../models/TemplateSoup";

export class TheSoup extends TemplateSoup {
    protected prepareIngridients(): void {
        console.log('Нарезаем морковь, лук, обжариваем на скоровородке. Режем картошку кубиками');
    }

    protected cookTheMeat(): void {
        console.log('Варим курицу час. Курицу нарезаем на кусочки');
    }

    protected addIngridientsToPot(): void {
        console.log('В бульон добавляем овощи');
    }

    protected languor(): void {
        console.log('Варим 20 минут. Солим перчим');
    }

}