import { getDb } from "@/db";
import { studyDecks } from "@/db/schema";
import { getChatGPTUser } from "@/app/chatgpt-auth";

export async function POST(request:Request){
 const user=await getChatGPTUser();if(!user)return Response.json({error:"로그인이 필요해요."},{status:401});
 const body=await request.json() as {folderKey?:string;title?:string;kind?:string};const folderKey=body.folderKey?.trim(),title=body.title?.trim(),kind=body.kind?.trim().toUpperCase()||"RC";
 if(!folderKey||!title)return Response.json({error:"교재와 챕터 이름을 입력해줘."},{status:400});
 const key=`${folderKey}-${kind.toLowerCase()}-${Date.now()}`;const db=getDb();await db.insert(studyDecks).values({key,folderKey,title,kind});
 return Response.json({deck:{key,folderKey,title,kind}},{status:201});
}
