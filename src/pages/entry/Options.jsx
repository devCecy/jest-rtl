// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";
import AlertBanner from "../common/AlertBanner";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);
	const { totals } = useOrderDetails();

	// optionType is 'scoops' or 'toppings
	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			// @ts-ignore
			.catch((error) => {
				setError(true);
			});
	}, [optionType]);

	const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
	const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

	const optionItems = items.map((item) => (
		// @ts-ignore
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
		/>
	));

	if (error) return <AlertBanner />;
	return (
		<>
			<h2>{title}</h2>
			<p>{formatCurrency(pricePerItem[optionType])} each</p>
			<p>
				{title} total: {formatCurrency(totals[optionType])}
			</p>
			<Row>{optionItems}</Row>
		</>
	);
}
