export type AuthUserType = {
  id?: number;
  uid?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  token?: string;
  role?: string[] | string;
};

export type UserData = {
  id?: number;
  firstName: String;
  lastName: String;
  email: string;
  role?: String;
  employeeId: string;
  imageUrl?: string;
  phoneNumber: string;
  linkedinAdress: string;
  resume: string;
  experience: string;
};

export type Projectdatatype={
  id?:number;
  name?:string;
  
  duration?:string;
  resource?:string;
  projectType?:string;
  approvalStatus ?:string;
  projectStatus?:string;
  noofsprint?:number;
  releaseDate?: any;

}

export type getId={
  id?:number;
}
