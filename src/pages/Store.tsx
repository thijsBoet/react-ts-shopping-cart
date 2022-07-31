import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

const Store = () => {
	return (
		<>
			<div>
				<h1>Store</h1>
			</div>
			<Row lg={3} md={2} xs={1} className='g-3'>
				{storeItems.map(item => (
					<Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default Store;
