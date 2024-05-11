interface IconLinks {
  [key: string]: string;
}

interface HrefProps {
  iconLink: string;
  target?: '_blank' | '_self' | '_parent' | '_top'; // Specify allowed target values
  children?: React.ReactNode;
}

// Map the icon names to their corresponding components
const iconLinks: IconLinks = {
  linkedin: 'https://www.linkedin.com/in/m-mohsin-shahzad-aa874912a/',
  github: 'https://github.com/Mohsin0582',
  facebook: 'https://www.facebook.com/muhammadmohsin.shahzad.3',
  behance: 'https://www.behance.net/mmohsinshahzad',
  whatsapp: 'https://wa.me/+923201411841',
  mail: 'mailto:mohsin16993@gmail.com',
  tf: 'https://trading-flow.netlify.app',
  skull_studio: 'https://skullstudio.netlify.app',
  nft_trader: 'https://nfttrader.netlify.app',
};

const Icon: React.FC<HrefProps> = (props: HrefProps) => {
  // Get the appropriate icon component based on the iconName prop
  const IconLink = iconLinks[props.iconLink.toLowerCase()];

  if (!IconLink) {
    // Handle the case when an invalid iconName is provided
    return 'Link?';
  }

  return (
    <>
      {props.target ? (
        <a href={IconLink} target={props.target} rel="noopener noreferrer">
          {props.children}
        </a>
      ) : (
        <a href={IconLink} rel="noopener noreferrer">
          {props.children}
        </a>
      )}
    </>
  );
};

export default Icon;
