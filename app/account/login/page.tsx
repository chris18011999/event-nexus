import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function handleSubmit() {
    'use server';
    cookies().set('loggedIn', 'true');
    redirect('/account/dashboard')
}

export default function Page_AccountLogin() {

  if(cookies().get('loggedIn')) {
    redirect('/account/dashboard')
  }
  return (
    <form action={handleSubmit}>
      <button className="primary">Login</button>
    </form>
  );
}
