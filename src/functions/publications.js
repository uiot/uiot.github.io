
import Publications from "../texts/Publications.js"

let publications = Publications

export class filterPublications {
    constructor() {  }

    getYears(){
        let arr_ret = []
        publications.map(function(item){ if( arr_ret.indexOf(item.year) === -1 ){ arr_ret.push(item.year) }  })
        return arr_ret
    }

    byYears(years){
        return publications.filter(function(item){  if(years.indexOf(item.year) !== -1 ){ return item } })
    }
}