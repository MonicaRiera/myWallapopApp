import { IonContent, IonHeader, IonPage, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, IonButton, IonSearchbar} from '@ionic/react';
import React from 'react';
import Menu from './Menu.jsx'
import Categories from './Categories.jsx'
import Card from './Card.jsx'
import MdMenu from 'react-ionicons/lib/MdMenu'

class Home extends React.Component {

	state = {
		products: [
			{
				images: [
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756448.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756449.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756450.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756452.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756453.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756454.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756456.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756458.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756459.jpg?pictureSize=W640',
					'https://cdn.wallapop.com/images/10420/5i/k7/__/c10420p333506821/i1024756460.jpg?pictureSize=W640'
				],
				price: 30990,
				description: 'Mercedes-Benz GLA 220 d SUV',
				category: 'Cars'
			},
			{
				images: [
					'https://cdn.wallapop.com/images/10420/6n/6t/__/c10420p401746087/i1024992061.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6n/6t/__/c10420p401746087/i1025022358.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6n/6t/__/c10420p401746087/i1025022361.jpg?pictureSize=W640'
				],
				price: 9,
				description: 'Gumboots size 21',
				category: 'Babies'
			},
			{
				images: [
					'https://cdn.wallapop.com/images/10420/6k/fu/__/c10420p397128185/i1005339626.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/fu/__/c10420p397128185/i1005335763.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/fu/__/c10420p397128185/i1005351325.jpg?pictureSize=W640'
				],
				price: 1200,
				description: 'Derby Senda 2009',
				category: 'Bikes'
			},
			{
				images: [
					'https://cdn.wallapop.com/images/10420/6l/v9/__/c10420p399527235/i1018413662.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/v9/__/c10420p399527235/i1018406010.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/v9/__/c10420p399527235/i1018417522.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/v9/__/c10420p399527235/i1018430636.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/v9/__/c10420p399527235/i1018432604.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/v9/__/c10420p399527235/i1018417524.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/v9/__/c10420p399527235/i1018426750.jpg?pictureSize=W640'
				],
				price: 55,
				description: 'Liu Jo Jacket',
				category: 'Fashion'
			},
			{
				images: [
					'https://cdn.wallapop.com/images/10420/6l/ax/__/c10420p398578916/i1014166644.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/ax/__/c10420p398578916/i1014172498.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6l/ax/__/c10420p398578916/i1014186167.jpg?pictureSize=W640'
				],
				price: 65,
				description: 'GoPro Hero 3',
				category: 'Electronics'
			},
			{
				images: [
					'https://cdn.wallapop.com/images/10420/6j/gg/__/c10420p395477742/i991741778.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6j/gg/__/c10420p395477742/i991755205.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6j/gg/__/c10420p395477742/i991786334.jpg?pictureSize=W640'
				],
				price: 20,
				description: 'Boxing gloves',
				category: 'Sports'
			},
			{
				images: [
					'https://cdn.wallapop.com/images/10420/6k/oq/__/c10420p397543100/i1008251109.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/oq/__/c10420p397543100/i1008268642.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/oq/__/c10420p397543100/i1008256941.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/oq/__/c10420p397543100/i1008266755.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/oq/__/c10420p397543100/i1008247342.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/oq/__/c10420p397543100/i1008264794.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/6k/oq/__/c10420p397543100/i1008253063.jpg?pictureSize=W640'
				],
				price: 60,
				description: 'PlayStation 2 Slim with games',
				category: 'Videogames'
			}
		],

		filteredProducts: []
	}

	filter = category => {
		let products = this.state.products
		let filteredProducts = this.state.filteredProducts
		filteredProducts = products.filter(p => p.category === category)

		this.setState({filteredProducts})
	}

	openMenu = () => {
		document.querySelector('.menu-type-overlay').open();
	}

	componentDidMount() {
		this.setState({
			filteredProducts: this.state.products
		})
	}

	render() {
		return (
	    <IonPage>
				<Menu />
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton autoHide="false" size="large">
								<MdMenu  onClick={this.openMenu}></MdMenu>
							</IonMenuButton>
							<IonSearchbar></IonSearchbar>
						</IonButtons>
					</IonToolbar>
				</IonHeader>

				<IonContent className="ion-padding">
					<IonGrid>

						<IonRow>
						<Categories filter={this.filter}/>
						</IonRow>
						{
							this.state.filteredProducts.map(p => <Card product={p}/>)
						}

					</IonGrid>
					<IonButton expand="block" color="secondary">Add Product</IonButton>
	      </IonContent>
	    </IonPage>
	  )
	}
};

export default Home;
