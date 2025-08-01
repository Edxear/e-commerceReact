import './Container.css';

const Container = ({ welcomeMessage, children }) => {
  return (
    <div className="container">
      <h1 className="welcome-message">{welcomeMessage}</h1>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Container;


