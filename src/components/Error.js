import "./error.css";
import { useRouteError } from "react-router-dom";

const Error = () => {
	const error= useRouteError();
	console.log(error);
    return (
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>{error.status}</h1>
				<h2>{error.statusText}</h2>
			</div>
			<a href={ "/"}>Homepage</a>
		</div>
	</div>
    )
}

export default Error;