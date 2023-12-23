import {faker} from '@faker-js/faker' 

class FakerUtils {

    getRandomMonsterName() {
        return faker.lorem.word()
    }

    getRandomNumber() {
        return faker.number.int({ min: 1, max: 100 })
    }

    getOverLimitNumber() {
        return faker.number.int({ min:101, max:199 })
    }
   
}

export default new FakerUtils()