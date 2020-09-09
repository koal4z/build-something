/* eslint-disable */
import React, { FC } from 'react';

interface Props {
  labels: string[];
}

// const List = ({ labels }: Props) => {
//   return (
//     <ul style={styles}>
//       {labels.map((label, index) => (
//         <li key={index}>{label}</li>
//       ))}
//     </ul>
//   );
// };

const List: React.FC<Props> = ({ labels }) => {
  return (
    <ul style={styles}>
      {labels.map((label, index) => (
        <li key={index}>{label}</li>
      ))}
    </ul>
  );
};

export default List;

const styles: React.CSSProperties = {
  backgroundColor: 'blue',
};
