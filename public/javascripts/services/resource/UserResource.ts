import User from "../../model/User";
export interface UserResource extends ng.resource.IResource<User>, User {

}