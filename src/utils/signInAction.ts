"use server";
import { signIn } from "@/services/auth";

export async function signInAction(provider: "google" | "facebook") {
  await signIn(provider, { redirectTo: "/products" });
}
