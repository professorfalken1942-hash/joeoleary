import PasswordProtect from "@/components/PasswordProtect";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <PasswordProtect>{children}</PasswordProtect>;
}
