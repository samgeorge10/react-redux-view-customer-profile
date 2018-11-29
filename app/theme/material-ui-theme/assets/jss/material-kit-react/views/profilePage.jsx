import { container, cardTitle, title } from "../../../../assets/jss/material-kit-react.jsx";

import imagesStyle from "../../../../assets/jss/material-kit-react/imagesStyles.jsx";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    // height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    // color: "#999"
  },
  cardTitle: {
    textAlign: "center",
    fontFamily: "'Roboto Slab', 'Times New Roman', serif",
    fontWeight: '700',
    color: '#3C4858'
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  order: {
    textAlign: "center",
    display: "flex",
    border: "0",
    boxShadow: 
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    color: "##000000de",
    background: "#fff",
    borderRadius: "6px",
    marginBottom: "20px",
    marginTop: "20px",
    flexDirection: "column",
    position: "relative",
    wordWrap: "break-word",
    fontSize: "14px",
    "& img": {
      width: "100%",
      margin: "0 auto"
    }
  },
  orderImage: {
    zIndex: "1",
    padding: "0",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-20px",
    position: "relative",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      margin: "0 auto"
    }
  },
  orderContent: {

  },
  profileMap: {
    width: "100%",
    height: "250px",
    merginLeft: "auto",
    marginRight: "auto"
  }
};

export default profilePageStyle;
