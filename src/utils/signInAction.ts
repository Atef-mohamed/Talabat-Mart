"use server";
import { signIn } from "@/services/auth";

export async function signInAction() {
    await signIn("google", { redirectTo: "/products" });

}