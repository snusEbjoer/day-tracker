import { Cards } from '../Dashboard/Cards';
import { Search } from '../Dashboard/Search';
import './DashboardPage.css';

export const DashboardPage = () => {

	const day = new Date().toLocaleString('en-US', { day: 'numeric', month: 'long'});

	return (
		<div className="dashboard">
			<div className="dashboard-content">
			<h1 className="page_title dashboard_title">Today is {day}</h1>
				<div className="cards" >
					<Cards />
				</div>
				<div className="search"> 
					<Search />
				</div>
				<div className="actions" />
				<div className="stories" />
				<div className="banner" />
				<div className="board" />
				<div className="controls" />
			</div>
		</div>
	)
}
