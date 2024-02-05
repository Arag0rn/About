const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  output: 'export',
  generateStaticParams: async () => {

    return {
      paths: [
        { params: { locale: 'en' } },
        { params: { locale: 'de' } },
    
      ],
      fallback: false,
    };
  },
 
});