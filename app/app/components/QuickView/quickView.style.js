export default {
  labelLink: {
    color: '#0366d6',
    cursor: 'pointer',
    fontSize: '14px',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  overlay(viewType) {
    let dynamicAttr = {
      display: 'flex',
      borderRadius: '8px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      boxShadow: '1px 1px 6px rgba(0, 0, 0, 0.3)',
    };
    if (viewType === 'sidebar') {
      dynamicAttr = {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
      };
    }
    return {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9,
      position: 'fixed',

      ...dynamicAttr,
    };
  },
  quickviewMain(viewType) {
    let dynamicAttr = {
      borderRadius: '8px',
      width: '1000px',
      height: '400px',
    };
    if (viewType === 'sidebar') {
      dynamicAttr = {
        height: '100vh',
        width: '400px',
        paddingTop: '32px',
        position: 'fixed',
        transitionDuration: '1s',
        right: '0px',
      };
    }
    return {
      padding: '16px',
      position: 'relative',
      backgroundColor: '#FFF',
      boxShadow: '1px 1px 6px rgba(0, 0, 0, 0.3)',

      ...dynamicAttr,
    };
  },
  slideOut: {
    backgroundColor: 'darkgreen',
    color: 'turquoise',
    right: '0',
  },
  closeIcon(viewType) {
    let dynamicAttr = {
      right: '-26px',
      top: '-26px',
      color: '#ddd',
    };
    if (viewType === 'sidebar') {
      dynamicAttr = {
        top: '8px',
        right: '16px',
        color: '#777',
      };
    }
    return {
      position: 'absolute',
      fontSize: '30px',
      lineHeight: '1',
      padding: '0',
      cursor: 'pointer',

      ...dynamicAttr,
    };
  },
};
