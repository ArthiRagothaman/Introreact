//Make a component

/* function Header(props: HeaderProps) {
	return (
		<header className="bg-purple-500 flex justify-between items-center p-4">
			<span>{props.title}</span>
			<nav className="flex">
				{props.navElements.map((el) => (
					<li> key={el}</li>
				))}
			</nav>
		</header>
	);
} */

// Props
type HeaderProps = {
	title: string;
	navElements: string[];
};

// Make a component with keyword

export function Header({ title, navElements }: HeaderProps) {
	return (
		<header className="bg-red-500 flex justify-between items-center p-2">
			<span>{title}</span>
			<nav className="flex">
				{navElements.map((el) => (
					<li key={el}>{el}</li>
				))}
			</nav>
		</header>
	);
}
