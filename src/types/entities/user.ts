import { PermissionList } from './permission-list';

export type User = {
  id: string;
  nama: string;
  email: string;
  permission: PermissionList;
  divisiId: number;
};

export type WithToken = {
  token: string;
};
