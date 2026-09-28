import { redirect } from "next/navigation";

export default function N2LegacyRedirectPage() {
  redirect("/vocabulary?level=N2");
}
