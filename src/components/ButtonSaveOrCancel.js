import React from 'react';
import { ButtonGroup, Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = () => {
	return (
		<ButtonGroup>
			<Button>Cancel</Button>
			<Button.Or />
			<Button primary>Ok</Button>
		</ButtonGroup>
	);
};

export default ButtonSaveOrCancel;
