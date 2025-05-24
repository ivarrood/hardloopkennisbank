import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow mb-8">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Hardloop Kennisbank
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/trainingsleer" className="hover:text-primary transition-colors">Trainingsleer</Link>
          </li>
          <li>
            <Link href="/energiesystemen" className="hover:text-primary transition-colors">Energiesystemen</Link>
          </li>
          <li>
            <Link href="/looptechniek" className="hover:text-primary transition-colors">Looptechniek</Link>
          </li>
          <li>
            <Link href="/training-geven" className="hover:text-primary transition-colors">Training Geven</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 