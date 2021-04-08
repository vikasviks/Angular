import { IProduct } from "../product/IProduct";

export interface IPurchaseItem{
    Pid:number,
    Ptitle:string,
    Pdate:string,
    Pvendorname:string,
    Items: IProduct[]
}
