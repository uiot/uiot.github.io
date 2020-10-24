
import Members from "../texts/Members.js"

let members = Members

export class filterMembers {
    constructor() {  }

    byKey(key){
        let idx = members.findIndex(function(item){ return item.key == key })
        return members[idx].name
    }
    
    byArea(area){
        return members.filter(function(item){ 
            return item.lab.area == area && item.belong == true
        })
    }

}