import { model, Schema } from "mongoose";
import { TService } from "./service.interfach";

const serviceModelSchema=new Schema<TService>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

export const Service=model<TService>('Service',serviceModelSchema)