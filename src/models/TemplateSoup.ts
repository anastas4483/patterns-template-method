export abstract class TemplateSoup {

    protected abstract prepareIngridients(): void;
    protected abstract cookTheMeat(): void;
    protected abstract addIngridientsToPot(): void;
    protected abstract languor(): void;  // Томление

    private pourIntoPlase() {
        console.log('Готово! Разливаем по тарелкам. Приятного аппетита!');
    }

    cookSoup() {
        this.prepareIngridients();
        this.cookTheMeat();
        this.addIngridientsToPot();
        this.languor();
        this.pourIntoPlase();
    }
}