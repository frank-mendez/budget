import {
	Container,
	Grid,
	GridColumn,
	GridRow,
	Header,
	Icon,
	Segment,
	Statistic,
} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
	return (
		<Container>
			<MainHeader title='Budget' />

			<Statistic size='small'>
				<Statistic.Label>Your Balance:</Statistic.Label>
				<Statistic.Value>2500.53</Statistic.Value>
			</Statistic>

			<Segment textAlign='center'>
				<Grid columns={2} divided>
					<Grid.Row>
						<Grid.Column>
							<Statistic size='tiny' color='green'>
								<Statistic.Label sytle={{ textAlign: 'left' }}>
									{' '}
									Income:
								</Statistic.Label>
								<Statistic.Value>1034.50</Statistic.Value>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic size='tiny' color='red'>
								<Statistic.Label sytle={{ textAlign: 'left' }}>
									{' '}
									Expenses:
								</Statistic.Label>
								<Statistic.Value>134.50</Statistic.Value>
							</Statistic>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Header as='h3'>History</Header>
			<Segment color='red'>
				<Grid columns={3} textAlign='right'>
					<GridRow>
						<GridColumn width={10} textAlign='left'>
							Something
						</GridColumn>
						<GridColumn width={3} textAlign='right'>
							$10.00
						</GridColumn>
						<GridColumn width={3}>
							<Icon name='edit' bordered />
							<Icon name='trash' bordered />
						</GridColumn>
					</GridRow>
				</Grid>
			</Segment>
			<Segment color='green'>
				<Grid columns={3} textAlign='right'>
					<GridRow>
						<GridColumn width={10} textAlign='left'>
							Something
						</GridColumn>
						<GridColumn width={3} textAlign='right'>
							$100.00
						</GridColumn>
						<GridColumn width={3}>
							<Icon name='edit' bordered />
							<Icon name='trash' bordered />
						</GridColumn>
					</GridRow>
				</Grid>
			</Segment>
			<Segment color='red'>
				<Grid columns={3} textAlign='right'>
					<GridRow>
						<GridColumn width={10} textAlign='left'>
							Something
						</GridColumn>
						<GridColumn width={3} textAlign='right'>
							$10.00
						</GridColumn>
						<GridColumn width={3}>
							<Icon name='edit' bordered />
							<Icon name='trash' bordered />
						</GridColumn>
					</GridRow>
				</Grid>
			</Segment>

			<MainHeader type='h3' title='Add New Transaction' />
			<NewEntryForm />
		</Container>
	);
}

export default App;
