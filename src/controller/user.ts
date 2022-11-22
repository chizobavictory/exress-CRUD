import { Request, Response } from "express";
import { createUser, createHotelListing , getUserById, getUserListing} from '../services/user'

export const registerUser = async (req: Request, res: Response) => {
    let payload = req.body
    try {
        const user = await createUser(payload)
        res.status(200).json({ message: "User successfully created", data: user });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }

};

export const getUser = async (req: Request, res: Response) => {
    let userId = req.body.userId;
    try {
        let user = await getUserById(userId)
        res.status(200).json({ message: "User successfully retrieved", data: user });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }

};

export const createHotelList = async (req: Request, res: Response) => {
    const payload = req.body;
    try {
        const data = await createHotelListing(payload)
        res.status(200).json({ message: "hostel list successfully created", data });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }

};


export const getUserListings = async (req: Request, res: Response) => {
    let userId = req.params.userId;

    try {
        const data = await getUserListing(userId)
        res.status(200).json({ message: "hostel list successfully retrieved", data });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }

};