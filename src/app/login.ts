import { Cart } from "./cart"

export interface Login {
    id:number,
    username:String,
    passw:String
    cart:Cart[]
}
