"use server";
import {  signOut } from "@/services/auth";

export async function signOutAction() {
    await signOut({ redirectTo: "/" });

}