import React from 'react'
import { IonSlides, IonSlide, IonCardContent, IonCard } from '@ionic/react'

class Categories extends React.Component {

	state = {
		categories: [
			{img:'https://es.wallapop.com/images/icons/categories/category_Cars_hover.svg', name:'Cars'},
			{img:'https://es.wallapop.com/images/icons/categories/category_BabiesChild_hover.svg', name:'Babies'},
			{img:'https://es.wallapop.com/images/icons/categories/category_Motorbike_hover.svg', name:'Bikes'},
			{img:'https://es.wallapop.com/images/icons/categories/category_FashionAccessories_hover.svg', name:'Fashion'},
			{img:'https://es.wallapop.com/images/icons/categories/category_ComputersElectronic_hover.svg', name:'Electronics'},
			{img:'https://es.wallapop.com/images/icons/categories/category_SportsLeisure_hover.svg', name:'Sports'},
			{img:'https://es.wallapop.com/images/icons/categories/category_GamesConsoles_hover.svg', name:'Videogames'},
		]
	}

	render () {
		return(
			<>
			<IonSlides options={{slidesPerView:4, spaceBetween:0}}>
			{
				this.state.categories.map(c =>
					<IonSlide key={c.name}>
						<IonCard onClick={() => this.props.filter(c.name)} style={{margin:0, width:90, boxShadow:'0px 0px'}}>
							<img src={c.img} style={{marginLeft:'auto', marginRight:'auto'}}/>
							<IonCardContent style={{padding:0}}>
							<small>{c.name}</small>
							</IonCardContent>
						</IonCard>
					</IonSlide>
				)
			}
			</IonSlides>
			</>
		)
	}
}

export default Categories;
