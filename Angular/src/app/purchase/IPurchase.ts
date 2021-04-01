import { IProduct } from "../product/Iproduct";

export interface IPurchase{
    Purchase_Id:number,
    Purchase_Item_Name:string,
    Purchase_Date:string,
    Vendor_Name:string,
    Items:IProduct[]
}