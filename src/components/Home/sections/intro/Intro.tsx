import moment from "moment";
import Avatar from "./../../../../assets/images/avatar.png";
import CanadianFlag from "./../../../../assets/images/flags/ca.png";

import global from "./../../../../config/global";

export default function Intro() {
	const yearsOfJSExperience = moment().diff(
		global.startOfJavascriptExperience,
		"years"
	);
	return (
		<div id="intro">
			<div className="flex items-center justify-center my-20 mx-12">
				<div className="flex-1 p-20">
					<div className="text-4xl text-right font-thin text-white/60">
						<div> Hello world, I am</div>
						<div className="text-7xl text-right font-black text-white tracking-tighter [text-shadow:0_0_8px_rgba(0,0,0,0.7)]">
							Quentin Desbois
						</div>
					</div>
					<div className="text-3xl text-right uppercase font-black text-yellow-500">
						Fullstack Javascript Developer
					</div>
					<div className="flex justify-end text-2xl mt-2 text-right font-light text-white/80">
						<div className="max-w-xl flex items-center">
							<div className="font-bold tracking-tight">
								Senior Dev <span className="font-thin">with </span>
								{yearsOfJSExperience} years of XP
								<span className="font-thin">, based in </span>Montréal
							</div>
							<img
								width="30px"
								src={CanadianFlag}
								alt="canada_flag"
								className="ml-1"
							/>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<img src={Avatar} width="450" alt="Avatar" />
				</div>
			</div>
		</div>
	);
}
