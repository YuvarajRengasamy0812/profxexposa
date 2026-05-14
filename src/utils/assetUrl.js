const buildVersion = process.env.REACT_APP_BUILD_VERSION;

export const buildAssetUrl = (assetPath) => {
  const normalizedPath = (assetPath.startsWith('/') ? assetPath : `/${assetPath}`).replace(/\/{2,}/g, '/');
  const baseUrl = `${process.env.PUBLIC_URL || ''}${normalizedPath}`;

  if (!buildVersion) {
    return baseUrl;
  }

  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}v=${buildVersion}`;
};
