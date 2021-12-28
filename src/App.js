import { Container, Grid, Header, Segment, Statistic } from 'semantic-ui-react';

function App() {
	return (
		<Container>
			<Header as='h1'>Budget</Header>
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
									Incoming:
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
		</Container>
	);
}

export default App;
