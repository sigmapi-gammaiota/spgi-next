import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export type Roles = 'ALL' | 'ADMIN' | 'EC' | 'BROTHER' | 'NM';
export type PrivateLinkGroup =
  | 'HOME'
  | 'PARTIES'
  | 'STANDARDS'
  | 'SCHOLARSHIP'
  | 'ARCHIVES';

export class PrivateLink {
  text: string = '';
  href: string = '';
  roles: Roles[] = [];
  group: PrivateLinkGroup;
  constructor(
    text: string,
    href: string,
    roles: Roles[],
    group: PrivateLinkGroup
  ) {
    this.text = text;
    this.href = href;
    this.roles = roles;
    this.group = group;
  }
}

export const AllPrivateLinks: Readonly<PrivateLink[]> = [
  new PrivateLink('Home', '/private', ['ALL'], 'HOME'),
  new PrivateLink('All Parties', '/private/parties', ['ALL'], 'PARTIES'),
  new PrivateLink(
    'Blacklist / Graylist',
    '/private/parties/restricted-guests',
    ['ALL'],
    'PARTIES'
  ),
  new PrivateLink(
    'Manage Parties',
    '/private/parties/manage',
    ['ADMIN'],
    'PARTIES'
  ),
  new PrivateLink('Add Party', '/private/parties/add', ['ADMIN'], 'PARTIES'),
  new PrivateLink(
    'Overview',
    '/private/standards/overview',
    ['ALL'],
    'STANDARDS'
  ),
  new PrivateLink(
    'Manage Summons',
    '/private/standards/manage',
    ['ADMIN'],
    'STANDARDS'
  ),
  new PrivateLink(
    'Summons Requests',
    '/private/standards/requests',
    ['ADMIN'],
    'STANDARDS'
  ),
  new PrivateLink(
    'Library',
    '/private/scholarship/library',
    ['ALL'],
    'SCHOLARSHIP'
  ),
  new PrivateLink(
    'Academic Resources',
    '/private/scholarship/resources',
    ['ALL'],
    'SCHOLARSHIP'
  ),
  new PrivateLink(
    'Approve Content',
    '/private/scholarship/approve',
    ['ADMIN'],
    'SCHOLARSHIP'
  ),
  new PrivateLink('Bylaws', '/private/archives/bylaws', ['ALL'], 'ARCHIVES'),
  new PrivateLink(
    'Guides / Files',
    '/private/archives/guides',
    ['ALL'],
    'ARCHIVES'
  ),
];
