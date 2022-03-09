import {Request, Response} from "express";
import {User} from "../types/User";
import {LoginData} from "../types/LoginData";
import {UserModel} from "../models/userModel";

export const getUsers = async (request: Request, response: Response) => {
    let users: User[] = await new UserModel().getUsers();
    response.send(users)
}

export const login = (request: Request, response: Response) => {
    const loginData: LoginData = request.query;
    if (!loginData.username || !loginData.password) {
        return response.send({
            status: 400,
            message: "Username or Password not provided"
        })
    }

    response.send({
        status: 200,
        message: "Logged in successfully"
    })
}