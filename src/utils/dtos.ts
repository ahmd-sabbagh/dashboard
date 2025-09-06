export interface USERTABLEDATA {
  id: string;
  image: string;
  name: string;
  gender?: string;
  country?: string;
  subscribe?: string;
  email?: string;
  role_and_authority?: string;
  status: string;
  status_: string;
  join_date: string;
}

export interface CHILDREN {
  children: React.ReactNode;
}
