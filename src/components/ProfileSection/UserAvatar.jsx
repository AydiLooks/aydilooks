import React from 'react';
// import styled from 'styled-components'; // Optional, for styling
// import { Avatar } from '@dicebear/avatars';
// import * as style from '@dicebear/avatars-avataaars-sprites';
 // Choose a style (e.g., avataaars)

// const AvatarImage = styled.img`
//   width: 50px; /* Adjust size as needed */
//   height: 50px;
//   border-radius: 50%; /* Rounded avatar */
// `;

const generateAvatar = (seed) => {
  const svg = new Avatar(style, { seed }).create();
  // Convert SVG to base64 to use as src for <img>
  const base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};

const UserAvatar = ({ email }) => {
  // Use the email as a seed for consistent avatars
  const avatarSrc = generateAvatar(email);

  return <AvatarImage src={avatarSrc} alt="User Avatar" />;
};

export default UserAvatar;
