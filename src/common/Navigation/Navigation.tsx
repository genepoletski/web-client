import React, { SyntheticEvent } from 'react';

type Props = {
  onClick?: (evt: SyntheticEvent, obj: { name: string; }) => void,
};

const Navigation: React.FC<Props> = ({
  onClick = () => undefined,
}) => (
  <nav>
    <ul>
      <li>
        <button
          name="home"
          onClick={(evt) => onClick(evt, { name: 'home' })}
          type="button"
        >
          Home
        </button>
      </li>
      <li>
        <button
          name="shoppingList"
          onClick={(evt) => onClick(evt, { name: 'shoppingList' })}
          type="button"
        >
          Shopping list
        </button>
      </li>
    </ul>
  </nav>
);

export default Navigation;