import './Cards.css';

export const Cards = () => {

	return (
		<div className="dashboard_cards">

			<div className="card">
				<h3 className="card_title">
					Title
				</h3>
				<h5 className="card_subtitle">
					Subtitle
				</h5>

				<div className="card_images" >

					<img src="https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
					<img src="https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

				</div>

			</div>

		</div>
	)
}
