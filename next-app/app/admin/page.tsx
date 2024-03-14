import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function generateString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export default function AdminHome() {
    async function addEvent() {
        'use server';
        const client = new PrismaClient();

        try {
            await client.event.create({
                data: {
                    capacity: 1000,
                    category: generateString(20),
                    date: new Date(),
                    available_space: 1000,
                    title: generateString(30),
                    price: 0,
                    description: generateString(300),
                    registration_deadline: new Date("2025-01-01")
                }
            })
    
            revalidatePath('/')
            redirect('/')
        } catch(e: any) {
            console.log(e);
            redirect('/')
        }
    }

    return <div>
        <h1>Admin home</h1>
        <form action={addEvent}>
            <button>Create Event!</button>
        </form>
    </div>
}