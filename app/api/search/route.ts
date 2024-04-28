import { departments } from "@/lib/courses";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("search");

    // Filter departments based on the search query
    const departmentsData = departments.filter(dep => 
        dep.name.toLowerCase().includes(query?.toLowerCase() || "") || 
        dep.code.toLowerCase().includes(query?.toLowerCase() || "")
    );

    return NextResponse.json(departmentsData);
}
