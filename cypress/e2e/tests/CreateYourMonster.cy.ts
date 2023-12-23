import { Context } from "mocha"
import CreateYourMonsterPage from "../pages/CreateYourMonsterPage"

describe('Create Your Monster - E2E', function() {
    
    beforeEach(function() {
        cy.visit('http://localhost:3000')
    })

    it('Check loaded application', ()=> {
        CreateYourMonsterPage.checkLoadedPage()
    } )

    it('Submit a card with empty form and without selecting a Monster', ()=> {
        CreateYourMonsterPage.clickCreateMonsterBnt()
        CreateYourMonsterPage.checkAlertMessage()
    } )


    it('Mandatory fields validations', () => {
        CreateYourMonsterPage.selectHorse()
        CreateYourMonsterPage.typeMonsterName()
        CreateYourMonsterPage.clickCreateMonsterBnt()
        CreateYourMonsterPage.checkAlertMessage()
    })

    it('Validating the range of the Hp, Attack, Defense and Speed fields ', () => {
        CreateYourMonsterPage.typeOverLimitHp()
        CreateYourMonsterPage.checkValidInputMessage()

        CreateYourMonsterPage.typeOverLimitAttack()
        CreateYourMonsterPage.checkValidInputMessage()

        CreateYourMonsterPage.typeOverLimitDefense()
        CreateYourMonsterPage.checkValidInputMessage()

        CreateYourMonsterPage.typeOverLimitSpeed()
        CreateYourMonsterPage.checkValidInputMessage()
    })

    it('Creating and Deleting Monster cards', () => {
        CreateYourMonsterPage.selectHorse()
        CreateYourMonsterPage.fillOutMonsterFeatures()
        CreateYourMonsterPage.clickCreateMonsterBnt()
        CreateYourMonsterPage.checkCreatedMonster()
        CreateYourMonsterPage.markCardAsFavorite()
        CreateYourMonsterPage.unfavoriteCard()

        CreateYourMonsterPage.checkYourMonstersTitle()

        CreateYourMonsterPage.deleteCard()
       
        CreateYourMonsterPage.selectShark()
        CreateYourMonsterPage.fillOutMonsterFeatures()
        CreateYourMonsterPage.clickCreateMonsterBnt()
        CreateYourMonsterPage.checkCreatedMonster()
        CreateYourMonsterPage.markCardAsFavorite()
        CreateYourMonsterPage.unfavoriteCard()

        CreateYourMonsterPage.deleteCard()

        CreateYourMonsterPage.selectDragon()
        CreateYourMonsterPage.fillOutMonsterFeatures()
        CreateYourMonsterPage.clickCreateMonsterBnt()
        CreateYourMonsterPage.checkCreatedMonster()
        CreateYourMonsterPage.markCardAsFavorite()
        CreateYourMonsterPage.unfavoriteCard()

        CreateYourMonsterPage.deleteCard()

        CreateYourMonsterPage.checkThereIsNoMonstersTitle()
    })
    
})








