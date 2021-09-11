import User from "../models/user";
import MapperInterface from "./mapper.interface";

export default class UserMapper implements MapperInterface<User> {
    mapFromJson(json: any): User {
        return new User(
            json['id'],
            json['firstName'],
            json['lastName'],
            json['email'],
            json['phone'],
            json['gender'],
            json['title'],
            json['picture']
        )
    }

    mapFromList(json: any): User[] {
        console.log(json);
        
        const list: User[] = [];
        if (json) {
            json.forEach((element: any) => {
                list.push(this.mapFromJson(element));
            });
        }

        return list;
    }
}