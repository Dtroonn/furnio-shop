import React from 'react';
import { Advantages } from './components/Advantages';
import { Gallery } from './components/Gallery';

import { MainSlider } from './components/MainSlider';
import { Products } from './components/Products';
import { RoomsSlider } from './components/RoomsSlider';
import { TipsAndTricks } from './components/TipsAndTricks';

// let text = "kawdkwakd <b>hello</b> hyayya";

export const HomePage: React.FC = () => {
	return (
		<div>
			{/* <p dangerouslySetInnerHTML={{ __html: text }} /> */}
			<MainSlider />
			<Advantages />
			<Products />
			<RoomsSlider />
			<TipsAndTricks />
			<Gallery />
		</div>
	);
};
