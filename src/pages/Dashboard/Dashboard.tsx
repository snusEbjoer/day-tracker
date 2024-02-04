import { Cards } from '@/components/Dashboard/Cards';
import { Search } from '@/components/Dashboard/Search';
import './Dashboard.css';

export const Dashboard = () => {

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
