import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type Roles = "ALL" | "ADMIN" | "EC" | "BROTHER" | "NM";

export class PrivateLink {
  href: String = "";
  text: String = "";
  roles: Roles[] = [];
  constructor(href: String, text: String, roles: Roles[]) {
    this.href = href;
    this.text = text;
    this.roles = roles;
  }
}

export const AllPrivateLinks: Readonly<PrivateLink[]> = [
  new PrivateLink("/", "Home", ["ALL"]),
  new PrivateLink("/admin", "Admin", ["ADMIN"])
];

export async function checkRoleAccess(prisma:PrismaClient,email:string,roles:[Roles]){
  let userRoles = await prisma.user.findFirst({where:{email:email}, select:{roles:true}})
  //TODO: return if user roles match function input param roles
}