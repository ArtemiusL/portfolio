const getActiveRouteIndex = (pathname, navigations) => (
  navigations.findIndex((el) => {
    if (pathname === '/' && el.link === '/') {
      return true;
    }
    return pathname.includes(el.link !== '/' && el.link.slice(1, -1));
  })
);

export default getActiveRouteIndex;
