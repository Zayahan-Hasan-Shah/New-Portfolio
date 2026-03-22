import { Helmet } from 'react-helmet-async';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Resume } from './components/sections/Resume';
import { Skills } from './components/sections/Skills';
import { Testimonials } from './components/sections/Testimonials';
import { SITE } from './utils/constants';

function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    jobTitle: SITE.role,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'Pakistan',
    },
    url: SITE.canonicalUrl,
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${SITE.name} | Portfolio`}</title>
        <meta name="description" content={SITE.description} />
        <link rel="canonical" href={SITE.canonicalUrl} />

        <meta property="og:title" content={`${SITE.name} | Portfolio`} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.canonicalUrl} />
        <meta property="og:image" content={SITE.ogImagePath} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE.name} | Portfolio`} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={SITE.ogImagePath} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <About />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App
