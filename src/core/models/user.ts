import { Gender } from "../helper/enum";

export default class User {
    constructor (
        public id: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public phone: string = '',
        public gender: Gender = Gender.Male,
        public title: string = '',
        public picture: string = ''
    ) { }

    get userName() {
        return this.firstName + ' ' + this.lastName;
    }
}