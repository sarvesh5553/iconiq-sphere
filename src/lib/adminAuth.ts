export const ADMIN_EMAIL = "iconiq@gmail.com";

export const ADMIN_PASSWORD = "12345";

export function isValidAdminCredentials(
  email: string,
  password: string
) {
  return (
    email.trim().toLowerCase() === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  );
}