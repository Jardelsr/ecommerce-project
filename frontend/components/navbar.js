import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/cart">
        Cart
      </Link>
      <Link href="/login">
        Login
      </Link>
    </nav>
  );
}