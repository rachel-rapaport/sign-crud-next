import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connect();
        const { email, password } = await request.json();
        
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // בדיקה אם הסיסמא נכונה
        if (user.password !== password) {
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        }

        // אם הכל בסדר, מחזירים את השם
        return NextResponse.json({ name: user.name }, { status: 200 });
    } catch (error) {
        console.error("Error during authentication:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
