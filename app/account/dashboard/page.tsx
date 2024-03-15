import { isAuthenticated } from "@/decorators/authenticated";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page_AccountDashboard() {
    if(!cookies().get('loggedIn')) {
        redirect('/account/login')
    }

    return <h1>Welcome to your dashboard</h1>
}