import Head from 'next/head';

import Breadcrumbs from '@/common/Breadcrumbs';
import { Hero } from '@/common/Hero';

type SEO = {
  title: string;
  description?: string;
};

type breadcrumbsItem = {
  text: string;
  href: string;
};

type Props = {
  seo: SEO;
  pageSubtitle?: string | React.ReactNode;
  pageTitle: string | React.ReactNode;
  pageSummary?: string | React.ReactNode;
  pageLink?: {
    href: string;
    text: string;
    external: boolean;
    type: 'primary' | 'secondary';
  }[];
  breadcrumbs?: breadcrumbsItem[];
  showBanner?: boolean;
  heroOptions?: {
    background?: string;
    image?: string;
    minimal?: boolean;
  };
  children?: React.ReactNode;
};

export default function PageLayout({
  seo,
  pageSubtitle,
  pageTitle,
  pageSummary,
  pageLink,
  breadcrumbs,
  showBanner = true,
  heroOptions,
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>
          {seo.title} | {process.env.APP_NAME}
        </title>
        <meta
          property="og:title"
          content={`${seo.title} | ${process.env.APP_NAME}`}
          key="title"
        />
        {seo.description ? (
          <>
            <meta
              name="description"
              content={seo.description}
              key="description"
            />
            <meta
              name="og:description"
              content={seo.description}
              key="og-description"
            />
          </>
        ) : null}
      </Head>
      {showBanner ? (
        <Hero
          title={pageTitle}
          description={
            pageSubtitle || pageSummary ? (
              <>
                {pageSubtitle ? (
                  <>
                    {typeof pageSubtitle === 'string' ? (
                      <h2>{pageSubtitle}</h2>
                    ) : (
                      pageSubtitle
                    )}
                  </>
                ) : null}
                {pageSummary ? (
                  <>
                    {typeof pageSummary === 'string' ? (
                      <p>{pageSummary}</p>
                    ) : (
                      pageSummary
                    )}
                  </>
                ) : null}
              </>
            ) : undefined
          }
          link={pageLink || undefined}
          image={heroOptions?.image}
          heroBg={heroOptions?.background}
          minimal={heroOptions?.minimal}
        />
      ) : null}
      <div className="page-contents">
        <div className="wrap">
          <div className="page-contents__inner">
            {!showBanner && breadcrumbs ? (
              <div className="page-banner__breadcrumbs">
                <Breadcrumbs items={breadcrumbs} />
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
