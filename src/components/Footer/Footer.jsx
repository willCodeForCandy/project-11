import './Footer.css';
const socialsArray = [
  {
    name: 'linkedIn',
    url: 'https://www.linkedin.com/in/virginia-raschia/',
    icon: 'https://img.icons8.com/ios-filled/50/linkedin.png',
  },

  {
    name: 'gitHub',
    url: 'https://github.com/willCodeForCandy',
    icon: 'https://img.icons8.com/ios-filled/50/github.png',
  },
];

const Socials = () => {
  return (
    <>
      {socialsArray.map((social, index) => {
        return (
          <li key={index}>
            <a href={social.url} target="_blank" rel="noopener">
              <img src={social.icon} alt={social.name} />
            </a>
          </li>
        );
      })}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="stitched">
      <p>Made with love by @Viru</p>
      <menu>
        <Socials />
      </menu>
    </footer>
  );
};

export default Footer;
