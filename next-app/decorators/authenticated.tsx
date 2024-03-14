import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function isAuthenticated() {
    if(!cookies().get('loggedIn')) {
        redirect('/account/login')
    }
    return
}