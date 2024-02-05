const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // ваша конфигурация
};

module.exports = withNextIntl(nextConfig);