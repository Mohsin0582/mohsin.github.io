import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaBehanceSquare,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import { IoLogoJavascript, IoCloseCircle, IoMail } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';

interface IconProps {
  iconName: string;
}

interface IconComponents {
  [key: string]: React.ComponentType;
}

const Icon: React.FC<IconProps> = ({ iconName }: IconProps) => {
  // Map the icon names to their corresponding components

  const iconComponents: IconComponents = {
    linkedin: FaLinkedin,
    github: FaGithubSquare,
    facebook: FaFacebookSquare,
    behance: FaBehanceSquare,
    whatsapp: FaWhatsapp,
    react: FaReact,
    javascript: IoLogoJavascript,
    node: FaNodeJs,
    git: FaGithub,
    mongodb: DiMongodb,
    postgresql: BiLogoPostgresql,
    cancel: IoCloseCircle,
    mail: IoMail,
  };

  // Get the appropriate icon component based on the iconName prop
  const IconComponent = iconComponents[iconName.toLowerCase()];

  if (!IconComponent) {
    // Handle the case when an invalid iconName is provided
    return 'Icon?';
  }

  return <IconComponent />;
};

export default Icon;
