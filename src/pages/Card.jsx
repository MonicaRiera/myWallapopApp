import React from 'react'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonSlides, IonSlide } from '@ionic/react'

class Card extends React.Component {
	state = {
			product: {
				images: [],
				price: 0,
				description: '',
				category: ''
			},

			selectedImg: ''
	}

	componentWillReceiveProps(props) {
		this.setState({product: props.product})
	}

	componentDidMount() {
		this.setState({
			product: this.props.product,
			selectedImg: this.props.product.images[0]
		})
	}

	render () {
		return(
			<IonCard>
				<IonSlides options={{slidesPerView:1, spaceBetween:0}}>
					{
						this.state.product.images.map((img, i) =>
							<IonSlide key={i} style={{height:"170px"}}>
								<div style={{height:"100%", width:"100%", backgroundImage:`url(${img})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}></div>
							</IonSlide>
						)
					}
				</IonSlides>
				<IonCardHeader>
					<IonCardTitle>{this.state.product.price} €</IonCardTitle>
					<IonCardSubtitle>{this.state.product.description}</IonCardSubtitle>
				</IonCardHeader>
			</IonCard>
		)
	}
}

export default Card;
