import Link from 'next/link';

export default function Page() {
  const routes = [
    { url: '/semestr3/progstruk', name: 'Programowanie strukturalne' },
  ];

  return (
    <div>
      {routes.map((route) => {
        return (
          <Link key={route.name} href={route.url}>
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
