enum PermissionEnum {
  'all',
  'authed',
  'ADMIN',
  'SUPERADMIN',
}

export type PermissionList = keyof typeof PermissionEnum;

export type PermissionListArray = Array<keyof typeof PermissionEnum>;
