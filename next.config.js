const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // output: 'export',
};

module.exports = withNextIntl(nextConfig);