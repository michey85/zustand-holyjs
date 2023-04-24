import { CountryInfo } from '../types';

type CardProps = CountryInfo;

const Card = ({ img, info = [], name }: CardProps) => {
    return (
        <article className="card">
            <img src={img} alt={name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <ul className="card-info">
                    {info.map((el) => (
                        <li className="card-info-item" key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export { Card };
