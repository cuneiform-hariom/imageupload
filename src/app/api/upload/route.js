import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
    const data = await req.formData()
    const file = data.get("file")
    if (!file) {
        return NextResponse.json({
            msg: "file not found"
        });
    }
    const bytedata = await file.arrayBuffer()
    const buffer = Buffer.from(bytedata);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);
    return NextResponse.json({
        msg: "File uploaded successfully"
    });
}
