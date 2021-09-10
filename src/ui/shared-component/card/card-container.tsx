import './card-container.scss';

const CardContainer: React.FC = (props) => {
    return (
        <div className="card-container flex">
            {props.children}
        </div>
    );
}

export default CardContainer;