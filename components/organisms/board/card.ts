import { styled } from "stitches.config";

export const ListCards = styled("div", {
    flex: "1 1 auto",
    margin: "0 4px",
    overflowX: "hidden",
    overflowY: "auto",
    padding: "0 4px",
    minHeight: 0,
    zIndex: 1,
  });

export const ListCard = styled("div", {
    backgroundColor: "#fff",
    borderRadius: "3px",
    boxShadow: "0 1px 0 #091e4240",
    cursor: "pointer",
    display: "block",
    marginBottom: "8px",
    maxWidth: "300px",
    minHeight: "20px",
    position: "relative",
    textDecoration: "none",
    zIndex: 0,
  });

  export const CardDetails = styled('div', {
      overflow: 'hidden',
      padding: '6px 8px 2px',
      position: 'relative',
      zIndex: 10,
      display: 'block',
  })

  export const CardLabels = styled('div', {
      overflow: 'hidden',
      position: 'relative'
  });

  const CardLabel = styled('span', {
      display: 'block',
      color: '#fff',
      borderRadius: '4px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      variants: {
          color: {
              red: {
                  backgroundColor: '#eb5a46',
              }
          }
      }
  })

  export const CardLabelModFront = styled(CardLabel, {
      minWidth: '40px',
      maxWidth: '40px',
      padding: 0,
      height: 8,
      margin: '0 4px 4px 0',
  })

  export const CardTitle = styled('span', {
      wordWrap: 'break-word',
      clear: 'both',
      color: '#172b4d',
      display: 'block',
      margin: '0 0 4px',
      overflow: 'hidden',
      textDecoration: 'none',
  })