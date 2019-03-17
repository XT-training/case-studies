import { containerWidth } from '../../assets/styles/variables';
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
    if (viewType === 'scrollDown') {
      dynamicAttr = {
        position: 'relative',
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
    };
    if (viewType === 'sidebar') {
      dynamicAttr = {
        height: '100vh',
        width: '400px',
        paddingTop: '16px',
        position: 'fixed',
        transitionDuration: '1s',
        right: '0px',
        overflowY: 'auto',
      };
    }
    if (viewType === 'scrollDown') {
      dynamicAttr = {
        position: 'absolute',
        left: '0',
        top: '10px',
        width: `calc(${containerWidth} - 32px)`,
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

  content(viewType) {
    let dynamicAttr = {};
    if (viewType === 'modal') {
      dynamicAttr = {
        display: 'flex',
        height: '600px',
        padding: '16px',
        overflowY: 'auto',
      };
    }
    return {
      textAlign: 'left',
      color: '#464646',
      ...dynamicAttr,
    };
  },
  column1: {
    flexBasis: '50%',
    paddingRight: '16px',
  },
  column2: {
    flexBasis: '50%',
    borderLeft: '1px solid #868686',
    paddingLeft: '16px',
  },
  heading: {
    margin: 0,
    padding: 0,
    fontSize: '24px',
  },
  topSection(viewType) {
    let dynamicAttr = {};
    if (viewType === 'sidebar') {
      dynamicAttr = {};
    }
    return {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      ...dynamicAttr,
    };
  },
  breadcrumb(viewType) {
    let dynamicAttr = {
      flexBasis: '100%',
    };
    if (viewType === 'modal') {
      dynamicAttr = {
        flexBasis: '50%',
      };
    }
    return {
      padding: 0,
      marginTop: 0,
      fontFamily: 'inherit',
      ...dynamicAttr,
    };
  },
  button(viewType) {
    let dynamicAttr = {
      flexBasis: '100%',
    };
    if (viewType === 'modal') {
      dynamicAttr = {
        flexBasis: '50%',
      };
    }
    return {
      background: '#658cb3',
      padding: '16px',
      color: '#fff',
      borderRadius: '4px',
      flex: '0 0 100%',
      cursor: 'pointer',
      marginBottom: '16px',
      ...dynamicAttr,
    };
  },
  summaryContainer: {
    display: 'flex',
    margin: '16px 0',
    flexWrap: 'wrap',
  },
  summaryLabel: {
    textAlign: 'right',
    flex: '0 0 calc(100% - 100px)',
    color: '#5656',
    textTransform: 'uppercase',
  },
  summaryKey: {
    flex: '0 0 100px',
    textAlign: 'right',
    paddingLeft: '16px',
    fontWeight: 'bold',
  },
  miscContainer(viewType) {
    let dynamicAttr = {};
    if (viewType === 'scrollDown') {
      dynamicAttr = {
        marginBottom: '16px',
      };
    }

    return {
      ...dynamicAttr,
    };
  },
};
