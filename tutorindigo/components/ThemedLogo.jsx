
const ThemedLogo = () => {
  const BASE_URL = getConfig().LMS_BASE_URL;

  return (
    <>
      <style>
        {`
          /* brand-openedx sets a 48px logo height with more specific
             selectors, including [data-paragon-theme-variant=dark] ones */
          #root header.site-header-desktop .logo .logo-image,
          #root header.learning-header .logo .logo-image {
            height: 2rem !important;
            width: auto;
          }
          #root header.site-header-mobile .logo .logo-image {
            height: 1.75rem !important;
            width: auto;
          }
          /* Both images must share the same display type, otherwise the
             header layout shifts when the theme changes */
          #root header .logo {
            display: flex;
            align-items: center;
          }
          #root header .logo .logo-image {
            display: block;
          }
          #root header .logo .logo-image.logo-white {
            display: none;
          }
          [data-paragon-theme-variant="dark"] #root header .logo .logo-image {
            display: none;
          }
          [data-paragon-theme-variant="dark"] #root header .logo .logo-image.logo-white {
            display: block;
          }
        `}
      </style>
      <a href={`${BASE_URL}/dashboard`} title="Open edX" className="logo">
        <img className="logo-image" src={`${BASE_URL}/static/indigo/images/logo.png`} alt="Open edX" />
        <img className="logo-image logo-white" src={`${BASE_URL}/static/indigo/images/logo-white.png`} alt="Open edX" />
      </a>
    </>
  );
};
