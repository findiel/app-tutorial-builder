import ReactDOM from 'react-dom';
import StyledOverLay from '../styles/Overlay.styles';

const Overlay: React.FC = () => {
  const styledOverLay = <StyledOverLay></StyledOverLay>;
  const portalNode = document.getElementById('tutorial-app-overlay-portal');
  if (portalNode) {
    return ReactDOM.createPortal(styledOverLay, portalNode);
  }
  return null;
};

export default Overlay;
