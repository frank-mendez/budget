import React from 'react';
import { Form, FormGroup, FormInput } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
	return (
		<Form unstackable>
			<FormGroup>
				<FormInput
					icon='tags'
					width={12}
					label='Description'
					placeholder='New shinning thing'
				/>
				<FormInput
					label='Value'
					width={4}
					placeholder='100'
					icon='dollar'
					iconPosition='left'
				/>
			</FormGroup>
			<ButtonSaveOrCancel />
		</Form>
	);
};

export default NewEntryForm;
