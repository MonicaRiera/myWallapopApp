import { IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonMenu, IonItem, IonList, IonLabel, IonAvatar } from '@ionic/react';
import React from 'react';

import ChatBubbles from 'react-ionicons/lib/IosChatbubblesOutline'
import Send from 'react-ionicons/lib/IosSendOutline'
import Search from 'react-ionicons/lib/IosSearchOutline'
import Book from 'react-ionicons/lib/IosBookOutline'
import Help from 'react-ionicons/lib/IosHelpCircleOutline'

class Menu extends React.Component {



	render() {
		return (
			<>
				<IonMenu side="start" menuId="first">
					<IonHeader>
					<IonToolbar translucent>
						<IonGrid>
							<IonRow>
								<IonCol>
									<IonAvatar>
										<img alt='' style={{marginLeft:40}} src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
									</IonAvatar>
								</IonCol>
								<IonCol>
									<IonRow>
										<h4>User Name</h4>
									</IonRow>
									<IonRow>
										<small>Go to my profile</small>
									</IonRow>
								</IonCol>
							</IonRow>
						</IonGrid>
						</IonToolbar>
					</IonHeader>
					<IonContent>
						<IonList>
							<IonItem>
								<ChatBubbles style={{margin:5}}></ChatBubbles>
								<IonLabel>Messages</IonLabel>
							</IonItem>
							<IonItem>
								<Send style={{margin:5}}></Send>
								<IonLabel>Deliveries</IonLabel>
							</IonItem>
							<IonItem>
								<Search style={{margin:5}}></Search>
								<IonLabel>My Searches</IonLabel>
							</IonItem>
							<IonItem>
								<Book style={{margin:5}}></Book>
								<IonLabel>Magazine</IonLabel>
							</IonItem>
							<IonItem>
								<Help style={{margin:5}}></Help>
								<IonLabel>Help</IonLabel>
							</IonItem>
						</IonList>
					</IonContent>
				</IonMenu>


		  </>
	  )
	}
};

export default Menu;
