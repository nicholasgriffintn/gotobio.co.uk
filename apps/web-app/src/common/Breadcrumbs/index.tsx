import Link from '@/common/Link';

interface Props {
  items?: { text: string; href: string }[];
}

export default function Breadcrumbs({ items = [] }: Props) {
  const allItems = [
    {
      text: 'Home',
      href: '/',
    },
    ...items,
  ];

  return (
    <ol className="breadcrumbs">
      {allItems.map(({ text, href }) => (
        <li key={href} className="breadcrumbs__item">
          <Link href={href}>
            <a>{text}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
}
