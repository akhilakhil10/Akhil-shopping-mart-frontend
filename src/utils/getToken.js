  export const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookieArr = document.cookie.split(';');
  
    for(let i = 0; i < cookieArr.length; i++) {
      let cookie = cookieArr[i].trim();

      console.log('cookie',cookie);
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }
  