import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleLeft,
	faAngleRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	[
		{
			name: "Christine Gros",
			rating: 5,
			content:
				'"Tout au long du séjour, nous avons apprécié la qualite et les compétences de nos guides ainsi que le professionnalisme de PACHAMAMA, petite structure souple qui sait s’adapter aux désirs de ses clients et leur proposer un programme riche et passionnant."',
		},
		{
			name: "Rousseau Odile",
			rating: 5,
			content:
				'"Je voulais aller voir la forêt amazonienne. Un vieux rêve que je souhaitais réaliser mais comment faire ? Je n’avais fait qu’un seul voyage, au Québec, où on parlait ma langue. Un mois avant de partir, je ne savais toujours pas comment j’allais faire pour aller voir la forêt. Une amie m’a parlé du site de Pachamama…"',
		},
	],
	[
		{
			name: "Brigitte Van Haute",
			rating: 5,
			content:
				'"Nous étions 4 personnes. Ce voyage avait été organisé par l’Agence Pachamama qui s’est montrée très ouverte à nos souhaits et nos demandes particulières. Nous avons été conseillés, guidés, transportés et accompagnés par des personnes compétentes et qui nous…"',
		},
		{
			name: "Deladriere",
			rating: 5,
			content:
				'On revient du Pérou, nous étions 8 personnes. Pachamama a fait un travail fantastique et de grandes qualités. Les hôtels étaient conformes à nos attentes, les guides connaissaient leurs matières. On n’a jamais été laissé au dépourvu, tout a été pris en main de manière très professionnelle. On compte revenir vers eux pour un séjour en Bolivie et au nord du Pérou.',
		}
	],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("flex flex-wrap gap-0.5", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-base sm:text-[22px] text-yellow-500"
						/>
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							className="text-base sm:text-[22px] text-yellow-500"
						/>
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-base sm:text-[22px] text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ item }) => {
	const { rating, content, name } = item;
	return (
		<div className="bg-white shadow-xl rounded-xl hover:-translate-y-1 h-full  duration-300 p-5 md:min-h-[300px]">
			<div className="mt-0 sm:mt-4 mb-6">
				<div className="flex justify-between items-center mb-3 md:mb-6">
					<div className="flex items-center">

						<div>
							<h3 className="text-base md:text-lg sm:text-xl break-all font-medium">{name}</h3>
						</div>
					</div>
					<Rating rating={rating} showLabel={false} />
				</div>
				<p className="leading-[1.8] opacity-80 text-sm md:text-base">{content}</p>
			</div>
		</div>
	);
};
TestimonialItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Testimonial = () => {
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};


	return (
		<section className="ezy__testimonial21 light py-14 md:py-24 bg-white self-center">
			<div className="container px-5 max-w-[1000px] w-full relative">
				<div className="flex justify-center text-center mb-6 lg:mb-12">
					<div className="max-w-lg">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6 uppercase">
							Testimonios
						</h2>
						<p className="text-lg opacity-80">
							Mucho de los turistas quedaron fascinados, nos cuentan sus experiencias.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-6 mt-12 self-center items-center justify-center">
					{testimonialList[index].map((item, i) => (
						<div className="col-span-2 md:col-span-1 flex justify-center items-center self-center" key={i}>
							<TestimonialItem item={item} />
						</div>
					))}
				</div>

				<div className="relative flex justify-center items-center my-12">
					<button
						className="text-lg bg-white shadow-2xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
						onClick={() => handleControl("prev")} alt="Flecha izquierda"
					>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button
						className="text-lg bg-white shadow-2xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
						onClick={() => handleControl("next")} alt="Flecha derecha"
					>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				</div>
			</div>
		</section>
	);
};


export default Testimonial