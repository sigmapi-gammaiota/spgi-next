import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export type Roles = 'ALL' | 'ADMIN' | 'EC' | 'BROTHER' | 'NM';

export class PrivateLink {
  href: String = '';
  text: String = '';
  roles: Roles[] = [];
  constructor(href: String, text: String, roles: Roles[]) {
    this.href = href;
    this.text = text;
    this.roles = roles;
  }
}

export const AllPrivateLinks: Readonly<PrivateLink[]> = [
  new PrivateLink('/private', 'Home', ['ALL']),
  new PrivateLink('/private/parties', 'Parties', ['ALL']),
];
