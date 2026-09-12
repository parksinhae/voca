import { and, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { bookmarks } from "@/db/schema";
import { getChatGPTUser } from "@/app/chatgpt-auth";

export async function POST(request:Request){
 const user=await getChatGPTUser(); if(!user)return Response.json({error:"로그인이 필요해요."},{status:401});
 const {wordId,bookmarked}=await request.json() as {wordId?:number;bookmarked?:boolean};
 if(!Number.isInteger(wordId)||typeof bookmarked!=="boolean")return Response.json({error:"잘못된 저장 요청이에요."},{status:400});
 const db=getDb();
 if(bookmarked)await db.insert(bookmarks).values({userId:user.userId,wordId:wordId!}).onConflictDoNothing();
 else await db.delete(bookmarks).where(and(eq(bookmarks.userId,user.userId),eq(bookmarks.wordId,wordId!)));
 return Response.json({ok:true,bookmarked});
}
