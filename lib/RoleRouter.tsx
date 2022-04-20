import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type Roles = "ALL" | "ADMIN" | "EC" | "BROTHER" | "NM";

export class PrivateLink {
  href: String = "";
  text: String = "";
  roles: Roles[] = [];
  constructor(href: String, text: String, roles: Roles[]) {
    this.href = `/private/${href}`;
    this.text = text;
    this.roles = roles;
  }
}

export const AllPrivateLinks: Readonly<PrivateLink[]> = [
  new PrivateLink("/", "Home", ["ALL"]),
  new PrivateLink("/admin", "Admin", ["ADMIN"]),
];
/**
 *
 * @param prisma PrismaClient from calling function
 * @param email User email to search for
 * @returns List of Roles, empty when user not found or user has no roles
 */
export async function getUserRoles(
  prisma: PrismaClient,
  email: string
): Promise<Roles[]> {
  let userRoles = await prisma.user.findFirst({
    where: { email: email },
    select: { roles: true },
  });
  let returnRoles: Roles[] = [];

  userRoles?.roles.forEach((element) => {
    returnRoles.push(element as Roles);
  });

  return returnRoles;
}
