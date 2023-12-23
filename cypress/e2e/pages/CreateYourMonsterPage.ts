import FakerUtils from "../../utils/FakerUtils"

class CreateYourMonsterPage {

    elements = {
        appName: () => cy.get('[data-testid="app-name"]'),
        dynamicTitle: () => cy.get('[data-testid="dynamic-title"]'),
        createMonsterBnt: () => cy.get('[data-testid="btn-create-monster"]'),
        alertMessage: () => cy.get('.MuiAlert-message'),
        monsterNameField: () => cy.get('[data-testid="monster-name"]'),
        hpField: () => cy.get('[data-testid="hp-value"]'),
        attackField: () => cy.get('[data-testid="attack-value"]'),
        defenseField: () => cy.get('[data-testid="defense-value"]'),
        speedField: () => cy.get('[data-testid="speed-value"]'),
        monsterHorse: () => cy.get('[data-testid="monster-1"] > .css-wq9gtt'),
        monsterShark: () => cy.get('[data-testid="monster-2"] > .css-wq9gtt'),
        monsterDragon: () => cy.get('[data-testid="monster-3"] > .css-wq9gtt'),
        monsterRobotBear: () => cy.get('[data-testid="monster-4"] > .css-wq9gtt'),
        monsterSnake: () => cy.get('[data-testid="monster-5"] > .css-wq9gtt'),
        createdMonster: () => cy.get('[data-testid="monster-card"]'),
        favoriteBtn: () => cy.get('[data-testid="favorite-btn"]'),
        deleteBtn: () => cy.get('[data-testid="btn-delete"]')
    }

    checkLoadedPage() {
        this.elements.appName().should('have.text', 'Create your monster')
    }

    checkThereIsNoMonstersTitle() {
        this.elements.dynamicTitle().should('have.text', 'There are no monsters')
    }

    checkYourMonstersTitle() {
        this.elements.dynamicTitle().should('have.text', 'Your Monsters')
    }

    clickCreateMonsterBnt() {
        this.elements.createMonsterBnt().click()
    }

    checkAlertMessage() {
        this.elements.alertMessage().should('be.visible')
    }

    checkValidInputMessage() {
        this.elements.alertMessage().should('be.visible')
    }

    selectHorse() {
        this.elements.monsterHorse().click();
    }
    
    selectShark() {
        this.elements.monsterShark().click();
    }
    
    selectDragon() {
        this.elements.monsterDragon().click();
    }
    
    selectRobotBear() {
        this.elements.monsterRobotBear().click();
    }
    
    selectSnake() {
        this.elements.monsterSnake().click();
    }
      
    typeMonsterName() {
        this.elements.monsterNameField().type(FakerUtils.getRandomMonsterName())
    }

    typeHp() {
        this.elements.hpField().type(FakerUtils.getRandomNumber().toString())
    }

    typeAttack() {
        this.elements.attackField().type(FakerUtils.getRandomNumber().toString())
    }

    typeDefense() {
        this.elements.defenseField().type(FakerUtils.getRandomNumber().toString())
    }

    typeSpeed() {
        this.elements.speedField().type(FakerUtils.getRandomNumber().toString())
    }

    fillOutMonsterFeatures() {
        this.typeMonsterName()
        this.typeHp()
        this.typeAttack()
        this.typeDefense()
        this.typeSpeed()
    }

    typeOverLimitHp() {
        this.elements.hpField().type(FakerUtils.getOverLimitNumber().toString())
    }

    typeOverLimitAttack() {
        this.elements.attackField().type(FakerUtils.getOverLimitNumber().toString())
    }

    typeOverLimitDefense() {
        this.elements.defenseField().type(FakerUtils.getOverLimitNumber().toString())
    }

    typeOverLimitSpeed() {
        this.elements.speedField().type(FakerUtils.getOverLimitNumber().toString())
    }

    checkCreatedMonster() {
        this.elements.createdMonster().should('be.visible')
    }
    
    markCardAsFavorite() {
        this.elements.favoriteBtn().click({ multiple: true })
    }

    unfavoriteCard() {
        this.elements.favoriteBtn().click({ multiple: true })
    }

    deleteCard() {
        this.elements.deleteBtn().click({ multiple: true, timeout: 5000  })
    }


}
export default new CreateYourMonsterPage()